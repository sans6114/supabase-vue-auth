<template>
  <footer
    class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"
  >
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >{{ new Date().getFullYear() }}
      <a href="https://flowbite.com/" class="hover:underline">Santi Sosa™</a>. Todos los derechos
      reservados.
    </span>
    <ul
      class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-10 px-2"
    >
      <li>
        <router-link :to="{ name: 'home' }" class="hover:underline" aria-current="page"
          >Home</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'register' }" class="hover:underline" aria-current="page"
          >Registrer</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'login' }" href="#" class="hover:underline" aria-current="page"
          >Login</router-link
        >
      </li>
    </ul>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
