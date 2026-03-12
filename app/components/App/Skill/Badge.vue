<template>
    <UBadge
        variant="soft"
        :icon="skill.icon"
        :color="
            skill.color as
                | 'primary'
                | 'secondary'
                | 'success'
                | 'warning'
                | 'error'
                | 'neutral'
        "
        size="lg"
        class="shadow-md hover:scale-105 hover:shadow-lg transition duration-200"
    >
        {{ skill.name }}
    </UBadge>
</template>

<script setup lang="ts">
type Skill = {
    name: string;
    icon: string;
    color: string;
};

defineProps<{
    skill: Skill;
}>();
</script>
