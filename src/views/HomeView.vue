<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
<template>
  <div>
    <!-- Navigation -->
    <NavBar />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Product Section -->
    <ProductSection />
    
    <!-- Featured Logos -->
    <FeaturedLogos />
    
    <!-- Location Section -->
    <LocationSection />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import ProductSection from '@/components/ProductSection.vue'
import FeaturedLogos from '@/components/FeaturedLogos.vue'
import LocationSection from '@/components/LocationSection.vue'
</script>