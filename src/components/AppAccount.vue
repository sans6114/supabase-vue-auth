<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { useAuth } from '@/composables'

const { getProfile } = useAuth()

const username = ref('')

const loading = ref(false)

//query para acceder a informacion
const getInformation = async () => {
  try {
    loading.value = true

    const { email, profile } = (await getProfile()) as { email: string; profile: any }

    username.value = email
    return {
      email,
      profile
    }
  } catch (error) {
    alert(error)
  } finally {
    loading.value = false
  }
}

const signOut = () => {
  console.log('signout')
}

onMounted(() => {
  getInformation()
})
</script>

<template>
  <section class="h-screen w-full flex flex-col items-center bg-white p-36 gap-10">
    <div
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img
          class="rounded-t-lg w-20 mx-auto"
          src="../assets/user-shield-alt-svgrepo-com.svg"
          alt=""
        />
      </a>
      <div class="p-5">
        <h2>hola</h2>
        <h2>{{ username }}</h2>
        <div class="flex flex-col w-full gap-5">
          <button
            :diabled="loading"
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-50"
          >
            {{ loading ? 'cargando' : 'enviado' }}
          </button>
          <button
            :diabled="loading"
            @click="signOut"
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-50"
          >
            Salir de la cuenta
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
