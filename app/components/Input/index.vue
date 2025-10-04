<template>
  <div>
    <label :for="id">{{ id }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: String, required: true },
  id: { type: String, required: true },
  type: { type: String, default: "text" },
  modelValue: { type: String, required: true },
});

const emit = defineEmits(["update:modelValue", "blur"]);
</script>