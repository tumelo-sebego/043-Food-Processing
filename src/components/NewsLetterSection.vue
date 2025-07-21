<template>
  <section class="news-section d-flex py-5">
    <div class="container my-5">
      <div class="row">
        <div class="col title text-center text-column">
          <h1 class="news-text mb-4">
            STAY IN THE<br />
            KNOW
          </h1>
          <p class="news-subtitle">
            Get flavor updates & hot deals.
            <br />
            Straight from the sauce source.
          </p>
        </div>
      </div>
      <div class="row g-0 mt-5">
        <div class="col-12 d-flex justify-content-center">
          <div class="newsletter-wrapper">
            <form class="newsletter-form mb-3 mb-md-0">
              <input type="email" placeholder="Enter your email" class="form-control" required />
            </form>
            <button class="btn btn-jones-brown">SUBSCRIBE</button>
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
  updateFontSize('.news-text', 6.9)
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
.news-section {
  display: block;
  overflow: hidden;
  background-color: var(--jones-dark-red);
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
.news-text {
  font-size: 4rem;
  transition: font-size 0.5s ease-in-out;
}

.news-text span {
  color: var(--jones-red);
}

.news-subtitle {
  color: var(--jones-darker-brown);
}
.btn-jones-brown {
  background-color: var(--jones-darker-red);
}

.newsletter-form input {
  padding: 1rem 2.5rem;
  border-radius: 25px;
  max-width: 16rem;
  font-family: 'Poppins';
}

.newsletter-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .newsletter-wrapper {
    flex-direction: row;
  }
  .newsletter-form {
    margin-right: 1rem;
  }
}

.title {
  color: var(--jones-darker-red);
}

@media (max-width: 768px) {
  .news-text {
    font-size: 3rem;
  }
  .container {
    margin-top: 4rem;
  }
  .news-section {
    padding-bottom: 5rem;
  }
  .image-container {
    padding-top: 2rem;
  }
}

@media (max-width: 576px) {
  .news-text {
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
