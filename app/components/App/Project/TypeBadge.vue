<template>
    <UBadge
        variant="soft"
        :color="typeColor"
        size="sm"
        class="rounded-full shadow-lg backdrop-blur-sm"
    >
        {{ t(`projects.type.${props.type}`) }}
    </UBadge>
</template>

<script setup lang="ts">
const props = defineProps<{
    type: "web" | "mobile" | "desktop" | "other";
}>();

const typeColor = computed(() => {
    switch (props.type) {
        case "web":
            return "primary";
        case "mobile":
            return "secondary";
        case "desktop":
            return "warning";
        case "other":
            return "neutral";
    }
});

const { t } = useI18n();
</script>
