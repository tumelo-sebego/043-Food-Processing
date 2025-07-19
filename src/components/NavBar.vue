<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: var(--jones-red);">
    <div class="container">
      <a class="navbar-brand text-white" href="#">
        <i class="bi bi-fire me-2"></i>
        JONES
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-black" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-black" href="#">OUR STORY</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-black" href="#">WHAT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-black" href="#">PRESS</a>
          </li>
        </ul>

        <div class="d-flex align-items-center nav-right">
          <i class="bi bi-cart text-black me-3" style="font-size: 1.2rem;"></i>
          <button class="btn btn-outline-light btn-sm">
            SHOP SAUCES
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Navigation component
</script>

<style scoped>
@media (max-width: 991.98px) {
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--jones-red);
    padding: 1rem;
    z-index: 1000;
  }
  .navbar {
    position: relative;
  }
}
</style>
