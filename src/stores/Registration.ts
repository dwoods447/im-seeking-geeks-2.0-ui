import { ref, watch } from 'vue'
import _ from 'lodash'
import { defineStore } from 'pinia'
import AuthService from '@/services/AuthService'
import { useErrorStore } from '@/stores/Error'
export const useRegistrationStore = defineStore('registration', () => {
  const currentUserGender = ref<string | null>(null)
  const currentUserSeeking = ref<string | null>(null)
  const email = ref<string | null>(null)
  const confirmPassword = ref('')
  const password = ref<string | null>(null)
  const username = ref<string | null>(null)
  const ethnicity = ref<string | null>(null)
  const birthdate = ref<string | null>(null)
  const err = useErrorStore()

  async function registerNewUser() {
    if (!username.value) err.setErrorMessages(`You must enter a value for username!`)
    if (!password.value) err.setErrorMessages(`You must enter a value for password!`)
    if (confirmPassword.value !== password.value)
      err.setErrorMessages(`Your password doesn't match!`)
    if (!email.value) err.setErrorMessages('You must enter an email!')
    if (err.getErrors.length > 0) {
      console.log(`There are errors aborting!`)
      err.clearErrorMessages()
      return
    }
    const userData = {
      gender: currentUserGender.value,
      email: email.value,
      password: password.value,
      username:  username.value,
      birthdate: birthdate.value,
      ethnicity: ethnicity.value
    }
    const sentRegistration = (await AuthService.signUp(userData)).data
    if (sentRegistration.statusCode === 200) {
      return sentRegistration
    } else { 
       err.setErrorMessages(`Something unexpected went wrong. Please try again later.`)
    }
     
  }
  async function checkForExistingUsername(username: string) {
    const uniqueUsername = await AuthService.checkUserNameUnique(username)
    if (uniqueUsername.data.usernameExists) {
      err.setErrorMessages(`This username is already taken!`)
    }
    err.clearErrorMessages()
    email.value = null
  }
  async function checkForExistingEmail(email: string) {
    const uniqueEmail = await AuthService.checkEmailUnique(email)
    if (uniqueEmail.data.usernameExists) {
      err.setErrorMessages(`This email is already taken!`)
    }
    err.clearErrorMessages()
    username.value = null
  }

  watch(
    username,
    _.debounce(async (newUsername: string) => {
      if (newUsername) {
        try {
          return await checkForExistingUsername(newUsername)
        } catch (error) {
          console.log(error)
          err.setErrorMessages(`An unexpected error occured`)
        }
      }
    }, 4000) as any
  )

  watch(
    email,
    _.debounce(async (newEmail: string) => {
      if (newEmail) {
        try {
          return await checkForExistingUsername(newEmail)
        } catch (error) {
          console.log(error)
          err.setErrorMessages(`An unexpected error occured`)
        }
      }
    }, 4000) as any
  )

  return {
    currentUserGender,
    currentUserSeeking,
    registerNewUser,
    checkForExistingEmail,
    checkForExistingUsername,
    email,
    username,
    password,
    confirmPassword,
    ethnicity,
    birthdate
  }
})
