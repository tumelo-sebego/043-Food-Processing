<template>
  <footer class="footer-section pt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="../assets/images/footer_logo.svg"
            alt="Logo"
            class="footer-logo mb-3"
            style="color: white"
          />
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h4>Contact Us</h4>
          <p class="mb-0">Questions?</p>
          <p>
            Call us at:
            <a style="color: var(--jones-dark-red)" href="tel:+1234567890">+1 234 567 890</a>
          </p>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h4>Orders</h4>
          <p>Oder online or call our whatsapp number</p>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h4>Socials</h4>
          <p>Follow Us</p>
          <a
            class="d-block"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i> Instagram
          </a>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h4>Support</h4>
          <p>For support on all your questions, contact us with our email address</p>
          <p>support@043foodprocessing.co.za</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col text-center">
          <p style="font-size: 14px">
            &copy; {{ currentYear }} Designed by
            <a href="https://tumeloGraphicStudio.netlify.app">tumeloGraphicStudio</a>
          </p>
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
  background-color: var(--jones-darker-brown);
  color: var(--jones-cream);
  background-image: url('../assets/images/bg.png');
  background-size: auto;
  background-repeat: repeat;
  background-blend-mode: multiply;
}

.footer-logo {
  max-width: 150px;
}

h4 {
  color: var(--vt-c-white);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.footer-section p {
  font-size: 14px !important;
}

a {
  font-family: 'Poppins', sans-serif;
  color: var(--jones-dark-red);
}

p {
  color: var(--vt-c-text-dark-2);
}

.text-center {
  text-align: center;
}
</style>
