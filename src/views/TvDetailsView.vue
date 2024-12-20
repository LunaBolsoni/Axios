<script setup>
import { defineProps, onMounted } from 'vue';
import { useTvStore } from '@/stores/tv';
const TvStore = useTvStore();

const props = defineProps({
  tvId: {
    type: Number,
    required: true,
  },
});

onMounted(async () => {
  await TvStore.getTvDetail(props.tvId);
});
</script>

<template>

  <div class="main">
    <div class="gradiente"></div>
    <div class="background">
      <img :src="`https://image.tmdb.org/t/p/original${TvStore.currentTv.backdrop_path}`" :alt="TvStore.currentTv.title"/>
    </div>
      <div class="content">
        <div class="details">
          <h1>Serie: {{ TvStore.currentTv.name }}</h1>
          <p>{{ TvStore.currentTv.tagline }}</p>
          <p>{{ TvStore.currentTv.overview }}</p>
          <p>Orçamento: ${{ TvStore.currentTv.budget }}</p>
          <p>Avaliação: {{ TvStore.currentTv.vote_average }}</p>
        </div>
      </div>
  </div>



</template>

<style scoped>
.main {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: white;
    font-family: Arial, sans-serif;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2; 
}

.background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5); 
}

.gradiente {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.76) 18%, rgba(0, 0, 0, 0) 60%, rgba(0, 212, 255, 0) 100%);
    z-index: -1; 
}

.content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 3rem;
    height: 100%;
    box-sizing: border-box;
}

.details h1, p{
    max-width: 600px;
    font-size: 3rem;
    margin: 0;
    color: white;
}

.details .tagline {
    font-size: 1.5rem;
    font-style: italic;
    color: #e6e6e6;
}

.details .overview {
    margin: 1rem 0;
    line-height: 1.6;
    color: #cccccc;
}

.details p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #dddddd;
}

.details strong {
    color: #ffc107;
}
</style>
