<script setup lang="ts">
import { AuthMagic, AuthMagicAccount } from '@/components'
</script>

<template>
  <section class="flex flex-col justify-center items-center w-screen p-36">
    <!-- component -->
    <div>
      <h1 class="mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl text-center">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          >Supabase</span
        >
        Magic links
      </h1>
    </div>
    <AuthMagicAccount />
    <AuthMagic />
  </section>
</template>
