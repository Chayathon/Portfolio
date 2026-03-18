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

let renderer: THREE.WebGLRenderer | null = null;
let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;
let points: THREE.Points | null = null;
let pointPositionAttribute: THREE.BufferAttribute | null = null;
let pointPositions: Float32Array | null = null;
let pointBasePositions: Float32Array | null = null;
let frameId = 0;

const PARTICLE_FIELD_WIDTH = 16;
const PARTICLE_FIELD_HEIGHT = 10;
const PARTICLE_REPEL_RADIUS = 1.35;
const PARTICLE_REPEL_RADIUS_SQ = PARTICLE_REPEL_RADIUS ** 2;
const PARTICLE_REPEL_STRENGTH = 0.45;
const PARTICLE_REPEL_DEPTH = 0.18;
const PARTICLE_FOLLOW_EASING = 0.08;
const PARTICLE_SETTLE_EPSILON = 0.002;
const PARTICLE_SETTLE_EPSILON_SQ = PARTICLE_SETTLE_EPSILON ** 2;

const pointer = {
    isActive: false,
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
};

const isMobileViewport = () => window.matchMedia("(max-width: 1024px)").matches;

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

    const mobileViewport = isMobileViewport();

    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, mobileViewport ? 1.1 : 1.5),
    );
    renderer.setSize(width, height);

    if (points) {
        const material = points.material as THREE.PointsMaterial;
        material.size = mobileViewport ? 0.06 : 0.07;
    }
};

const updateParticles = () => {
    if (
        !camera ||
        !points ||
        !pointPositions ||
        !pointBasePositions ||
        !pointPositionAttribute
    ) {
        return;
    }

    let didMutatePositions = false;

    const rotationY = points.rotation.y;
    const cosRotation = Math.cos(rotationY);
    const sinRotation = Math.sin(rotationY);
    const frustumScale = Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5));
    const pointerScaleX = pointer.currentX * camera.aspect * frustumScale;
    const pointerScaleY = pointer.currentY * frustumScale;

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
            const deltaX = worldX - pointerScaleX * depth;
            const deltaY = worldY - pointerScaleY * depth;
            const distanceSq = deltaX * deltaX + deltaY * deltaY;

            if (distanceSq < PARTICLE_REPEL_RADIUS_SQ) {
                const safeDistance = Math.max(Math.sqrt(distanceSq), 0.001);
                const influence = 1 - safeDistance / PARTICLE_REPEL_RADIUS;
                const force = influence * influence * PARTICLE_REPEL_STRENGTH;
                const targetWorldX = worldX + (deltaX / safeDistance) * force;
                const targetWorldY = worldY + (deltaY / safeDistance) * force;
                const targetWorldZ = worldZ + influence * PARTICLE_REPEL_DEPTH;

                targetX =
                    targetWorldX * cosRotation - targetWorldZ * sinRotation;
                targetY = targetWorldY;
                targetZ =
                    targetWorldX * sinRotation + targetWorldZ * cosRotation;
            }
        }

        const deltaToTargetX = targetX - pointPositions[i];
        const deltaToTargetY = targetY - pointPositions[i + 1];
        const deltaToTargetZ = targetZ - pointPositions[i + 2];
        const distanceToTargetSq =
            deltaToTargetX * deltaToTargetX +
            deltaToTargetY * deltaToTargetY +
            deltaToTargetZ * deltaToTargetZ;

        if (distanceToTargetSq > PARTICLE_SETTLE_EPSILON_SQ) {
            pointPositions[i] += deltaToTargetX * PARTICLE_FOLLOW_EASING;
            pointPositions[i + 1] += deltaToTargetY * PARTICLE_FOLLOW_EASING;
            pointPositions[i + 2] += deltaToTargetZ * PARTICLE_FOLLOW_EASING;
            didMutatePositions = true;
            continue;
        }

        if (
            pointPositions[i] !== targetX ||
            pointPositions[i + 1] !== targetY ||
            pointPositions[i + 2] !== targetZ
        ) {
            pointPositions[i] = targetX;
            pointPositions[i + 1] = targetY;
            pointPositions[i + 2] = targetZ;
            didMutatePositions = true;
        }
    }

    if (didMutatePositions) {
        pointPositionAttribute.needsUpdate = true;
    }
};

