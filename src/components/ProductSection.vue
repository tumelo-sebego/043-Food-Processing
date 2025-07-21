<template>
  <section class="product-section">
    <div class="container-fluid p-4 p-md-0">
      <div class="row align-items-center g-0 h-100">
        <div class="col-md-6 p-0 h-100">
          <img
            src="../assets/images/product1.jpg"
            alt="Jones BBQ Sauce Bottle"
            class="img-fluid h-100"
            style="object-fit: cover"
          />
        </div>
        <div class="col-md-6">
          <div class="text-left px-md-5 pt-3">
            <h2 class="product-title mb-4">
              THE FLAVOR OF <br />
              <span>043</span> SAUCE IN <br />
              YOUR KITCHEN
            </h2>
            <p class="mb-4 fs-5 product-description">
              What started in a home kitchen has grown into a nationally recognized local brand, now
              found on SPAR shelves and loved at braais across South Africa. Whether you like it
              sweet, tangy, or spicy, there’s a flavor made just for you.
            </p>
            <button class="btn btn-jones">SHOP THE SAUCE</button>
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

<style scoped>
.product-title span {
  color: var(--jones-red);
}
</style>
