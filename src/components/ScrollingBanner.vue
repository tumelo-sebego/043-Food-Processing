<template>
  <section class="banner-section">
    <div class="d-flex align-items-center h-100 text-white" style="background-color: #1a1a1a">
      <div class="marquee-container">
        <div class="marquee">
          <span class="me-5">🔥 AUTHENTIC FLAVOR FROM THE HEART OF 043</span>
          <span class="me-5">👨🏾‍🍳 CRAFTED IN SMALL BATCHES – BURSTING WITH TASTE</span>
          <span class="me-5">👪 INSPIRED BY FAMILY, PERFECTED FOR THE TABLE</span>
          <span class="me-5">🌿 REAL INGREDIENTS. NO SHORTCUTS. PURE FLAVOR</span>
          <span class="me-5">🌶️ SOUTH AFRICA’S NEXT FAVORITE SAUCE STARTS HERE</span>
        </div>
        <div class="marquee">
          <span class="me-5">🔥 AUTHENTIC FLAVOR FROM THE HEART OF 043</span>
          <span class="me-5">👨🏾‍🍳 CRAFTED IN SMALL BATCHES – BURSTING WITH TASTE</span>
          <span class="me-5">👪 INSPIRED BY FAMILY, PERFECTED FOR THE TABLE</span>
          <span class="me-5">🌿 REAL INGREDIENTS. NO SHORTCUTS. PURE FLAVOR</span>
          <span class="me-5">🌶️ SOUTH AFRICA’S NEXT FAVORITE SAUCE STARTS HERE</span>
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
  animation: scroll 90s linear infinite;
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