const animate = () => {
    if (!renderer || !scene || !camera || !points) {
        return;
    }

    pointer.currentX += (pointer.targetX - pointer.currentX) * 0.04;
    pointer.currentY += (pointer.targetY - pointer.currentY) * 0.04;

    points.rotation.y += 0.00045;
    updateParticles();

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

    const mobileViewport = isMobileViewport();
    const particleCount = mobileViewport ? 68 : 190;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * PARTICLE_FIELD_WIDTH;
        positions[i3 + 1] = (Math.random() - 0.5) * PARTICLE_FIELD_HEIGHT;
        positions[i3 + 2] = (Math.random() - 0.5) * 8;
    }

    const geometry = new THREE.BufferGeometry();
    pointPositionAttribute = new THREE.BufferAttribute(positions, 3);
    pointPositionAttribute.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("position", pointPositionAttribute);
    pointPositions = positions;
    pointBasePositions = positions.slice();

    const material = new THREE.PointsMaterial({
        size: mobileViewport ? 0.06 : 0.07,
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
    pointPositionAttribute = null;
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
    isolation: isolate;
    --interactive-bg-glow-a: rgb(45 212 191 / 0.2);
    --interactive-bg-glow-b: rgb(20 184 166 / 0.14);
    --interactive-bg-glow-c: rgb(16 185 129 / 0.1);
    --interactive-bg-glow-d: rgb(255 255 255 / 0.35);
    --interactive-bg-line: rgb(15 23 42 / 0.05);
}

:global(.dark) .interactive-bg {
    --interactive-bg-glow-a: rgb(52 211 153 / 0.24);
    --interactive-bg-glow-b: rgb(45 212 191 / 0.18);
    --interactive-bg-glow-c: rgb(16 185 129 / 0.14);
    --interactive-bg-glow-d: rgb(167 243 208 / 0.14);
    --interactive-bg-line: rgb(255 255 255 / 0.06);
}

.interactive-bg__canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    filter: saturate(1.04);
}

.interactive-bg__veil {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(
            56rem 56rem at 14% 16%,
            var(--interactive-bg-glow-a),
            transparent 58%
        ),
        radial-gradient(
            40rem 40rem at 82% 22%,
            var(--interactive-bg-glow-b),
            transparent 54%
        ),
        radial-gradient(
            48rem 48rem at 50% 82%,
            var(--interactive-bg-glow-c),
            transparent 60%
        );
    opacity: 0.92;
}

.interactive-bg__veil::before,
.interactive-bg__veil::after {
    content: "";
    position: absolute;
}

.interactive-bg__veil::before {
    inset: -10%;
    background:
        radial-gradient(
            32rem 32rem at 24% 68%,
            var(--interactive-bg-glow-d),
            transparent 62%
        ),
        radial-gradient(
            44rem 44rem at 78% 72%,
            var(--interactive-bg-glow-c),
            transparent 68%
        );
    filter: blur(48px);
    opacity: 0.72;
    transform: scale(1.06);
}

.interactive-bg__veil::after {
    inset: 0;
    background:
        linear-gradient(
            115deg,
            transparent 12%,
            var(--interactive-bg-line) 30%,
            transparent 48%
        ),
        linear-gradient(
            295deg,
            transparent 24%,
            var(--interactive-bg-line) 44%,
            transparent 62%
        );
    mask-image: radial-gradient(circle at center, black 34%, transparent 88%);
    opacity: 0.85;
}

@media (max-width: 1024px) {
    .interactive-bg__veil {
        background:
            radial-gradient(
                24rem 24rem at 12% 14%,
                rgb(45 212 191 / 0.11),
                transparent 60%
            ),
            radial-gradient(
                18rem 18rem at 88% 18%,
                rgb(20 184 166 / 0.08),
                transparent 58%
            ),
            radial-gradient(
                22rem 22rem at 50% 88%,
                rgb(16 185 129 / 0.06),
                transparent 64%
            );
        opacity: 0.82;
    }

    .interactive-bg__veil::before {
        inset: -4%;
        background:
            radial-gradient(
                18rem 18rem at 28% 72%,
                rgb(255 255 255 / 0.18),
                transparent 64%
            ),
            radial-gradient(
                24rem 24rem at 76% 76%,
                rgb(16 185 129 / 0.05),
                transparent 70%
            );
        filter: blur(36px);
        opacity: 0.42;
    }
}
</style>
