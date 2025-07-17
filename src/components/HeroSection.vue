<template>
  <section class="hero-section d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center min-vh-100">
        <div class="col-md-7">
          <h1 class="hero-text mb-4">
            MADE WITH LOVE<br>
            AT 403 FOOD<br>
            PROCESSING
          </h1>
          <p class="hero-subtitle">
            SINCE 1970... SOMETHING.
          </p>
        </div>
        <div class="col-md-5">
          <div class="text-center">
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
              alt="BBQ Sauce Being Poured"
              class="img-fluid rounded-3 shadow-lg md-relative"
              style="max-height: 33rem; right:8rem; object-fit: cover; transform: rotate(10deg);"
            >
          </div>
        </div>
      </div>

      <!-- Scrolling Text Banner -->
      <div class="position-absolute bottom-0 start-0 w-100 overflow-hidden" style="height: 60px;">
        <div class="d-flex align-items-center h-100 text-white" style="background: rgba(0,0,0,0.3);">
          <div class="marquee">
            <span class="me-5">IN THE HEAT DOME</span>
            <span class="me-5">NO SAUCE COMING IN HOT</span>
            <span class="me-5">MADE FROM SCRATCH MEAT</span>
            <span class="me-5">BRING THE HEAT HOME</span>
            <span class="me-5">NO SAUCE COMING IN HOT</span>
            <span class="me-5">MADE FROM</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted} from 'vue'

// const heroText = ref<HTMLElement | null>(null)

const updateFontSize = () => {
  const element = document.querySelector('.hero-text') as HTMLElement
  if (!element) return

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

  // Dynamic font sizing based on viewport width
  let fontSize: number

  if (vw >= 1400) {
    fontSize = Math.min(6.5, vw * 0.04) // Max 5.5rem for very large screens
  } else if (vw >= 1200) {
    fontSize = Math.min(6, vw * 0.038) // 4.5-5rem for large screens
  } else if (vw >= 992) {
    fontSize = Math.min(5.5, vw * 0.036) // 3.5-4.5rem for medium screens
  } else if (vw >= 768) {
    fontSize = Math.min(4.5, vw * 0.034) // 2.5-3.5rem for tablets
  } else if (vw >= 576) {
    fontSize = Math.min(3.8, vw * 0.048) // 2.2-2.8rem for large phones
  } else {
    fontSize = Math.min(3.2, vw * 0.055) // 1.8-2.2rem for small phones
  }

  element.style.fontSize = `${fontSize}rem`
}

onMounted(() => {
  updateFontSize()
  window.addEventListener('resize', updateFontSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateFontSize)
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: block;
}
.hero-text {
  font-size: 4rem;
  transition: font-size 0.5s ease-in-out;
}

@media (max-width: 768px) {
  .hero-text {
    font-size: 3rem;
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

.marquee {
  display: flex;
  animation: scroll 20s linear infinite;
  white-space: nowrap;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

</style>
