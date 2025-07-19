<template>
  <section class="product-section">
    <div class="container-fluid p-4 p-md-0">
      <div class="row align-items-center g-0 h-100">
        <div class="col-lg-6 p-0 h-100">
          <img
            src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop"
            alt="Jones BBQ Sauce Bottle"
            class="img-fluid h-100"
            style="object-fit: cover;"
          >
        </div>
        <div class="col-lg-6">
          <div class="text-left px-md-5 pt-3">
            <h2 class="product-title mb-4">
              THE MAGIC OF<br>
              JONES BBQ IN<br>
              YOUR HOME
            </h2>
            <p class="mb-4 fs-5 product-description">
              The Jones family has made their sauce from scratch daily for
              over 50 years. For the first time ever, you can bring that flavor to
              a grill near you.
            </p>
            <button class="btn btn-jones">
              SHOP THE SAUCE
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { updateProductTitleFontSize as updateFontSize } from '../utils/styleFunctions'

const updateProductTitleFontSizeHandler = () => {
  updateFontSize('.product-title')
}

onMounted(() => {
  updateProductTitleFontSizeHandler()
  window.addEventListener('resize', updateProductTitleFontSizeHandler)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateProductTitleFontSizeHandler)
})
</script>
