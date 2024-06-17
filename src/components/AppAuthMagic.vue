<script lang="ts" setup>
import { ref } from 'vue'

import { useAuth } from '../composables/useAuth'

const { loginWithMagic } = useAuth()
const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true

    await loginWithMagic(email.value)
  } catch (error) {
    alert(error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="p-10 w-full flex flex-col justify-center bg-white">
    <form
      @submit.prevent="handleLogin"
      class="w-[500px] h-[250px] mx-auto bg-slate-700 rounded-2xl shadow-xl p-10 text-center"
    >
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Correo Electrónico</label
        >
        <input
          type="email"
          v-model="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="nombre@correo.com"
          required
        />
      </div>
      <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Remember me</label
        >
      </div>
      <button
        :diabled="loading"
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {{ loading ? 'cargando' : 'enviar' }}
      </button>
    </form>
  </section>
</template>
