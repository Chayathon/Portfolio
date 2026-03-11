<template>
    <ClientOnly>
        <UButton
            :icon="locale === 'en' ? 'circle-flags:us' : 'circle-flags:th'"
            variant="ghost"
            color="primary"
            size="sm"
            class="rounded-full cursor-pointer"
            @click="setLocale(locale === 'en' ? 'th' : 'en')"
        />
    </ClientOnly>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();
</script>

<style scoped></style>
