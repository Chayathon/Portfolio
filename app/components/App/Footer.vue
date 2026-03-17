<template>
    <UFooter class="z-50 bg-transparent" :ui="{ left: 'text-muted text-xs' }">
        <template #left>
            {{ footer.credits }}
        </template>

        <template #right>
            <template v-if="footer?.links">
                <UButton
                    v-for="(link, index) of footer?.links"
                    :key="index"
                    v-bind="{
                        size: 'xs',
                        color: 'neutral',
                        variant: 'ghost',
                        ...link,
                    }"
                />
            </template>
        </template>
    </UFooter>
</template>

<script setup lang="ts">
const { footer } = useAppConfig();
</script>
