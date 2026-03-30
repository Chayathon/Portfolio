<template>
    <UModal
        v-model:open="open"
        :title="title"
        :ui="{
            content:
                'sm:mx-auto sm:w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl rounded-2xl',
            footer: 'flex justify-between',
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
                            class="max-h-48 lg:max-h-64 xl:max-h-96 mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-700"
                            loading="lazy"
                        />
                    </UCarousel>

                    <div
                        class="flex gap-1 justify-between pt-4 max-w-sm mx-auto"
                    >
                        <div
                            v-for="(item, index) in images"
                            :key="index"
                            class="opacity-50 hover:opacity-100 transition-opacity"
                            :class="{ 'opacity-100': activeIndex === index }"
                            @click="select(index)"
                        >
                            <img
                                :src="item"
                                class="max-h-12 rounded-lg border border-neutral-400 dark:border-neutral-700"
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

        <template #footer>
            <div v-if="url || github" class="space-x-2 sm:space-x-4">
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
                    <span v-if="!url">{{ t("projects.viewGithub") }}</span>
                </UButton>
            </div>

            <div>
                <UButton
                    size="lg"
                    color="neutral"
                    variant="soft"
                    icon="i-lucide-share-2"
                    class="hover:scale-105 transition duration-200"
                    @click="shareProject(title)"
                >
                    <span v-if="!url || !github">{{
                        t("projects.share")
                    }}</span>
                </UButton>
            </div>
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

const onClickPrev = () => {
    activeIndex.value--;
};
const onClickNext = () => {
    activeIndex.value++;
};
const onSelect = (index: number) => {
    activeIndex.value = index;
};

const select = (index: number) => {
    activeIndex.value = index;

    carousel.value?.emblaApi?.scrollTo(index);
};

const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
};

const shareProject = async (shareTitle?: string) => {
    const shareUrl = window.location.href;

    if (navigator.share) {
        try {
            await navigator.share({
                title: shareTitle,
                url: shareUrl,
            });
            return;
        } catch {
            // Fall back to clipboard when the native share dialog is dismissed or unavailable.
        }
    }

    await copyToClipboard(shareUrl);
};
</script>
