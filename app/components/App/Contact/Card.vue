<template>
    <UCard
        class="bg-default border border-default dark:bg-neutral-800 dark:border-neutral-700 rounded-xl shadow-md hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer group"
        @click="handleClick"
    >
        <div class="flex flex-col items-center gap-4 py-4">
            <div
                class="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
                :class="contact.bgClass"
            >
                <UIcon :name="contact.icon" class="w-8 h-8 text-white" />
            </div>

            <div class="text-center space-y-1">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {{ contact.label }}
                </h3>
                <p
                    class="text-sm text-gray-600 dark:text-gray-400 break-all px-2"
                >
                    {{ contact.value }}
                </p>
            </div>

            <UBadge
                variant="subtle"
                size="md"
                class="group-hover:scale-105 transition-transform duration-200"
            >
                {{ t(`contact.${contact.action}`) }}
            </UBadge>
        </div>
    </UCard>
</template>

<script setup lang="ts">
type Contact = {
    label: string;
    value: string;
    icon: string;
    link: string;
    bgClass: string;
    action: string;
};

const props = defineProps<{
    contact: Contact;
}>();

const { t } = useI18n();

const handleClick = () => {
    window.open(props.contact.link, "_blank");
};
</script>
