<template>
    <div class="card">
        <div class="card-img-top retangulo"></div>
        <div class="card-body">
            <h4 class="titulo-card">Lorem ipsum dolor sit amet?</h4>
            <p class="text-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse augue sem, molestie non maximus non,
                fermentum quis urna. In porta condimentum odio non varius. Nam id euismod augue, sit amet placerat quam.
            </p>
        </div>
    </div>
</template>

<style escoped>
.card{
    width: 260px;
    background-color: transparent;
    border: none;
    margin-left: 16px;
}

.retangulo {
  width: 260px;
  height: 162px;
  background-color: #ffffff;
  border: 1px solid #707070;
}

.titulo-card {
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #252525;
  margin-top: 18px; /* ajuste conforme necessário */
}

.text-card {
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #636363;
  margin-top: 8px;
}

</style>