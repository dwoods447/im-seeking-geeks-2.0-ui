<template>
  <div class="flex flex-col h-screen justify-center items-center">
    <div class="flex items-center">
      <error-list />
    </div>
    <div class="w-1/2 max-w-xs">
      <form
        class="bg-emerald-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="authenticate"
      >
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            required
            placeholder="Username"
            v-model="username"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            required
            type="password"
            v-model="password"
            placeholder="******************"
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="authenticate"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;{{ new Date().getFullYear() }} ImSeekingGeeks. All rights reserved.
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import ErrorList from '@/components/errors/ErrorList.vue'
import { useAuthneticationStore } from '@/stores/Authentication'
import { useErrorStore } from '@/stores/Error'
import { useRouter, useRoute } from 'vue-router'


const router = useRouter()
const store = useAuthneticationStore()
const err = useErrorStore()
const isLoggedIn = computed(() => store.isLoggedIn)
const username = ref('')
const password = ref('')

async function authenticate() {
  const authData = {
    username: username.value,
    password: password.value
  }
  if (username.value && password.value) {
     await store.authenticateUser(authData)
    if (!isLoggedIn.value) return
       router.push({name: 'dashboard'})
  } else {
    err.setErrorMessages('You must enter a username and password')
  }
}
</script>
