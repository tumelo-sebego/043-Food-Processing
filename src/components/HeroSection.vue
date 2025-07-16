<template>
  <section class="hero-section d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center min-vh-100">
        <div class="col-lg-7">
          <h1 class="hero-text mb-4">
            SAUCE MADE<br>
            WITH LOVE IN<br>
            KANSAS CITY
          </h1>
          <p class="hero-subtitle">
            SINCE 1970... SOMETHING.
          </p>
        </div>
        <div class="col-lg-5">
          <div class="text-center">
            <img 
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" 
              alt="BBQ Sauce Being Poured" 
              class="img-fluid rounded-3 shadow-lg"
              style="max-height: 400px; object-fit: cover;"
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
// Hero section component
</script>

<style scoped>
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