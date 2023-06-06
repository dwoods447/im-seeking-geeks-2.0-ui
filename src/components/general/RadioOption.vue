<template>
  <div class="m-4">
    <h2>{{ labelTitle }}</h2>
    <div v-for="(option, index) in props.radioList" :key="option.name + index">
      <input
        type="radio"
        v-model="selected"
        :value="option.value"
        class="m-1"
        @change="handleRadioOption"
      />
      <label :for="option.name + index">{{ option.name }}</label>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const selected = ref('')
const props = defineProps<{
  labelTitle: string
  radioList: any[]
  name: string
  id: string
}>()
const emit = defineEmits<{
  (e: 'change', val: any): void
}>()
function handleRadioOption() {
  emit('change', selected.value)
}
</script>
