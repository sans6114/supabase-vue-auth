<script lang="ts" setup>
import { ref } from 'vue'

import supabase from '@/api/supabase-clients'

const loading = ref(false)
const email = ref('')
const password = ref('')
const login = async () => {
  try {
    loading.value = true
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    if (error) throw error
    alert('Check your email for the login link!')
    password.value = ''
    email.value = ''
    console.log(data)
  } catch (error) {
    if (error) {
      alert('error al crear cuenta')
    }
  } finally {
    loading.value = false
  }
}
const signUp = () => {
  console.log('hola mundo sign up')
}
</script>

<template>
  <section class="p-10 w-full flex flex-col justify-center bg-white">
    <form class="w-[500px] h-[300px] mx-auto bg-slate-700 rounded-2xl shadow-xl p-10 text-center">
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
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Contraseña</label
        >
        <input
          type="password"
          v-model="password"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="*****"
          required
        />
      </div>
      <button
        :diabled="loading"
        @click="login"
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-4 w-20"
      >
        {{ loading ? 'cargando' : 'Entrar' }}
      </button>
      <button
        @click="signUp"
        :diabled="loading"
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-4 w-20"
      >
        {{ loading ? 'cargando' : 'Salir de la cuenta' }}
      </button>
    </form>
  </section>
</template>
