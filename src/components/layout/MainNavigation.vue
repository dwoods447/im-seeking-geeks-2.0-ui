<template>
  <nav
    class="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 py-3 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start"
    data-te-navbar-ref
  >
    <div class="flex w-full flex-wrap items-center justify-between px-6">
      <button
        class="block border-0 bg-transparent py-2 px-2.5 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContent4"
        aria-controls="navbarSupportedContent4"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="[&>svg]:w-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-7 w-7"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div
        class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContent4"
        data-te-collapse-item
      >
        
        <!-- Left links -->
        <ul
          class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
          data-te-navbar-nav-ref
          v-if="store.isLoggedIn"
        >
          <li class="p-2" data-te-nav-item-ref>
            <a
              class="text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="#"
              data-te-nav-link-ref
              @click="goToProfile(store.currentUser?._id.toString())"
              >View My Profile</a
            >
          </li>
          <li class="p-2" data-te-nav-item-ref>
            <a
              class="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="#"
              data-te-nav-link-ref
              @click="editProfile(store.currentUser?._id.toString())"
              >Edit Profile</a
            >
          </li>
          <li class="p-2" data-te-nav-item-ref>
            <a
              class="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="#"
              data-te-nav-link-ref
              >Ugrade Account</a
            >
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->
      <ul class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" >
        <li class="p-2" data-te-nav-item-ref>
          <a class="pr-2 text-xl font-semibold text-white" href="#" v-if="!store.isLoggedIn"  @click="goToLogin">
          Login</a>
        </li>
        <li class="p-2" data-te-nav-item-ref v-if="store.isLoggedIn">
          <a
            class="p-0 text-white opacity-60 hover:opacity-80 focus:opacity-80 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="#"
            data-te-nav-link-ref
            @click="logOut"
            >Log out</a
          >
        </li>
      </ul>
      <!-- Right elements -->
      <div class="relative flex items-center" v-if="store.isLoggedIn">
        <!-- Icon -->
        <div class="relative" data-te-dropdown-ref>
          <a
            class="hidden-arrow mr-4 flex items-center text-white opacity-60 hover:opacity-80 focus:opacity-80"
            href="#"
            id="dropdownMenuButton1"
            role="button"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
          >
            <span class="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span
              class="absolute -mt-2.5 ml-2 rounded-full bg-red-700 py-0 px-1.5 text-xs text-white"
              >1</span
            >
          </a>
          <ul
            class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton1"
            data-te-dropdown-menu-ref
          >
            <li>
              <a
                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
                >Action</a
              >
            </li>
            <li>
              <a
                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
                >Another action</a
              >
            </li>
            <li>
              <a
                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
                >Something else here</a
              >
            </li>
          </ul>
        </div>
        <div class="relative" data-te-dropdown-ref>
          <a
            class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
            href="#"
            id="dropdownMenuButton2"
            role="button"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
          >
            <img
              :src="userImgPath"
              class="rounded-full"
              style="height: 25px; width: 25px"
              alt=""
              loading="lazy"
            />
          </a>
          <ul
            class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton2"
            data-te-dropdown-menu-ref
          >
            <li>
              <a
                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
                >Action</a
              >
            </li>
            <li>
              <a
                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
                >Another action</a
              >
            </li>
            <li>
              <a
                class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                href="#"
                data-te-dropdown-item-ref
                >Something else here</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- Right elements -->
    </div>
  </nav>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useAuthneticationStore } from '@/stores/Authentication'
const store = useAuthneticationStore()
const router = useRouter()

const userImgPath = computed(() => {
  let path = ''
  if (store.currentUser?.random) {
    if (store.userImages.length > 0) {
      //check gender
      if (store.currentUser?.gender === 'male') {
        path = `https://res.cloudinary.com/dnynuxbi6/image/upload/v1679632646/men/${store.userImages[0].path}`
      } else if (store.currentUser?.gender === 'trans-male') {
        path = `https://res.cloudinary.com/dnynuxbi6/image/upload/v1679632646/men/${store.userImages[0].path}`
      } else if (store.currentUser?.gender === 'trans-female') {
        path = `https://res.cloudinary.com/dnynuxbi6/image/upload/v1679632646/women/${store.userImages[0].path}`
      } else {
        path = `https://res.cloudinary.com/dnynuxbi6/image/upload/v1679632646/women/${store.userImages[0].path}`
      }
    }
  } else {
    // handle user uploaded images
  }
  return path
})

function editProfile(userId: string | undefined) {
  if (!userId) return
  router.push({ path: `/edit/${userId}/user/profile`, params: { userId: userId } })
}

function goToProfile(userId: string | undefined) {
  if (!userId) return
  router.push({ path: `/view/${userId}/user/profile`, params: { userId: userId } })
}

function goToAaccountSettings() {
  router.push({ path: '', params: {} })
}

function goToUpgradeAccount() {
  router.push({ path: '', params: {} })
}
function goToLogin() { 
   router.push({ path: '/signin'})
}

function logOut(){
  store.setLogOut()
  router.push({ path: '/signin'})
}
</script>
