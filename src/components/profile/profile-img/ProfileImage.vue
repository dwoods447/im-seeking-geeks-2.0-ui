<template>
<div>
    <img :src="imageSource" alt="">
</div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps<{
    random?: string
    gender: string
    source?: string
}>()
const imageSource = computed(() => {
  if (props.random === 'true') {
        if(props.source){
                switch (props.gender) {
                case 'male':
                    return `https://res.cloudinary.com/dnynuxbi6/image/upload/v1679632599/women/${props.source}`
                case 'female':
                case 'trans-female':
                    return `https://res.cloudinary.com/dnynuxbi6/image/upload/v1679632599/women/${props.source}`
                case 'trans-male':
                    return `https://res.cloudinary.com/dnynuxbi6/image/upload/v1679632599/women/${props.source}`
                    break
                default:
                    return `https://res.cloudinary.com/dnynuxbi6/image/upload/v1679632599/women/${props.source}`
                }
        }    
    } else {
        return 'https://res.cloudinary.com/dnynuxbi6/image/upload/v1679632599/women/nophotoprovided.jpg'
    }
  
})
</script>