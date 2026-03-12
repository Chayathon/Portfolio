<template>
    <div class="flex flex-col gap-6">
        <Motion
            v-for="(education, index) in educations"
            :key="index"
            :initial="{
                scale: 1.05,
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
                delay: index * 0.2,
            }"
        >
            <AppEducationCard :education="education" />
        </Motion>
    </div>
</template>

<script setup lang="ts">
import { educations as educationData } from "~/data/education";

const { locale } = useI18n();

const educations = computed(() =>
    educationData.map((ed) => {
        const loc = locale.value === "th" ? ed.th : ed.en;
        return {
            institution: loc.institution,
            degree: loc.degree,
            field: loc.field,
            gpax: loc.gpax,
            award: loc.award,
            startYear: loc.startYear,
            endYear: loc.endYear,
            logo: ed.logo,
        };
    }),
);
</script>
