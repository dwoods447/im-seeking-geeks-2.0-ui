<template>
  <div class="flex flex-column items-center justify-center">
    <div class="w-[50%]">
      <form @submit.prevent="handleSearch">
        <common-search />
        <search-button :buttonText="'Search'"/>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProfileStore } from '../../../stores/Profile'
import CommonSearch from '@/components/profile/search-forms/CommonSearch.vue'
import SearchButton from '@/components/general/SearchButton.vue';
const store = useProfileStore()

function handleSearch() { 
  console.log(`Clicked search`)
}
</script>
