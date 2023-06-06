<template>
     <profile-image :random="user.random" :gender="user.gender" :source="imageSource" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import ProfileImage from '../profile-img/ProfileImage.vue'
import type { AppUser } from '@/stores/Authentication'
const props = defineProps<{
    user:  AppUser
}>()
const imageSource = computed(() => props.user?.images?.imagePaths?.[props.user?.images?.imagePaths?.length - 1]?.path ?? '8.jpg')
</script>