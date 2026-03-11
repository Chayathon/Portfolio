<template>
    <Motion
        :initial="{ y: 40, opacity: 0 }"
        :while-in-view="{ y: 0, opacity: 1 }"
        :transition="{ duration: 0.55, ease: 'easeOut' }"
        :in-view-options="{ once: true, amount: 0.2 }"
    >
        <UPageSection id="aboutme">
            <LandingAboutme />
        </UPageSection>
    </Motion>

    <USeparator />

    <Motion
        :initial="{ y: 40, opacity: 0 }"
        :while-in-view="{ y: 0, opacity: 1 }"
        :transition="{ duration: 0.55, delay: 0.05, ease: 'easeOut' }"
        :in-view-options="{ once: true, amount: 0.2 }"
    >
        <UPageSection
            id="skills"
            :title="t('skills.title')"
            :description="t('skills.description')"
        >
            <LandingSkills />
        </UPageSection>
    </Motion>

    <USeparator />

    <Motion
        :initial="{ y: 40, opacity: 0 }"
        :while-in-view="{ y: 0, opacity: 1 }"
        :transition="{ duration: 0.55, delay: 0.08, ease: 'easeOut' }"
        :in-view-options="{ once: true, amount: 0.2 }"
    >
        <UPageSection
            id="projects"
            :title="t('projects.title')"
            :description="t('projects.description')"
        >
            <LandingProjects />
        </UPageSection>
    </Motion>

    <USeparator />

    <Motion
        :initial="{ y: 40, opacity: 0 }"
        :while-in-view="{ y: 0, opacity: 1 }"
        :transition="{ duration: 0.55, delay: 0.1, ease: 'easeOut' }"
        :in-view-options="{ once: true, amount: 0.2 }"
    >
        <UPageSection
            id="workexperience"
            :title="t('workexperience.title')"
            :description="t('workexperience.description')"
        >
            <LandingWorkExperience />
        </UPageSection>
    </Motion>

    <USeparator />

    <Motion
        :initial="{ y: 40, opacity: 0 }"
        :while-in-view="{ y: 0, opacity: 1 }"
        :transition="{ duration: 0.55, delay: 0.12, ease: 'easeOut' }"
        :in-view-options="{ once: true, amount: 0.2 }"
    >
        <UPageSection
            id="education"
            :title="t('education.title')"
            :description="t('education.description')"
        >
            <LandingEducation />
        </UPageSection>
    </Motion>

    <USeparator />

    <Motion
        :initial="{ y: 40, opacity: 0 }"
        :while-in-view="{ y: 0, opacity: 1 }"
        :transition="{ duration: 0.55, delay: 0.15, ease: 'easeOut' }"
        :in-view-options="{ once: true, amount: 0.2 }"
    >
        <UPageSection
            id="contact"
            :title="t('contact.title')"
            :description="t('contact.description')"
        >
            <LandingContact />
        </UPageSection>
    </Motion>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
