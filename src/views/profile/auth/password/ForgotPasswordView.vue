<template>
  <div>
    <form @submit.prevent="store.forgotPassword">
      <div>
        <input type="text" v-model="store.email" />
      </div>
      <div>
        <button type="submit"></button>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { useAuthneticationStore } from '@/stores/Authentication'
const store = useAuthneticationStore()
</script>
