<template>
  <section class="location-section">
    <div class="container-fluid p-4 p-md-0 h-100">
      <div class="row align-items-center g-0 h-100">
        <div class="col-md-6 mb-5 px-md-5">
          <h2 class="location-title mb-4">
            FIND US IN <br />
            EAST LONDON<br />
            OR ORDER FROM ANYWHERE
          </h2>
          <p class="fs-5 mb-4 product-description">
            Get your hands on 043 Food Processing Sauce at select SPAR stores in the Eastern Cape,
            or catch us at pop-up markets and food events around the country.
          </p>
          <button class="btn btn-jones-brown">GET DIRECTIONS</button>
        </div>
        <div class="col-md-6 h-100">
          <div class="text-center h-100">
            <img
              src="../assets/images/store.jpg"
              alt="BBQ Restaurant Interior"
              class="img-fluid h-100"
              style="object-fit: cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { updateLocationTitleFontSize as updateFontSize } from '../utils/styleFunctions'

const updateLocationTitleFontSizeHandler = () => {
  updateFontSize('.location-title')
}

onMounted(() => {
  updateLocationTitleFontSizeHandler()
  window.addEventListener('resize', updateLocationTitleFontSizeHandler)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateLocationTitleFontSizeHandler)
})
</script>
