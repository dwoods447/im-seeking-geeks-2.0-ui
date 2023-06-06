<template>
  <div>
    <div class="flex">
      <div class="flex-initial w-32">
        <div>
          <profile-image  :source="imageSource" :random="random" :gender="gender" />
        </div>
      </div>
      <div class="flex-auto file:w-64">
        <div class="flex items-center justify-center">
          <p>{{ messageContent }}</p>
        </div>
      </div>
      <div class="w-32">
        {{ date }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import ProfileImage from '@/components/profile/profile-img/ProfileImage.vue'
const props = defineProps<{
  source: string
  sender?: string
  reciever?: string
  content: string
  messageLength: number
  date: string
  senderId: string
  gender: string
  random: string
}>()

const imageSource = computed(() => {
  if (props.random === 'true') {
    switch (props.gender) {
      case 'male':
        return 'https://res.cloudinary.com/dnynuxbi6/image/upload/v1679632599/women/0.jpg'
      case 'female':
      case 'trans-female':
        return 'https://res.cloudinary.com/dnynuxbi6/image/upload/v1679632599/women/0.jpg'
      case 'trans-male':
        return 'https://res.cloudinary.com/dnynuxbi6/image/upload/v1679632599/women/0.jpg'
        break
      default:
        return 'https://res.cloudinary.com/dnynuxbi6/image/upload/v1679632599/women/0.jpg'
    }
  }
})

const messageContent = computed(() => props.content.substring(0, length / 1.2) + '...')
</script>
