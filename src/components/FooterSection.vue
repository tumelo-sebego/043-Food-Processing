<template>
  <footer class="footer-section py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img src="../assets/logo.svg" alt="Logo" class="footer-logo mb-3" />
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h4>Products</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h4>Community</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h4>Support</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col text-center">
          <p>&copy; {{ currentYear }} Designed by tumeloGraphicStudio</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.footer-section {
  background-color: var(--jones-dark-red);
  color: var(--vt-c-text-dark-2);
}

.footer-logo {
  max-width: 150px;
}

h4 {
  color: var(--vt-c-white);
  font-weight: bold;
}

p {
  color: var(--vt-c-text-dark-2);
}

.text-center {
    text-align: center;
}
</style>
