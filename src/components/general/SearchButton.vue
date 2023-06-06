<template>
    <div>
        <button @click="handleButtonClick" class="rounded- bg-lime-700 w-96 py-2 px-2">{{ buttonText }}</button>
    </div>
</template>
<script lang="ts" setup>
interface ButtonProps {
    buttonText: string,
    icon?: string
}
defineProps<ButtonProps>()
const emit = defineEmits<{
  (e: 'click'): void
}>()

function handleButtonClick() { 
    emit('click')
}
</script>