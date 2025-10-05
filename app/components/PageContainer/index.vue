<template>
    <section class="py-5">
        <div class="container-fluid text-center">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h2 class="pre-titulo">Texto aqui</h2>
                    <h1 class="titulo">Mais outro bem texto aqui</h1>
                    <p class="texto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis risus sit amet libero porttitor laoreet. Nullam ut volutpat nisi. Phasellus id tempus orci. Donec eget orci eget dolor condimentum sodales.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <div id="cardCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div v-for="(group, index) in groupedCards" :key="index"
                                :class="['carousel-item', index === 0 ? 'active' : '']">
                                <div class="row">
                                    <div v-for="card in group" :key="card" class="col-12 col-md-6 col-lg-3">
                                        <Card />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Controles -->
                        <button class="carousel-control-prev" type="button" data-bs-target="#cardCarousel"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Anterior</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#cardCarousel"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Próximo</span>
                        </button>

                        <div class="carousel-indicators custom-indicators">
                            <span v-for="(group, index) in groupedCards" :key="index"
                                :class="['indicator-block', index === activeIndex ? 'active' : '']"
                                @click="goToSlide(index)"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const totalCards = 20
const cards = Array.from({ length: totalCards }, (_, i) => i + 1)
const groupedCards = []
for (let i = 0; i < cards.length; i += 4) {
  groupedCards.push(cards.slice(i, i + 4))
}

const activeIndex = ref(0)
let bsCarousel = null

function goToSlide(index) {
  if (bsCarousel) {
    bsCarousel.to(index)
  }
}

onMounted(() => {
  const carouselEl = document.getElementById('cardCarousel')
  if (carouselEl) {
    bsCarousel = new bootstrap.Carousel(carouselEl, {
      interval: false,
      ride: false,
    })

    // Escuta a transição e atualiza o indicador
    carouselEl.addEventListener('slid.bs.carousel', (event) => {
      activeIndex.value = event.to
    })
  }
})
</script>