<template>
    <UApp :locale="locales[locale]">
        <ClientOnly>
            <AppInteractiveBackground />
        </ClientOnly>
        <NuxtLayout>
            <UMain class="relative z-10">
                <NuxtPage />
            </UMain>
        </NuxtLayout>
    </UApp>
</template>

<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";

const { locale } = useI18n();
const colorMode = useColorMode();

const color = computed(() =>
    colorMode.value === "dark" ? "#020618" : "white",
);

const lang = computed(() => locales[locale.value].code);

useHead({
    meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { key: "theme-color", name: "theme-color", content: color },
    ],
    link: [{ rel: "icon", href: "/icon.png" }],
    htmlAttrs: {
        lang,
    },
});

useSeoMeta({
    title: "Chayathon's Portfolio",
    description: "Welcome to my personal portfolio website!",
    ogTitle: "Chayathon's Portfolio",
    ogDescription: "Welcome to my personal portfolio website!",
    ogImage: "/og-image.png",
});
</script>
