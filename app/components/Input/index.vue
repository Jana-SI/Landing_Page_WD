<template>
  <div class="form-floating mb-3">
    <input id="floatingInput" :type="type" class="form-control custom-input" placeholder=" " :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" @blur="$emit('blur')" />
    <label class="custom-label" for="floatingInput">{{ label }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: "" },
  type: { type: String, default: "text" },
  modelValue: { type: String, required: true },
});
</script>