<template>
  <div>
    <form class="custom-form" @submit.prevent="handleSubmit">
      <fieldset>

        <!-- Campo E-mail -->
        <div class="form-group">
          <Input
            label="E-mail"
            type="email"
            v-model="email"
            :class="{ 'is-invalid': errors.email }"
            @blur="validateEmail"
          />
          <div v-if="errors.email" class="invalid-feedback">
            {{ errors.email }}
          </div>
        </div>

        <!-- Campo WhatsApp -->
        <div class="form-group">
          <Input
            label="WhatsApp"
            type="tel"
            v-model="whatsapp"
            :class="{ 'is-invalid': errors.whatsapp }"
            @blur="validateWhatsapp"
            @input="maskWhatsapp"
          />
          <div v-if="errors.whatsapp" class="invalid-feedback">
            {{ errors.whatsapp }}
          </div>
        </div>

        <Button type="submit">
          <span class="text-btn">Enviar</span>
        </Button>

        <!-- Mensagem de sucesso -->
        <div v-if="successMessage" class="alert alert-success">
          {{ successMessage }}
        </div>

        <!-- Mensagem de erro geral -->
        <div v-if="generalError" class="alert alert-danger">
          {{ generalError }}
        </div>

      </fieldset>
    </form>

    <!-- Exibição do último dado salvo -->
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
  if (num.length <= 10) {
    whatsapp.value = num.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else {
    whatsapp.value = num.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
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
  if (!whatsapp.value) {
    errors.value.whatsapp = "O campo WhatsApp é obrigatório.";
  } else if (cleaned.length < 10 || cleaned.length > 11) {
    errors.value.whatsapp = "Informe um número válido com DDD.";
  } else {
    delete errors.value.whatsapp;
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
      dados.value = null; // Isso vai esconder os dados após 5 segundos
      localStorage.removeItem("dadosForm");      
    }, 5000);
  } else {
    successMessage.value = "";
    generalError.value = "Corrija os erros antes de enviar o formulário.";
  }
};
</script>