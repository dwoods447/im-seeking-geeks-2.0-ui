<template>
  <div class="relative mb-3" data-te-input-wrapper-init>
   
    <div>
         <label :for="props.id">{{ labelTitle }}</label>
    </div>
    <textarea :id="props.id" :name="props.name" rows="4" cols="100" :placeholder="props.placeholder" v-model="textArea" @change="handleInputEvent" class="border-2 border-gray-600 py-2 px-2"></textarea>
  </div>  
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const textArea = ref('')
interface TextAreaProps {
    id: string
    name: string
    placeholder: string
    labelTitle: string
}
const props = defineProps<TextAreaProps>()
const emit = defineEmits<{
  (e: 'change', val: any): void
}>()

function handleInputEvent() {
  emit('change', textArea.value)
}
</script>