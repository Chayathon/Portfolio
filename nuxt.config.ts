// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxt/eslint",
        "@nuxt/ui",
        "@nuxt/fonts",
        "@nuxtjs/google-fonts",
        "@nuxtjs/i18n",
        "motion-v/nuxt",
    ],

    devtools: {
        enabled: true,
    },

    css: ["~/assets/css/main.css"],

    routeRules: {
        "/": { prerender: true },
    },

    compatibilityDate: "2025-01-15",

    eslint: {
        config: {
            stylistic: {
                commaDangle: "never",
                braceStyle: "1tbs",
            },
        },
    },

    googleFonts: {
        families: {
            Inter: "200..700",
            Anuphan: ["400", "500"],
        },
        display: "swap",
        preload: true,
        prefetch: true,
        preconnect: true,
        download: true,
        inject: true,
    },

    i18n: {
        strategy: "no_prefix",
        langDir: "locales",
        defaultLocale: "en",
        locales: [
            {
                code: "en",
                name: "English",
                file: "en.json",
            },
            {
                code: "th",
                name: "ไทย",
                file: "th.json",
            },
        ],
    },

    ui: {
        fonts: true,
    },
});
