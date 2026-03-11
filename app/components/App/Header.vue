<template>
    <div
        class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10 w-full px-2 sm:px-4"
    >
        <!-- Mobile Menu -->
        <div class="md:hidden flex justify-center items-center">
            <Motion
                :initial="{
                    opacity: 0,
                    y: -12,
                }"
                :animate="
                    isMenuOpen
                        ? {
                              opacity: 1,
                              y: 0,
                          }
                        : {
                              opacity: 0,
                              y: -12,
                          }
                "
                :transition="{
                    duration: 0.24,
                    ease: 'easeOut',
                }"
                :style="{
                    pointerEvents: isMenuOpen ? 'auto' : 'none',
                }"
                :aria-hidden="!isMenuOpen"
                class="absolute top-full mt-2 bg-muted/80 backdrop-blur-sm rounded-3xl border border-muted/50 shadow-lg shadow-neutral-950/5 w-fit max-w-xs"
            >
                <div class="p-4 space-y-2">
                    <UButton
                        v-for="item in navLinks"
                        :key="item.label"
                        :label="item.label"
                        :to="item.to"
                        variant="ghost"
                        color="neutral"
                        class="w-full justify-start rounded-lg text-sm"
                        @click="isMenuOpen = false"
                    />
                </div>
            </Motion>

            <div
                class="bg-muted/80 backdrop-blur-sm rounded-full border border-muted/50 shadow-lg shadow-neutral-950/5 flex items-center gap-2 px-3 py-1.5"
            >
                <UButton
                    color="neutral"
                    variant="ghost"
                    size="md"
                    @click="isMenuOpen = !isMenuOpen"
                    class="rounded-full"
                >
                    <span class="relative size-5">
                        <Motion
                            :initial="{ opacity: 1, rotate: 0, scale: 1 }"
                            :animate="
                                isMenuOpen
                                    ? { opacity: 0, rotate: -45, scale: 0.5 }
                                    : { opacity: 1, rotate: 0, scale: 1 }
                            "
                            :transition="{ duration: 0.2, ease: 'easeInOut' }"
                            class="absolute"
                        >
                            <UIcon name="i-lucide-menu" class="size-5" />
                        </Motion>
                        <Motion
                            :initial="{ opacity: 0, rotate: 45, scale: 0.5 }"
                            :animate="
                                isMenuOpen
                                    ? { opacity: 1, rotate: 0, scale: 1 }
                                    : { opacity: 0, rotate: 45, scale: 0.5 }
                            "
                            :transition="{ duration: 0.2, ease: 'easeInOut' }"
                            class="absolute"
                        >
                            <UIcon name="i-lucide-x" class="size-5" />
                        </Motion>
                    </span>
                </UButton>
                <USeparator
                    orientation="vertical"
                    color="neutral"
                    class="h-6"
                />
                <AppThemeToggleButton />
                <AppLanguageToggleButton />
            </div>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex justify-center">
            <UNavigationMenu
                :items="navLinks"
                variant="link"
                color="neutral"
                class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
                :ui="{
                    link: 'px-2 py-1',
                    linkLeadingIcon: 'hidden',
                }"
            >
                <template #list-trailing>
                    <USeparator
                        orientation="vertical"
                        color="neutral"
                        class="h-6"
                    />
                    <AppThemeToggleButton />
                    <AppLanguageToggleButton />
                </template>
            </UNavigationMenu>
        </div>
    </div>
</template>

<script setup lang="ts">
const { navLinks } = useNavLinks();
const isMenuOpen = ref(false);

const route = useRoute();

watch(
    () => route.path,
    () => {
        isMenuOpen.value = false;
    },
);
</script>
