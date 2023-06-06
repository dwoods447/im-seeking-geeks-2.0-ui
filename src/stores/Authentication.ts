import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useErrorStore } from './Error'
import { useLoadingStore } from './Loading'
import AuthService from '@/services/AuthService'
import { useRouter, useRoute } from 'vue-router'

export interface AppUser {
  _id: string
  random?: string
  username: string
  email: string
  password?: string
  gender: string
  birthdate: Date
  age: number
  ethnicity: string
  seekingGenders: {
    genders: []
  }
  onlineStatus: boolean
  height: number
  description: string
  postalCode: string
  city: string
  state: string
  maritalStatus: string
  income: number
  datingIntent: ''
  relationshipTypeSeeking: string
  doesDateInteracially: boolean
  interacialDatingPreferences: {
    races: []
  }
  userMatches: {
    matches: []
  }
  blockedUsers: {
    users: []
  }
  favorites: {
    users: []
  }
  profileViews: {
    views: []
  }
  images: {
    imagePaths?: []
  }
}

export const useAuthneticationStore = defineStore('authentication', () => {

  let timer = ref()
  const currentUser = ref<AppUser | null>(null)
  const token = ref<string | null>(null)
  // Getters
 
  const getCurrentUser = computed(() => currentUser.value)
  const getToken = computed(() => token.value)
  const isLoggedIn = computed<boolean>(() => getToken.value && getCurrentUser.value  ? true : false)
  const userImages = computed<Array<{ path: string; date: Date }>>(
    () => currentUser.value?.images?.imagePaths || []
  )
  

  // Error Store
  const err = useErrorStore()
  // For forgot password
  const email = ref('')
  // For password reset
  const newPassword = ref('')
  const confirmPassword = ref('')
  const router = useRouter()
  // const route = useRoute()

  async function authenticateUser<T>(authData: T) {
    try {
      const authResp = await AuthService.signIn(authData)
      if (authResp.data.token) {
              // stringify authValues and store in localStorage
          localStorage.setItem('token', JSON.stringify(authResp.data.token))
          localStorage.setItem('user', JSON.stringify(authResp.data.user))
          token.value = authResp.data.token
          currentUser.value = authResp.data.user
          // set logout timer action
          const expiresIn = Number.parseInt(authResp.data.tokenExpiresIn) * 1000
          console.log(`expiresIn ${expiresIn} tokenExp ${authResp.data.tokenExpiresIn}`)
          const expirationDate = new Date().getTime() + expiresIn
          // set tokenExp in localStorage
          console.log('You are authenticated')
          localStorage.setItem('tokenExpiration', JSON.stringify(expirationDate))
          // check for profilecompletion
          setLogOutTimer(expiresIn)
  
      } else { 
        err.setErrorMessages('The username or password is incorrect!')
        err.clearErrorMessages()
        return
      }
    } catch (error) {
      // if there is no token set error message
      console.log(error)
      err.setErrorMessages(`The username or password is incorrect!`)
      err.clearErrorMessages()
    }
  }

  async function setLogOutTimer(duration: number) {
    setTimeout(async () => {
      console.log(`Timer with ${duration} expired`)
     }, duration)
   
  }

  function checkLogin() {
    const storeToken = localStorage.getItem('token')
    const storageUser = localStorage.getItem('user')
    const storageTokenExpr = localStorage.getItem('tokenExpiration')
    if (storageUser && storeToken && storageTokenExpr) {
      const expiresIn = Number.parseInt(storageTokenExpr) - new Date().getTime()
      if (expiresIn <= 0) { 
         console.log('Token expired') 
         setLogOut()
      } else {
      token.value = storeToken
      currentUser.value = JSON.parse(storageUser)
      }

    }
  }
  async function forgotPassword() {
    if (!email.value) {
      err.setErrorMessages(`Something unexpected went wrong. Please try again later.`)
      return
    }
    return await AuthService.forgotPassword({ email: email.value })
  }
  async function updatePassword() {
    if (newPassword.value !== confirmPassword.value) {
      err.setErrorMessages(`Your password must match.`)
      return
    }
    return await AuthService.updatePassword({ password: newPassword.value })
  }
  function setLogOut() {
    token.value = null
    currentUser.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiration')
    localStorage.removeItem('user')
    console.log('Logged Out')
    router.push({name: 'signin'})
  }
  return {
    currentUser,
    token,
    getToken,
    email,
    authenticateUser,
    setLogOut,
    checkLogin,
    isLoggedIn,
    forgotPassword,
    newPassword,
    confirmPassword,
    updatePassword,
    getCurrentUser,
    userImages
  }
})
