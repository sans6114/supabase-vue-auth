<template>
  <!-- component -->

  <!-- Header Navbar -->
  <NavBar />

  <!-- View of my page-->
  <router-view></router-view>

  <!-- footer of my page-->
  <Footer />
</template>

<script setup>
import { Footer, NavBar } from '@/components'
</script>
