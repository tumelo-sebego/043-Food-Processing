<template>
  <section class="about-section d-flex pb-5">
    <div class="container my-md-5">
      <div class="row">
        <div class="col text-center text-column">
          <h1 class="about-text mb-4">
            "MADE WITH LOVE<br />
            AT <span>403</span> FOOD<br />
            PROCESSING"
          </h1>
          <p class="hero-subtitle">SINCE 2018 — ROOTED IN EASTERN CAPE PRIDE.</p>
        </div>
      </div>
      <div class="row g-0 mt-5">
        <div class="col-md-6 image-column">
          <div class="text-center image-container h-100">
            <img
              src="../assets/images/header.jpg"
              alt="BBQ Sauce Being Poured"
              class="img-fluid shadow-lg md-relative h-100"
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-md-6 image-column">
          <div class="text-center image-container">
            <img
              src="../assets/images/about2.jpg"
              alt="BBQ Sauce Being Poured"
              class="img-fluid shadow-lg"
              style="max-height: 33rem; object-fit: cover"
            />
          </div>
          <div class="text-right mt-4">
            <p class="fs-5 mb-4 learn-more-text">
              Founded by Siphelele Zekani in a small kitchen in East London, 043 Food Processing was
              born out of a love for homemade cooking and bold, honest flavor. What began in 2018
              with a few sauce bottles shared among friends has grown into a proudly South African
              food brand—now available in major stores like SPAR. We believe the best sauces are
              crafted, not mass-produced—using real ingredients, traditional methods, and a whole
              lot of heart. Every bottle from 043 is a tribute to where we’re from, and to the meals
              that bring us together.
            </p>
            <button class="btn btn-jones-brown">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { updateFontSize } from '../utils/styleFunctions'

// const heroText = ref<HTMLElement | null>(null)

const updateHeroFontSize = () => {
  updateFontSize('.about-text', 6.9)
}

onMounted(() => {
  updateHeroFontSize()
  window.addEventListener('resize', updateHeroFontSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateHeroFontSize)
})
</script>

<style scoped>
.about-section {
  min-height: 100vh;
  display: block;
  overflow: hidden;
  background-color: #f1e8db;
}
.text-column {
  position: relative;
  z-index: 2;
}
.image-column {
  position: relative;
  z-index: 1;
}

.learn-more-text {
  font-family: 'Poppins', sans-serif;
}
.about-text {
  font-size: 4rem;
  transition: font-size 0.5s ease-in-out;
}

.about-text span {
  color: var(--jones-red);
}

@media (max-width: 768px) {
  .about-text {
    font-size: 3rem;
  }
  .container {
    margin-top: 4rem;
  }
  .about-section {
    padding-bottom: 5rem;
  }
  .image-container {
    padding-top: 2rem;
  }
}

@media (max-width: 576px) {
  .about-text {
    font-size: 2rem;
  }
}

@media (min-width: 768px) {
  .md-relative {
    position: relative;
    right: 4rem;
  }
}
</style>
