<template>
    <div class="flex flex-col-reverse gap-6">
        <Motion
            v-for="(work, index) in timelineWorks"
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
                delay: (timelineWorks.length - 1 - index) * 0.2,
            }"
        >
            <AppWorkExperienceCard :work="work" :show-line="index !== 0" />
        </Motion>
    </div>
</template>

<script setup lang="ts">
import { workExperiences } from "~/data/workExperience";

const { locale } = useI18n();

const timelineWorks = computed(() =>
    workExperiences.map((work) => {
        const loc = locale.value === "th" ? work.th : work.en;
        return {
            icon: work.icon ?? "i-lucide-briefcase",
            title: loc.position,
            company: loc.company,
            description: loc.description,
            location: loc.location,
            date: `${loc.startDate} - ${loc.endDate}`,
            type: work.type,
        };
    }),
);
</script>
