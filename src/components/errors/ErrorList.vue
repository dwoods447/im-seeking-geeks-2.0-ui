<template>
  <div v-if="err.getErrors.length > 0">
    <h2>Please fix the following errors:</h2>
    <div v-for="(error, i) in err.getErrors" :key="i">
      {{ error.message }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useErrorStore } from '@/stores/Error'
const err = useErrorStore()
</script>
