<template>
    <UCard
        class="h-full shadow-md rounded-xl hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
    >
        <div class="mb-3 flex items-center gap-2">
            <h3 class="text-base font-semibold">
                {{ t(section.labelKey) }}
            </h3>
        </div>

        <div class="flex flex-wrap gap-2">
            <AppSkillBadge
                v-for="skill in section.skills"
                :key="skill.name"
                :skill="skill"
            />
        </div>
    </UCard>
</template>

<script setup lang="ts">
type Skill = {
    type:
        | "language"
        | "library-frameworks"
        | "database"
        | "devops-hosting"
        | "runtime-pm"
        | "tool";
    name: string;
    icon: string;
    color: string;
};

type Section = {
    type: Skill["type"];
    labelKey: string;
    skills: Skill[];
};

defineProps<{
    section: Section;
}>();

const { t } = useI18n();
</script>
