<template>
  <div>
    <!-- Navigation -->
    <NavBar />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Scrolling Banner -->
    <ScrollingBanner />

    <!-- Product Section -->
    <ProductSection />

    <!-- Featured Logos -->
    <FeaturedLogos />

    <!-- Location Section -->
    <LocationSection />

    <AboutSection />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import ScrollingBanner from '@/components/ScrollingBanner.vue'
import ProductSection from '@/components/ProductSection.vue'
import FeaturedLogos from '@/components/FeaturedLogos.vue'
import LocationSection from '@/components/LocationSection.vue'
import AboutSection from '@/components/AboutSection.vue'
</script>
