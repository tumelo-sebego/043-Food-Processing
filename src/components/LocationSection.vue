<template>
  <section class="location-section">
    <div class="container-fluid p-4 p-md-0 h-100">
      <div class="row align-items-center g-0 h-100">
        <div class="col-lg-6 mb-5 px-md-5">
          <h2 class="location-title mb-4">
            STOP BY OUR<br>
            KANSAS CITY<br>
            LOCATION
          </h2>
          <p class="fs-5 mb-4 product-description">
            Experience the authentic taste of Jones BBQ at our original
            Kansas City location where it all started.
          </p>
          <button class="btn btn-jones-brown">
            GET DIRECTIONS
          </button>
        </div>
        <div class="col-lg-6 h-100">
          <div class="text-center h-100">
            <img
              src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="BBQ Restaurant Interior"
              class="img-fluid h-100"
              style="object-fit: cover;"
            >
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
