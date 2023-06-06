<template>
  <!--Tabs navigation-->
  <ul
    class="mb-5 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
    role="tablist"
    data-te-nav-ref
  >
    <li role="presentation" class="flex-auto text-center">
      <a
        href="#tabs-home01"
        class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
        data-te-toggle="pill"
        data-te-target="#tabs-home01"
        data-te-nav-active
        role="tab"
        aria-controls="tabs-home01"
        aria-selected="true"
        >Home</a
      >
    </li>
    <li role="presentation" class="flex-auto text-center">
      <a
        href="#tabs-messages01"
        class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
        data-te-toggle="pill"
        data-te-target="#tabs-messages01"
        role="tab"
        aria-controls="tabs-messages01"
        aria-selected="false"
        >Messages</a
      >
    </li>
    <li role="presentation" class="flex-auto text-center">
      <a
        href="#tabs-photos01"
        class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
        data-te-toggle="pill"
        data-te-target="#tabs-photos01"
        role="tab"
        aria-controls="tabs-photos01"
        aria-selected="false"
        >Photos</a
      >
    </li>
    <li role="presentation" class="flex-auto text-center">
      <a
        href="#tabs-basic-search01"
        class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
        data-te-toggle="pill"
        data-te-target="#tabs-basic-search01"
        role="tab"
        aria-controls="tabs-basic-search"
        aria-selected="false"
        >Basic Search</a
      >
    </li>
    <li role="presentation" class="flex-auto text-center">
      <a
        href="#tabs-favorite-users01"
        class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
        data-te-toggle="pill"
        data-te-target="#tabs-favorite-users01"
        role="tab"
        aria-controls="tabs-favorite-users01"
        aria-selected="false"
        >Favorite Users</a
      >
    </li>
     <li role="presentation" class="flex-auto text-center">
      <a
        href="#tabs-blocked-users01"
        class="disabled pointer-events-none my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
        data-te-toggle="pill"
        data-te-target="#tabs-blocked-users01"
        role="tab"
        aria-controls="tabs-blocked-users01"
        aria-selected="false"
        >Blocked Users</a
      >
    </li>
  </ul>

  <!--Tabs content-->
  <div class="mb-6">
    <div
      class="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="tabs-home01"
      role="tabpanel"
      aria-labelledby="tabs-home-tab01"
      data-te-tab-active
    >
      <Spinner v-if="loadingStore.isLoading"/>
      <RecentUsers v-else/>
    </div>
    <div
      class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="tabs-messages01"
      role="tabpanel"
      aria-labelledby="tabs-messages01"
    >
      <InboxView/>
    </div>
    <div
      class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="tabs-photos01"
      role="tabpanel"
      aria-labelledby="tabs-photos01"
    >
      <PhotosView/>
    </div>
    <div
      class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="tabs-basic-search01"
      role="tabpanel"
      aria-labelledby="tabs-basic-search01"
    >
      <BasicSearchView/>
    </div>

     <div
      class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="tabs-favorite-users01"
      role="tabpanel"
      aria-labelledby="tabs-favorite-users01"
    >
      Favorite Users
    </div>

     <div
      class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
      id="tabs-blocked-users01"
      role="tabpanel"
      aria-labelledby="tabs-blocked-users01"
    >
      Blocked Users
    </div>
   
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useProfileStore } from '@/stores/Profile'
import { defineAsyncComponent } from 'vue'
import { useLoadingStore } from '@/stores/Loading'
import RecentUsers from '@/components/profile/users/RecentUsers.vue'
import Spinner from '@/components/general/Spinner.vue'
const store = useProfileStore()
const loadingStore = useLoadingStore()
const InboxView = defineAsyncComponent(() =>
  import('../profile/inbox/ViewInboxView.vue')
)

const PhotosView = defineAsyncComponent(() =>
  import('@/components/profile/photos/HandleImagesView.vue')
)

const BasicSearchView = defineAsyncComponent(() =>
  import('../profile/search/BasicView.vue')
)

const AdvancedSearchView = defineAsyncComponent(() =>
  import('../profile/search/AdvancedView.vue')
)


onMounted(async() => { 
  await store.getRandomUsers()  
})
</script>
