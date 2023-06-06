<template>
    <div class="grid gap-4 grid-cols-3 grid-rows-3">
        <!-- <user :user="user"/> -->
        <ProfilePreview v-for="user in store.getRecentUsers" :user="user" class="w-64 mr-4 mt-2"/>
    </div>
   
</template>

<script lang="ts" setup>
import ProfilePreview from '@/components/profile/preview/ProfilePreview.vue'
import User from '@/components/profile/users/User.vue'
import { useProfileStore } from '@/stores/Profile'
const store = useProfileStore()
</script>