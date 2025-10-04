<template>
    <button :type="type" class="custom-btn w-100">
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