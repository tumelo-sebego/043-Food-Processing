<template>
  <section class="hero-section d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center min-vh-100">
        <div class="col-md-7 text-column">
          <h1 class="hero-text mb-4">
            MADE WITH LOVE<br>
            AT <span>403</span> FOOD<br>
            PROCESSING
          </h1>
          <p class="hero-subtitle">
            SINCE 1970... SOMETHING.
          </p>
        </div>
        <div class="col-md-5 image-column">
          <div class="text-center image-container">
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
              alt="BBQ Sauce Being Poured"
              class="img-fluid rounded-3 shadow-lg md-relative"
              style="max-height: 33rem; right:6rem; object-fit: cover; transform: rotate(10deg);"
            >
          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted} from 'vue'
import { updateFontSize } from '../utils/styleFunctions'

// const heroText = ref<HTMLElement | null>(null)

const updateHeroFontSize = () => {
  updateFontSize('.hero-text', 6.9)
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
.hero-section {
  min-height: 100vh;
  display: block;
}
.text-column {
  position: relative;
  z-index: 2;
}
.image-column {
  position: relative;
  z-index: 1;
}
.hero-text {
  font-size: 4rem;
  transition: font-size 0.5s ease-in-out;
}

.hero-text span{
  color: white;
}

@media (max-width: 768px) {
  .hero-text {
    font-size: 3rem;
  }
  .container {
    margin-top: 4rem;
  }
  .hero-section {
    padding-bottom: 5rem;
  }
  .image-container {
    padding-top: 2rem;
  }
}

@media (max-width: 576px) {
  .hero-text {
    font-size: 2rem;
  }
}

@media (min-width: 768px) {
  .md-relative {
    position: relative;
  }
}



</style>
