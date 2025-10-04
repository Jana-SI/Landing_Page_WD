<template>
    <button :type="type">
        <slot></slot>
    </button>
</template>

<script setup>
defineProps({
  type: {
    type: String
  }
})
</script>