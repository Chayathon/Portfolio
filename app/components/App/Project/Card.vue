<template>
    <UCard
        class="group h-full rounded-2xl shadow-md cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
    >
        <template #header>
            <div
                class="relative aspect-video overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700"
            >
                <img
                    :src="coverImage.src"
                    :alt="coverImage.alt"
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute top-3 right-3">
                    <AppProjectStatusBadge :status="status" />
                </div>
            </div>
        </template>

        <div class="space-y-4 flex-1 flex flex-col">
            <h3
                class="text-xl font-bold line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200"
            >
                {{ title }}
            </h3>

            <p class="text-sm leading-relaxed line-clamp-3">
                {{ description }}
            </p>

            <div class="flex-1"></div>

            <div class="flex flex-wrap gap-2">
                <UBadge
                    v-for="tech in technologies.slice(0, 4)"
                    :key="tech"
                    variant="soft"
                    size="sm"
                >
                    {{ tech }}
                </UBadge>
                <UBadge
                    v-if="technologies.length > 4"
                    color="neutral"
                    variant="subtle"
                    size="sm"
                >
                    +{{ technologies.length - 4 }}
                </UBadge>
            </div>

            <div
                class="flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
                <span>{{ t("projects.viewDetails") }}</span>
                <UIcon name="i-lucide-arrow-right" class="w-4 h-4" />
            </div>
        </div>
    </UCard>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    description: string;
    coverImage: {
        src: string;
        alt: string;
    };
    technologies: string[];
    status: "online" | "offline" | "development";
}>();

const { t } = useI18n();
</script>
