<template>
    <div class="interactive-bg" aria-hidden="true">
        <canvas ref="canvasRef" class="interactive-bg__canvas" />
        <div class="interactive-bg__veil" />
    </div>
</template>

<script setup lang="ts">
import * as THREE from "three";

const colorMode = useColorMode();
const canvasRef = ref<HTMLCanvasElement | null>(null);

const isMobile = ref(false);

let renderer: THREE.WebGLRenderer | null = null;
let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;
let points: THREE.Points | null = null;
let pointPositions: Float32Array | null = null;
let pointBasePositions: Float32Array | null = null;
let frameId = 0;

const PARTICLE_FIELD_WIDTH = 16;
const PARTICLE_FIELD_HEIGHT = 10;
const PARTICLE_REPEL_RADIUS = 1.35;
const PARTICLE_REPEL_STRENGTH = 0.45;
const PARTICLE_REPEL_DEPTH = 0.18;
const PARTICLE_FOLLOW_EASING = 0.08;

const pointer = {
    isActive: false,
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
};

const updatePalette = () => {
    if (!renderer || !points) {
        return;
    }

    const isDark = colorMode.value === "dark";
    const material = points.material as THREE.PointsMaterial;
    material.color.set(isDark ? "#34d399" : "#0f766e");
    material.opacity = isDark ? 0.24 : 0.16;
    renderer.setClearColor(0x000000, 0);
};

const onPointerMove = (event: MouseEvent) => {
    pointer.isActive = true;
    pointer.targetX = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.targetY = 1 - (event.clientY / window.innerHeight) * 2;
};

const onPointerLeave = () => {
    pointer.isActive = false;
    pointer.targetX = 0;
    pointer.targetY = 0;
};

const onWindowMouseOut = (event: MouseEvent) => {
    if (event.relatedTarget === null) {
        onPointerLeave();
    }
};

const onResize = () => {
    if (!renderer || !camera) {
        return;
    }

    isMobile.value = window.matchMedia("(max-width: 768px)").matches;

    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, isMobile.value ? 1.1 : 1.5),
    );
    renderer.setSize(width, height);
};

const animate = () => {
    if (!renderer || !scene || !camera || !points) {
        return;
    }

    pointer.currentX += (pointer.targetX - pointer.currentX) * 0.04;
    pointer.currentY += (pointer.targetY - pointer.currentY) * 0.04;

    points.rotation.y += 0.00045;

    if (pointPositions && pointBasePositions) {
        const rotationY = points.rotation.y;
        const cosRotation = Math.cos(rotationY);
        const sinRotation = Math.sin(rotationY);
        const frustumScale = Math.tan(
            THREE.MathUtils.degToRad(camera.fov * 0.5),
        );

        for (let i = 0; i < pointPositions.length; i += 3) {
            const baseX = pointBasePositions[i];
            const baseY = pointBasePositions[i + 1];
            const baseZ = pointBasePositions[i + 2];

            let targetX = baseX;
            let targetY = baseY;
            let targetZ = baseZ;

            if (pointer.isActive) {
                const worldX = baseX * cosRotation + baseZ * sinRotation;
                const worldY = baseY;
                const worldZ = -baseX * sinRotation + baseZ * cosRotation;
                const depth = camera.position.z - worldZ;
                const halfHeight = frustumScale * depth;
                const halfWidth = halfHeight * camera.aspect;
                const pointerX = pointer.currentX * halfWidth;
                const pointerY = pointer.currentY * halfHeight;
                const deltaX = worldX - pointerX;
                const deltaY = worldY - pointerY;
                const distance = Math.hypot(deltaX, deltaY);

                if (distance < PARTICLE_REPEL_RADIUS) {
                    const influence = 1 - distance / PARTICLE_REPEL_RADIUS;
                    const safeDistance = Math.max(distance, 0.001);
                    const force =
                        influence * influence * PARTICLE_REPEL_STRENGTH;
                    const targetWorldX =
                        worldX + (deltaX / safeDistance) * force;
                    const targetWorldY =
                        worldY + (deltaY / safeDistance) * force;
                    const targetWorldZ =
                        worldZ + influence * PARTICLE_REPEL_DEPTH;

                    targetX =
                        targetWorldX * cosRotation - targetWorldZ * sinRotation;
                    targetY = targetWorldY;
                    targetZ =
                        targetWorldX * sinRotation + targetWorldZ * cosRotation;
                }
            }

            pointPositions[i] +=
                (targetX - pointPositions[i]) * PARTICLE_FOLLOW_EASING;
            pointPositions[i + 1] +=
                (targetY - pointPositions[i + 1]) * PARTICLE_FOLLOW_EASING;
            pointPositions[i + 2] +=
                (targetZ - pointPositions[i + 2]) * PARTICLE_FOLLOW_EASING;
        }

        points.geometry.attributes.position.needsUpdate = true;
    }

    renderer.render(scene, camera);
    frameId = requestAnimationFrame(animate);
};

onMounted(() => {
    const canvas = canvasRef.value;
    if (!canvas) {
        return;
    }

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        100,
    );
    camera.position.z = 7;

    renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        alpha: true,
    });

    isMobile.value = window.matchMedia("(max-width: 768px)").matches;

    const particleCount = isMobile.value ? 68 : 190;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * PARTICLE_FIELD_WIDTH;
        positions[i3 + 1] = (Math.random() - 0.5) * PARTICLE_FIELD_HEIGHT;
        positions[i3 + 2] = (Math.random() - 0.5) * 8;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointPositions = positions;
    pointBasePositions = positions.slice();

    const material = new THREE.PointsMaterial({
        size: isMobile.value ? 0.06 : 0.07,
        transparent: true,
        opacity: 0.16,
        color: "#0f766e",
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });

    points = new THREE.Points(geometry, material);
    scene.add(points);

    updatePalette();
    onResize();
    frameId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("blur", onPointerLeave);
    window.addEventListener("mouseout", onWindowMouseOut);
    window.addEventListener("resize", onResize);
});

watch(
    () => colorMode.value,
    () => {
        updatePalette();
    },
);

onBeforeUnmount(() => {
    cancelAnimationFrame(frameId);
    window.removeEventListener("mousemove", onPointerMove);
    window.removeEventListener("blur", onPointerLeave);
    window.removeEventListener("mouseout", onWindowMouseOut);
    window.removeEventListener("resize", onResize);

    if (points) {
        points.geometry.dispose();
        (points.material as THREE.PointsMaterial).dispose();
        points = null;
    }

    pointPositions = null;
    pointBasePositions = null;
    renderer?.dispose();
    renderer = null;
    scene = null;
    camera = null;
});
</script>

<style scoped>
.interactive-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
}

.interactive-bg__canvas {
    width: 100%;
    height: 100%;
    display: block;
}

.interactive-bg__veil {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(
            900px circle at 12% 18%,
            rgb(20 184 166 / 0.18),
            transparent 58%
        ),
        radial-gradient(
            800px circle at 88% 76%,
            rgb(16 185 129 / 0.14),
            transparent 56%
        );
}

:global(.dark) .interactive-bg__veil {
    background:
        radial-gradient(
            900px circle at 12% 18%,
            rgb(16 185 129 / 0.2),
            transparent 60%
        ),
        radial-gradient(
            800px circle at 88% 76%,
            rgb(52 211 153 / 0.14),
            transparent 58%
        );
}
</style>
