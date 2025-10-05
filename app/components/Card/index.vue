<template>
    <div class="card">
        <span class="card-img-top retangulo"></span>
        <div class="card-body">
            <h4 class="titulo-card">Lorem ipsum dolor sit amet?</h4>
            <p class="text-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse augue sem, molestie non maximus non,
                fermentum quis urna. In porta condimentum odio non varius. Nam id euismod augue, sit amet placerat quam.
            </p>
        </div>
    </div>
</template>

<style escoped>
.retangulo {
  width: 260px;
  height: 162px;
  background-color: #ffffff;
  border: 1px solid #707070;
  border-radius: 8px; /* opcional, se quiser deixar mais suave */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* opcional */
}

/* Se você quiser posicionar esse card, use margin ou flex/grid no container.
   Evite top/left sem position: absolute; */

.titulo-card {
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #252525;
  margin-top: 12px; /* ajuste conforme necessário */
}

.text-card {
  width: 260px;
  height: 152px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 400; /* "normal" equivale a 400 */
  font-size: 14px;
  line-height: 22px;
  color: #636363;
  margin-top: 8px; /* ajuste conforme necessário */
}

</style>