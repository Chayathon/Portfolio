<template>
    <div class="grid gap-6 sm:grid-cols-2 w-full max-w-4xl mx-auto">
        <Motion
            v-for="(contact, index) in contacts"
            :key="contact.label"
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
            <AppContactCard :contact="contact" />
        </Motion>
        <AppContactCard :contact="resume" class="sm:col-span-2" />
    </div>
</template>

<script setup lang="ts">
import { contacts, resume } from "~/data/contacts";
</script>
