<template>
    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <Motion
            v-for="(section, index) in sections"
            :key="section.type"
            class="h-full"
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
            <AppSkillTypeCard :section="section" />
        </Motion>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { skills, type Skill } from "~/data/skills";

const sectionOrder: { type: Skill["type"]; labelKey: string }[] = [
    { type: "language", labelKey: "skills.languages" },
    { type: "library-frameworks", labelKey: "skills.library-frameworks" },
    { type: "database", labelKey: "skills.databases" },
    { type: "devops-hosting", labelKey: "skills.devops-hosting" },
    { type: "runtime-pm", labelKey: "skills.runtime-pm" },
    { type: "tool", labelKey: "skills.tools" },
];

const sections = computed(() =>
    sectionOrder.map((section) => ({
        ...section,
        skills: skills.filter((skill) => skill.type === section.type),
    })),
);
</script>
