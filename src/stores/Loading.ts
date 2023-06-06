import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useLoadingStore = defineStore('loading', () => {
    const loading = ref<boolean>(false)
    const isLoading = computed(() => loading.value)
  
    function setLoadingState(status: boolean) {
      loading.value = status  
    }
  return {
      setLoadingState,
      isLoading
  }
})
