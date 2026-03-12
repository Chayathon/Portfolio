<template>
    <UCard
        class="bg-default dark:bg-neutral-800 rounded-xl shadow-md hover:scale-[1.01] hover:shadow-xl transition-all duration-200"
    >
        <div class="flex items-start gap-4">
            <img
                v-if="education.logo"
                :src="education.logo.src"
                :alt="education.logo.alt"
                class="size-30 my-auto rounded-full object-cover"
            />

            <div class="min-w-0 flex-1 space-y-3">
                <div class="space-y-1">
                    <p class="text-xs sm:text-sm md:text-base text-toned">
                        {{ education.degree }}
                    </p>
                    <h3
                        class="text-sm sm:text-base font-semibold md:text-lg lg:text-xl"
                    >
                        {{ education.institution }}
                    </h3>
                    <p class="text-xs sm:text-sm md:text-base text-toned">
                        {{ education.field }}
                    </p>
                </div>

                <div class="flex flex-wrap items-center gap-2">
                    <UBadge
                        v-if="education.award"
                        icon="i-lucide-award"
                        color="warning"
                        variant="subtle"
                        size="md"
                    >
                        {{ education.award }}
                    </UBadge>
                    <UBadge color="primary" variant="subtle" size="md">
                        GPAX {{ education.gpax }}
                    </UBadge>
                    <UBadge color="neutral" variant="soft" size="md">
                        {{ education.startYear }} - {{ education.endYear }}
                    </UBadge>
                </div>
            </div>
        </div>
    </UCard>
</template>

<script setup lang="ts">
type Education = {
    institution: string;
    degree: string;
    field: string;
    gpax: string;
    award?: string;
    startYear: string;
    endYear: string;
    logo?: {
        src: string;
        alt: string;
        loading: "lazy";
    };
};

defineProps<{
    education: Education;
}>();
</script>
