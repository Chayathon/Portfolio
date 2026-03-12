<template>
    <UPageHero
        :ui="{
            headline: 'flex items-center justify-center',
            title: 'text-shadow-md max-w-lg mx-auto',
            links: 'mt-4 flex-col justify-center items-center',
            container: 'py-0 sm:py-0 lg:py-0',
        }"
    >
        <template #headline>
            <Motion
                :initial="{
                    scale: 1.1,
                    opacity: 0,
                    filter: 'blur(20px)',
                }"
                :animate="{
                    scale: 1,
                    opacity: 1,
                    filter: 'blur(0px)',
                }"
                :transition="{
                    duration: 0.6,
                    delay: 0.1,
                }"
            >
                <UColorModeAvatar
                    class="size-40 ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
                    :light="global.picture?.light!"
                    :dark="global.picture?.dark!"
                    :alt="global.picture?.alt!"
                />
            </Motion>
        </template>

        <template #title>
            <Motion
                :initial="{
                    scale: 1.1,
                    opacity: 0,
                    filter: 'blur(20px)',
                }"
                :animate="{
                    scale: 1,
                    opacity: 1,
                    filter: 'blur(0px)',
                }"
                :transition="{
                    duration: 0.6,
                    delay: 0.1,
                }"
            >
                {{ aboutme.greetings }}
                <br />
                {{ aboutme.name }}
                <br />
                {{ aboutme.position }}
            </Motion>
        </template>

        <template #description>
            <Motion
                :initial="{
                    scale: 1.1,
                    opacity: 0,
                    filter: 'blur(20px)',
                }"
                :animate="{
                    scale: 1,
                    opacity: 1,
                    filter: 'blur(0px)',
                }"
                :transition="{
                    duration: 0.6,
                    delay: 0.3,
                }"
            >
                {{ aboutme.description }}
            </Motion>
        </template>

        <template #links>
            <Motion
                :initial="{
                    scale: 1.1,
                    opacity: 0,
                    filter: 'blur(20px)',
                }"
                :animate="{
                    scale: 1,
                    opacity: 1,
                    filter: 'blur(0px)',
                }"
                :transition="{
                    duration: 0.6,
                    delay: 0.5,
                }"
            >
                <div class="flex items-center gap-2">
                    <UButton
                        :color="global.available ? 'success' : 'error'"
                        variant="ghost"
                        class="gap-2"
                        :to="global.available ? global.email : ''"
                        :label="
                            global.available
                                ? aboutme.status.available
                                : aboutme.status.unavailable
                        "
                    >
                        <template #leading>
                            <span class="relative flex size-2">
                                <span
                                    class="absolute inline-flex size-full rounded-full opacity-75"
                                    :class="
                                        global.available
                                            ? 'bg-success animate-ping'
                                            : 'bg-error'
                                    "
                                />
                                <span
                                    class="relative inline-flex size-2 scale-90 rounded-full"
                                    :class="
                                        global.available
                                            ? 'bg-success'
                                            : 'bg-error'
                                    "
                                />
                            </span>
                        </template>
                    </UButton>
                </div>
            </Motion>

            <div class="gap-x-4 inline-flex mt-4">
                <Motion
                    v-for="(link, index) of footer?.links"
                    :key="index"
                    :initial="{
                        scale: 1.1,
                        opacity: 0,
                        filter: 'blur(20px)',
                    }"
                    :animate="{
                        scale: 1,
                        opacity: 1,
                        filter: 'blur(0px)',
                    }"
                    :transition="{
                        duration: 0.6,
                        delay: 0.5 + index * 0.1,
                    }"
                >
                    <UButton
                        v-bind="{
                            size: 'md',
                            color: 'neutral',
                            variant: 'ghost',
                            ...link,
                        }"
                    />
                </Motion>
            </div>
        </template>
    </UPageHero>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { aboutmeData } from "~/data/aboutme";

const { footer, global } = useAppConfig();
const { locale } = useI18n();

const aboutme = computed(() =>
    locale.value === "th" ? aboutmeData.th : aboutmeData.en,
);
</script>
