<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Texto -->
      <div class="col-12 col-md-8 col-lg-8 order-lg-1">
        <h2 class="pre-titulo">Texto aqui</h2>
        <h1 class="titulo">Mais outro bem texto aqui</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis risus sit amet
          libero porttitor laoreet. Nullam ut volutpat nisi. Phasellus id tempus orci. Donec
          eget orci eget dolor condimentum sodales.
        </p>
      </div>

      <!-- Carrossel de Cards -->
      <div class="col-12 col-md-4 col-lg-4 order-lg-2">
        <div id="carouselCards" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">

            <!-- Cria um slide pra cada grupo de cards -->
            <div
              v-for="(group, index) in cardGroups"
              :key="index"
              class="carousel-item"
              :class="{ active: index === 0 }"
            >
              <div class="d-flex flex-column align-items-center gap-3 p-3">
                <!-- Renderiza os cards de cada grupo -->
                <Card v-for="(card, idx) in group" :key="idx" />
              </div>
            </div>
          </div>

          <!-- Controles do carrossel -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselCards"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselCards"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Próximo</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// Gerar 20 "cards" (podes trocar por dados reais)
const totalCards = 20
const cards = Array.from({ length: totalCards }, (_, i) => i + 1)

// Agrupar cards (ex: 4 por slide)
const groupSize = 4
const cardGroups = []

for (let i = 0; i < cards.length; i += groupSize) {
  cardGroups.push(cards.slice(i, i + groupSize))
}
</script>

<style scoped>
/* Ajusta espaçamento entre slides se quiser */
.carousel-item {
  transition: transform 0.6s ease;
}
</style>
