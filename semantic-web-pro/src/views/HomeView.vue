<script src="./home.ts" lang="ts">
</script>

<template>
  <main class="container">
  <link rel="stylesheet" type="text/css" href="flexboxgrid.min.css">
  <div class="container-fluid">
          <div class="margin"></div>
          <div class="row center-lg-12">
              <div class="col-lg-12">
                  <div class="box slider">
                          <div class="item" v-for="(film, index) in films" :key="index">
                              <div class="information">
                                  <div class="margin"></div>
                                  <div class="text">
                                      <h1>{{ film.title.value }}</h1>
                                      <div class="margin"></div>
                                      <p><a id="yellow">ReleaseDate: </a><a>{{ film.releaseDate.value }}</a></p>
                                      <p><a id="yellow">Director: </a><a>{{ film.directorName.value }}</a></p>
                                      <p><a id="yellow">Genres: </a><a>{{ film.genresName.value }}</a></p>
                                      <div class="buton"><p><a :href="film.title.value">VİEW DETAİL</a></p></div>
                                  </div>
                              </div>
                              <img alt="Ảnh film" :src="film.image && film.image.value  ? film.image.value: ''" class="image-film"/>
                          </div>
                  </div>
              </div>
          </div>
      </div>
  </main>
</template>
<style src="../css/main.css">
</style>
