<template>
  <section class="banner-section">
    <div class="d-flex align-items-center h-100 text-white" style="background-color: #1a1a1a;">
      <div class="marquee-container">
        <div class="marquee">
          <span class="me-5">IN THE HEAT DOME</span>
          <span class="me-5">NO SAUCE COMING IN HOT</span>
          <span class="me-5">MADE FROM SCRATCH MEAT</span>
          <span class="me-5">BRING THE HEAT HOME</span>
          <span class="me-5">NO SAUCE COMING IN HOT</span>
          <span class="me-5">MADE FROM</span>
        </div>
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
  </section>
</template>

<script setup lang="ts">
// Scrolling banner component
</script>

<style scoped>
.banner-section {
  height: 4rem;
  overflow: hidden;
  width: 100%;
}

.marquee-container {
  display: flex;
  animation: scroll 50s linear infinite;
  white-space: nowrap;
}

.marquee {
  display: flex;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 2rem;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
