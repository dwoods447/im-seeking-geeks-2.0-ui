<template>
    <profile-image class="w-64 mr-4 mt-2" v-if="user.images.imagePaths?.length" :source="user?.images?.imagePaths[user?.images?.imagePaths.length - 1].path" :random="user?.random" :gender="user?.gender"  @click="goToProfileDetail"/>
</template>
<script lang="ts" setup>
import type { AppUser } from '@/stores/Authentication'
import ProfileImage from '@/components/profile/profile-img/ProfileImage.vue'
interface ProfilePreviewProps { 
    user: AppUser 
}
defineProps<ProfilePreviewProps>()

function goToProfileDetail() { 

}
</script>