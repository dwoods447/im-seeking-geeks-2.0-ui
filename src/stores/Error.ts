import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface ErrorMessage {
  message: string
}

export const useErrorStore = defineStore('error', () => {
  const errors = ref<Array<ErrorMessage>>([])
  const getErrors = computed<ErrorMessage[]>(() => errors.value)

  function setErrorMessages(message: string) {
    errors.value.push({ message: message })
  }
  function clearErrorMessages() {
    // Clear after seven seconds
    setTimeout(() => {
      errors.value = []
    }, 7000)
  }
  return {
    getErrors,
    errors,
    setErrorMessages,
    clearErrorMessages
  }
})
