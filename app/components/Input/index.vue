<template>
  <div class="form-floating mb-3">
    <input
      id="floatingInput"
      :type="type"
      class="form-control custom-input"
      placeholder=" "
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />
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

<style>
.custom-input {
  background: #F8F8F8 0% 0% no-repeat padding-box;
  border: 1px solid #D0D0D0;
  border-radius: 35px;
  
  padding-left: 26px !important;
  font-family: "Poppins", sans-serif;
}

/* Label estilizado conforme Figma */
.custom-label {
  text-align: left;
  font: normal normal normal 16px/25px "Poppins", sans-serif;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  padding-left: 26px !important;
}

/* Corrige o comportamento do label flutuante para outros navegadores */
.form-floating > .form-control:placeholder-shown:not(:focus) ~ label {
  transform: none;
  opacity: 0.65;
}

.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label {
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  opacity: 1;
}
</style>