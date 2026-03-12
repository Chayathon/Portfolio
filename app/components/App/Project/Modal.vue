<template>
    <UModal
        v-model:open="open"
        :title="title"
        :ui="{
            content:
                'sm:mx-auto sm:w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl rounded-2xl',
            footer: 'gap-4',
        }"
    >
        <template #body>
            <div class="space-y-4">
                <div v-if="images" class="flex-1 w-full">
                    <UCarousel
                        ref="carousel"
                        v-slot="{ item }"
                        arrows
                        loop
                        :items="images"
                        :prev="{ onClick: onClickPrev }"
                        :next="{ onClick: onClickNext }"
                        class="w-full sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto"
                        @select="onSelect"
                    >
                        <img
                            :src="item"
                            class="rounded-2xl border border-neutral-200 dark:border-neutral-700"
                            loading="lazy"
                        />
                    </UCarousel>

                    <div
                        class="flex gap-1 justify-between pt-4 max-w-sm mx-auto"
                    >
                        <div
                            v-for="(item, index) in images"
                            :key="index"
                            class="w-32 opacity-50 hover:opacity-100 transition-opacity"
                            :class="{ 'opacity-100': activeIndex === index }"
                            @click="select(index)"
                        >
                            <img
                                :src="item"
                                width="80"
                                height="80"
                                class="rounded-lg border border-neutral-400 dark:border-neutral-700"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                <img
                    v-else
                    :src="coverImage.src"
                    :alt="coverImage.alt"
                    loading="lazy"
                    class="h-96 w-full rounded-xl object-cover border border-neutral-200 dark:border-neutral-700"
                />

                <div class="flex justify-between items-start">
                    <h2 class="text-2xl font-bold">{{ title }}</h2>
                    <div class="space-x-2">
                        <AppProjectTypeBadge :type="type" />
                        <AppProjectStatusBadge :status="status" />
                    </div>
                </div>
                <p>{{ description }}</p>

                <div v-if="features" class="space-y-2">
                    <h3 class="text-lg font-semibold">
                        {{ t("projects.features") }}
                    </h3>
                    <ul class="list-disc list-inside space-y-1">
                        <li v-for="(feature, index) in features" :key="index">
                            {{ feature }}
                        </li>
                    </ul>
                </div>

                <div class="flex flex-wrap gap-2">
                    <UBadge v-for="tech in technologies" variant="soft">
                        {{ tech }}
                    </UBadge>
                </div>
            </div>
        </template>

        <template #footer v-if="url || github">
            <UButton
                v-if="url"
                size="lg"
                icon="i-lucide-globe"
                :href="url"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:scale-105 transition duration-200"
                :disabled="status !== 'online'"
            >
                {{ t("projects.viewProject") }}
            </UButton>

            <UButton
                v-if="github"
                color="neutral"
                size="lg"
                icon="i-simple-icons-github"
                :href="github"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:scale-105 transition duration-200"
            >
                {{ t("projects.viewGithub") }}
            </UButton>
        </template>
    </UModal>
</template>

<script setup lang="ts">
const open = defineModel<boolean>("open", { default: false });

defineProps<{
    title: string;
    description: string;
    features?: string[];
    coverImage: {
        src: string;
        alt: string;
    };
    images?: string[];
    technologies: string[];
    type: "web" | "mobile" | "desktop" | "other";
    status: "online" | "offline" | "development";
    url?: string;
    github?: string;
}>();

const { t } = useI18n();

const carousel = useTemplateRef("carousel");
const activeIndex = ref(0);

function onClickPrev() {
    activeIndex.value--;
}
function onClickNext() {
    activeIndex.value++;
}
function onSelect(index: number) {
    activeIndex.value = index;
}

function select(index: number) {
    activeIndex.value = index;

    carousel.value?.emblaApi?.scrollTo(index);
}
</script>
