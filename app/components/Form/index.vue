<template>
  <div>
    <form @submit.prevent="handleSubmit" class="form-lead">
      <fieldset>
        <!-- Campo E-mail -->
        <Input id="E-mail" type="email" v-model="email" @blur="validateEmail" />
        <span v-if="errors.email">{{ errors.email }}</span>

        <!-- Campo WhatsApp -->
        <Input id="WhatsApp" type="tel" v-model="whatsapp" @blur="validateWhatsapp" @input="maskWhatsapp" />
        <span v-if="errors.whatsapp">{{ errors.whatsapp }}</span>

        <Button type="submit">Enviar</Button>

        <p v-if="successMessage">{{ successMessage }}</p>
      </fieldset>
    </form>

    <!-- Exibição do último dado salvo -->
    <div v-if="dados" class="dados-enviados">
      <h3>Último envio:</h3>
      <p>📧 {{ dados.email }} | 📱 {{ dados.whatsapp }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const email = ref("");
const whatsapp = ref("");
const errors = ref({});
const successMessage = ref("");
const dados = ref(null);

onMounted(() => {
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
    dados.value = {
      email: email.value,
      whatsapp: whatsapp.value,
    };
    localStorage.setItem("dadosForm", JSON.stringify(dados.value));
    email.value = "";
    whatsapp.value = "";

    setTimeout(() => {
      dados.value = null;
      localStorage.removeItem("dadosForm");
      successMessage.value = "";
    }, 5000);
  } else {
    successMessage.value = "";
  }
};
</script>