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
    link: [{ rel: "icon", href: "/favicon.ico" }],
    htmlAttrs: {
        lang,
    },
});

useSeoMeta({
    title: "Chayathon's Portfolio",
    description: "Chayathon's portfolio website!",
    keywords:
        "Chayathon Termpipatphong, ชยธร เติมพิพัฒน์พงศ์, developer, software developer, software engineer, frontend developer, backend developer, full-stack developer, programmer, นักพัฒนาซอฟต์แวร์, โปรแกรมเมอร์, portfolio, แฟ้มสะสมผลงาน, ผลงาน, projects, โปรเจกต์, work experience, ประสบการณ์การทำงาน, education, การศึกษา, contact, ติดต่อ",
    author: "Chayathon Termpipatphong",
    ogTitle: "Chayathon's Portfolio",
    ogDescription: "Chayathon's portfolio website!",
    ogType: "website",
    ogUrl: "https://portfolio.chayathon.workers.dev/",
    ogSiteName: "Chayathon's Portfolio",
    ogImage: "https://portfolio.chayathon.workers.dev/og-image.webp",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogLocale: lang,
    twitterCard: "summary_large_image",
    twitterTitle: "Chayathon's Portfolio",
    twitterDescription: "Chayathon's portfolio website!",
    twitterImage: "https://portfolio.chayathon.workers.dev/og-image.webp",
    robots: "index, follow",
});
</script>
