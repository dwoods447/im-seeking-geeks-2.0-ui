import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { AppUser } from '@/stores/Authentication'
export const useResultStore = defineStore('result', () => {
  const results = ref<AppUser[] | []>([])
  const searchResults = computed(() => results.value || [])

  function clearSearchResults(): void {
    results.value = []
  }
  function setSearchResults(srchResults: AppUser[] | []): void {
    results.value = srchResults
  }
  return {
    searchResults,
    setSearchResults,
    clearSearchResults
  }
})
