<template>
    <div class="card">
        <div class="card-img-top retangulo"></div>
        <div class="card-body">
            <h4 class="titulo-card">{{ title }}</h4>
            <p class="text-card">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String
})
</script>