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
import { ref, computed, watch, nextTick } from "vue";
import { projects as projectsData, type Project } from "~/data/projects";

const route = useRoute();
const { locale, t } = useI18n();

type ResolvedProject = Omit<Project, "description" | "features"> & {
    description: string;
    features?: string[];
};

const open = ref(false);
const showAll = ref(false);
const selectedProject = ref<ResolvedProject | null>(null);

const HASH_BASE = "projects";
const VISIBLE_PROJECTS = 6;

const getTitleFromHash = (hash: string): string | null => {
    if (!hash) {
        return null;
    }

    const normalizedHash = hash.startsWith("#") ? hash.slice(1) : hash;
    const [section, query = ""] = normalizedHash.split("?");

    if (section !== HASH_BASE) {
        return null;
    }

    const params = new URLSearchParams(query);

    return params.get("title");
};

const getProjectHash = (title?: string): string => {
    if (!title) {
        return "";
    }

    return `#${HASH_BASE}?title=${encodeURIComponent(title)}`;
};

const replaceHash = (title?: string) => {
    if (!import.meta.client) {
        return;
    }

    const hash = getProjectHash(title);
    const currentHash = window.location.hash || "";

    if (currentHash === hash) {
        return;
    }

    const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;
    window.history.replaceState(window.history.state, "", nextUrl);
};

const scrollToProjectsSection = async () => {
    if (!import.meta.client) {
        return;
    }

    await nextTick();

    const section = window.document.getElementById(HASH_BASE);

    section?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const syncProjectFromHash = (hash: string) => {
    const title = getTitleFromHash(hash);

    if (!title) {
        return;
    }

    const project = projects.value.find((item) => item.title === title);

    if (!project) {
        return;
    }

    selectedProject.value = project;
    open.value = true;

    const projectIndex = projects.value.findIndex(
        (item) => item.title === title,
    );

    if (projectIndex >= VISIBLE_PROJECTS) {
        showAll.value = true;
    }

    void scrollToProjectsSection();
};

const handleOpen = (project: ResolvedProject) => {
    selectedProject.value = project;
    open.value = true;
    replaceHash(project.title);
};

const handleClose = () => {
    replaceHash();

    setTimeout(() => {
        selectedProject.value = null;
    }, 300);
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

watch(
    () => route.hash,
    (hash) => {
        syncProjectFromHash(hash);
    },
    { immediate: true },
);

watch(open, (isOpen) => {
    if (isOpen) {
        return;
    }

    handleClose();
});
</script>
