<template>
  <div class="flex items-center justify-center mt-2 py-2">
    <div class="flex items-center">
      <error-list />
    </div>
    <form class="w-full max-w-lg" @submit.prevent="signUp">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="username"
            type="text"
            v-model="store.username"
            placeholder="Enter a username"
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
         <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="password"
            v-model="store.password"
            type="password"
            placeholder="******************"
          />
          <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
        </div>
         <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="password"
          >
            Confirm Password
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="confirm-password"
            v-model="store.confirmPassword"
            type="password"
            placeholder="******************"
          />
          <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
         <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            v-model="store.email"
            type="text"
            placeholder="email@domain.com"
          />
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
         <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Birthdate
          </label>
          
         <VueDatePicker v-model="store.birthdate"/>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            City
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
          />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            State
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-zip"
          >
            Zip
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="90210"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <form-select :selectList="ethnicities" :name="'ethnicity'" :labelTitle="'Ethnicity'"/>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <form-select :selectList="genders" :name="'genders'" :labelTitle="'Gender'"/>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-4 md:mb-0">
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import ErrorList from '@/components/errors/ErrorList.vue'
import { useRegistrationStore } from '@/stores/Registration'
import { useErrorStore } from '@/stores/Error'
import FormSelect from '@/components/general/FormSelect.vue'
import SignUpView from '@/views/profile/auth/SignUpView.vue'
import { useRouter, useRoute } from 'vue-router'
const store = useRegistrationStore()
const err = useErrorStore()
const router = useRouter()
  const genders = reactive([
  { name: 'Male', value: 'male', key: 'gender-1' },
  { name: 'Female', value: 'female', key: 'gender-2' },
  { name: 'Trans Male', value: 'trans-male', key: 'gender-3' },
  { name: 'Trans Female', value: 'trans-female', key: 'gender-4' }
])

 const ethnicities = reactive([
  { name: 'Black/African American', value: 'Black/African American' },
  { name: 'White/Caucasian', value: 'White/Caucasian' },
  { name: 'Hispanic', value: 'Hispanic' },
  { name: 'Indian', value: 'Indian' },
  { name: 'Middle Eastern', value: 'Middle Eastern' },
  { name: 'Native American', value: 'Native American' },
  { name: 'Asian', value: 'Asian' },
  { name: 'Mixed Race', value: 'Mixed Race' },
  { name: 'Other', value: 'Other' }
])
async function signUp() {
  const result = await store.registerNewUser()
   // if user returned navigate to login
  router.push({name: 'login'})
 }
</script>
