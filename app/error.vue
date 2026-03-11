<template>
    <div>
        <AppHeader :links="navLinks" />

        <UMain>
            <UContainer>
                <UPage>
                    <UError
                        :error="{
                            statusCode: 404,
                            statusMessage: t('error.title'),
                            message: t('error.description'),
                        }"
                        :clear="{
                            label: t('error.back'),
                            color: 'neutral',
                            size: 'xl',
                            icon: 'i-lucide-arrow-left',
                            class: 'rounded-full',
                        }"
                    />
                </UPage>
            </UContainer>
        </UMain>

        <AppFooter />
    </div>
</template>

<script setup lang="ts">
useHead({
    htmlAttrs: {
        lang: "en",
    },
});

useSeoMeta({
    title: "Page not found",
    description: "Sorry, the page you are looking for does not exist.",
});

const { navLinks } = useNavLinks();
const { t } = useI18n();
</script>
