<template>
    <UBadge
        :color="statusColor"
        size="sm"
        class="rounded-full shadow-lg backdrop-blur-sm"
        :class="status === 'online' ? 'animate-pulse' : ''"
    >
        {{ t(`projects.status.${props.status}`) }}
    </UBadge>
</template>

<script setup lang="ts">
const props = defineProps<{
    status: "online" | "offline" | "development";
}>();

const statusColor = computed(() => {
    switch (props.status) {
        case "online":
            return "success";
        case "offline":
            return "error";
        case "development":
            return "warning";
        default:
            return "neutral";
    }
});

const { t } = useI18n();
</script>
