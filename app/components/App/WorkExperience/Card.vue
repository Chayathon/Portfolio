<template>
    <div class="relative pl-8 md:pl-12">
        <div
            v-if="showLine"
            class="absolute left-3 md:left-6 top-12 bottom-0 w-0.5 bg-linear-to-b from-primary-500 to-primary-300 dark:from-primary-400 dark:to-primary-600"
        ></div>

        <div
            class="absolute left-0 md:left-2 top-2 size-6 md:size-8 rounded-full bg-primary-500 flex items-center justify-center shadow-lg"
        >
            <UIcon :name="work.icon" class="size-3 md:size-4 text-white" />
        </div>

        <UCard
            class="bg-default dark:bg-neutral-800 shadow-md rounded-xl hover:scale-[1.01] hover:shadow-xl transition-all duration-300"
        >
            <template #header>
                <div class="flex items-start justify-between gap-4 -mb-2">
                    <div class="flex-1 min-w-0 space-y-2">
                        <h3
                            class="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white"
                        >
                            {{ work.title }}
                        </h3>
                        <div
                            class="flex items-center gap-2 text-base text-gray-700 dark:text-gray-300"
                        >
                            <UIcon
                                name="i-lucide-building-2"
                                class="size-4 sm:size-5 shrink-0"
                            />
                            <span
                                class="text-xs sm:text-sm md:text-base font-medium"
                            >
                                {{ work.company }}
                            </span>
                        </div>
                        <div
                            class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                            <UIcon
                                name="i-lucide-map-pin"
                                class="size-3 sm:size-4 shrink-0"
                            />
                            <span class="text-xs sm:text-sm md:text-base">
                                {{ work.location }}
                            </span>
                        </div>
                    </div>
                    <UBadge variant="subtle" size="lg" class="shrink-0">
                        {{ t(`workexperience.${work.type}`) }}
                    </UBadge>
                </div>
            </template>

            <div class="space-y-3">
                <div
                    class="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                >
                    <UIcon
                        name="i-lucide-calendar"
                        class="size-3 sm:size-4 shrink-0"
                    />
                    <span class="font-medium">{{ work.date }}</span>
                </div>
                <p
                    class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                    {{ work.description }}
                </p>
            </div>
        </UCard>
    </div>
</template>

<script setup lang="ts">
type TimelineItem = {
    icon: string;
    title: string;
    company: string;
    description: string;
    location: string;
    date: string;
    type: "intern" | "part-time" | "full-time";
};

defineProps<{
    work: TimelineItem;
    showLine?: boolean;
}>();

const { t } = useI18n();
</script>
