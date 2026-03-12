<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Motion
            v-for="(project, index) in displayedProjects"
            :key="`${project.title}-${index}`"
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
                delay:
                    showAll && index >= VISIBLE_PROJECTS
                        ? (index - VISIBLE_PROJECTS) * 0.2
                        : index * 0.2,
            }"
        >
            <AppProjectCard
                :title="project.title"
                :description="project.description"
                :coverImage="project.coverImage"
                :technologies="project.technologies"
                :status="project.status"
                @click="handleOpen(project)"
            />
        </Motion>
    </div>

    <div v-if="hasMoreProjects" class="flex justify-center">
        <UButton
            color="neutral"
            variant="soft"
            size="lg"
            class="rounded-full px-6 font-semibold shadow-sm hover:shadow-md transition-all"
            :icon="showAll ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
            @click="toggleViewAll"
        >
            {{ showAll ? t("projects.showLess") : t("projects.viewAll") }}
        </UButton>
    </div>

    <AppProjectModal
        v-if="selectedProject"
        v-model:open="open"
        :title="selectedProject.title"
        :description="selectedProject.description"
        :features="selectedProject.features"
        :coverImage="selectedProject.coverImage"
        :images="selectedProject.images"
        :technologies="selectedProject.technologies"
        :type="selectedProject.type"
        :status="selectedProject.status"
        :url="selectedProject.url"
        :github="selectedProject.github"
    />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { projects as projectsData, type Project } from "~/data/projects";

const { locale, t } = useI18n();

const VISIBLE_PROJECTS = 6;

type ResolvedProject = Omit<Project, "description" | "features"> & {
    description: string;
    features?: string[];
};

const open = ref(false);
const showAll = ref(false);
const selectedProject = ref<ResolvedProject | null>(null);

const handleOpen = (project: ResolvedProject) => {
    selectedProject.value = project;
    open.value = true;
};

const toggleViewAll = () => {
    showAll.value = !showAll.value;
};

const projects = computed<ResolvedProject[]>(() =>
    projectsData.map((p) => ({
        ...p,
        description:
            locale.value === "th" ? p.description.th : p.description.en,
        features: locale.value === "th" ? p.features?.th : p.features?.en,
    })),
);

const hasMoreProjects = computed(
    () => projects.value.length > VISIBLE_PROJECTS,
);

const displayedProjects = computed(() =>
    showAll.value ? projects.value : projects.value.slice(0, VISIBLE_PROJECTS),
);
</script>
