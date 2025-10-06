<template>
  <div>
    <form class="custom-form" @submit.prevent="handleSubmit">
      <fieldset>

        <div class="form-group">
          <Input label="E-mail" type="email" v-model="email" :class="{ 'is-invalid': errors.email }"
            @blur="validateEmail" />
          <div v-if="errors.email" class="invalid-feedback">
            {{ errors.email }}
          </div>
        </div>

        <div class="form-group">
          <Input label="WhatsApp" type="tel" v-model="whatsapp" :class="{ 'is-invalid': errors.whatsapp }"
            @blur="validateWhatsapp" @input="maskWhatsapp" @keypress="onlyNumbers" @paste="handlePaste" />
          <div v-if="errors.whatsapp" class="invalid-feedback">
            {{ errors.whatsapp }}
          </div>
        </div>

        <Button type="submit">
          <span class="text-btn">Enviar</span>
        </Button>

        <div v-if="successMessage" class="alert alert-success">
          {{ successMessage }}
        </div>

        <div v-if="generalError" class="alert alert-danger">
          {{ generalError }}
        </div>

      </fieldset>
    </form>

    <div v-if="dados" class="dados-enviados">
      <h3>📋 Informações salvas:</h3>
      <p>📧 {{ dados.email }} <br> 📱 {{ dados.whatsapp }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const email = ref("");
const whatsapp = ref("");
const errors = ref({});
const successMessage = ref("");
const generalError = ref("");
const dados = ref(null);

onMounted(() => {
  localStorage.removeItem("dadosForm");

  const salvo = localStorage.getItem("dadosForm");
  if (salvo) {
    dados.value = JSON.parse(salvo);
  }
});

const maskWhatsapp = () => {
  let num = whatsapp.value.replace(/\D/g, "");

  if (num.length > 11) {
    num = num.slice(0, 11);
    errors.value.whatsapp = "O número excede o limite de 11 dígitos.";
  } else {
    delete errors.value.whatsapp;
  }

  if (num.length <= 10) {
    whatsapp.value = num.replace(/(\d{0,2})(\d{0,4})(\d{0,4})/, (_, ddd, part1, part2) => {
      return `${ddd ? `(${ddd}` : ''}${ddd && part1 ? `) ${part1}` : ''}${part2 ? `-${part2}` : ''}`;
    });
  } else {
    whatsapp.value = num.replace(/(\d{0,2})(\d{0,5})(\d{0,4})/, (_, ddd, part1, part2) => {
      return `${ddd ? `(${ddd}` : ''}${ddd && part1 ? `) ${part1}` : ''}${part2 ? `-${part2}` : ''}`;
    });
  }
};

const validateEmail = () => {
  if (!email.value) {
    errors.value.email = "O campo e-mail é obrigatório.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = "Informe um e-mail válido.";
  } else {
    delete errors.value.email;
  }
};

const validateWhatsapp = () => {
  const cleaned = whatsapp.value.replace(/\D/g, "");
  if (!cleaned) {
    errors.value.whatsapp = "O campo WhatsApp é obrigatório.";
  } else if (cleaned.length < 10 || cleaned.length > 11) {
    errors.value.whatsapp = "Informe um número válido com DDD (10 ou 11 dígitos).";
  } else {
    delete errors.value.whatsapp;
  }
};

const onlyNumbers = (event) => {
  const charCode = event.charCode ? event.charCode : event.keyCode;
  if (charCode < 48 || charCode > 57) {
    event.preventDefault();
  }
};

const handlePaste = (event) => {
  const pastedData = event.clipboardData.getData('Text').replace(/\D/g, "");

  if (pastedData.length > 11) {
    event.preventDefault();
    errors.value.whatsapp = "Número colado excede o limite de 11 dígitos.";
  } else {
    errors.value.whatsapp = "";
  }
};

const handleSubmit = () => {
  validateEmail();
  validateWhatsapp();

  if (Object.keys(errors.value).length === 0) {
    successMessage.value = "Formulário enviado com sucesso!";
    generalError.value = "";
    dados.value = {
      email: email.value,
      whatsapp: whatsapp.value,
    };
    localStorage.setItem("dadosForm", JSON.stringify(dados.value));
    email.value = "";
    whatsapp.value = "";

    setTimeout(() => {
      successMessage.value = "";
      dados.value = null;
      localStorage.removeItem("dadosForm");
    }, 5000);
  } else {
    successMessage.value = "";
    generalError.value = "Corrija os erros antes de enviar o formulário.";
  }
};
</script>