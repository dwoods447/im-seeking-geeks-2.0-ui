import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { AppUser } from '@/stores/Authentication'
import { useErrorStore } from './Error'
import { useLoadingStore } from '@/stores/Loading'
import ProfileService from '@/services/ProfileService'
import AuthService from '@/services/AuthService'
export const useProfileStore = defineStore('profile', () => {

  const err = useErrorStore()
  const loadingStore = useLoadingStore()
  const recentUsers = ref<AppUser[]>([])
  const user = ref<AppUser>()
  const minAge = ref<number | null>(null)
  const maxAge = ref<number | null>(null)
  const minHeight = ref<number | null>(null)
  const maxHeight = ref<number | null>(null)
  const postalCode = ref<string | null>(null)
  const miles = ref<number | null>(null)
  const photos  = ref<File[]>([])
  const birthdate = ref<string | null>(null)
  const height = ref<number | null>(null)
  const personality = ref<string | null>(null)
  const hairColor = ref<string | null>(null)
  const eyeColor = ref<string | null>(null)
  const doesHavePets = ref<boolean | null>(null)
  const isStepOneValid = ref(false)

  const gender = ref<string | null>(null)
  const datingIntent = ref<string | null>(null)
  const highestEducation = ref<string | null>(null)
  const ethnicity = ref<string | null>(null)
  const usState = ref<string | null>(null)
  const city = ref<string | null>(null)
  const bodyType = ref<string | null>(null)
  const profession = ref<string | null>(null)
  const maritalStatus = ref<string | null>(null)
  const maritalDatingPreferences = ref<string[] | []>([])
  const genderDatingPreferences = ref<string[] | []>([])
  const doesDrink = ref<boolean | null>(null)
  const doesSmoke = ref<boolean | null>(null)
  const doesDoDrugs = ref<boolean | null>(null)
  const doesDateInteracially = ref<boolean | null>(null)
  const doesHaveChildren = ref<boolean | null>(null)

  const raceDatingPreference = ref<string | null>(null)
  const interacialDatingPreferences = ref<string[] | []>([])
  const income = ref<number | null>(null)
  const religion = ref<string | null>(null)
  const isProfileCompleted = ref<boolean>(false)
  const isProfileComplete = computed(() => isProfileCompleted.value)
  const targetUser = computed<AppUser | null>(() => user.value || null)
  const getUserPhotos = computed(() => photos.value)
  const getRecentUsers = computed(() => recentUsers.value)
  const currentUserDatesInteracially = computed(() => doesDateInteracially.value)
  const stepOneValidated = computed(() =>
    bodyType.value !== null
    && hairColor.value !== null
    && eyeColor.value !== null
    && height.value !== null
    && maritalStatus.value !== null
    && religion.value !== null
    && highestEducation.value !== null
    && doesSmoke.value !== null
    && doesDrink.value !== null
    && doesDateInteracially.value !== null
    && doesHaveChildren !== null
    && doesDoDrugs !== null
    && doesHavePets !== null
    && datingIntent !== null
    && profession !== null
    && personality !== null || false)
  
  const stepTwoValidated = computed(() => {
    return photos.value.length > 0 || false
  })
  

  const stepThreeValidated = computed(() => { 
   return doesDateInteracially.value !== null
     && genderDatingPreferences.value.length > 0
     && maritalDatingPreferences.value.length > 0
  })


  
  function setMinAge(age: number) {
    minAge.value = age
  }
  function setMaxAge(age: number) {
    maxAge.value = age
  }

  function setMinHeight(height: number) {
    minHeight.value = height
  }
  function setMaxHeight(height: number) {
    maxHeight.value = height
  }

  function setHeight(heightOption: number) { 
    height.value = heightOption
  }

  function setGender(userGender: string) {
    gender.value = userGender
  }

  function setDatingIntent(intent: string) {
    datingIntent.value = intent
  }

  function setHighestEducation(education: string) {
    highestEducation.value = education
  }

  function setEthnicity(userEthcnity: string) {
    ethnicity.value = userEthcnity
  }

  function setUsState(userHomeState: string) {
    usState.value = userHomeState
  }

  function setCity(userCity: string) {
    city.value = userCity
  }

  function setBodyType(userBodyType: string) {
    bodyType.value = userBodyType
  }


  function setPersonality(personalityVal: string) { 
    personality.value = personalityVal
  }

  function setHairColor(hairColorOption: string) {
    hairColor.value = hairColorOption
  }

  function setEyeColor(eyeColorOption: string){ 
    eyeColor.value = eyeColorOption
  }

  function setDoesHavePets(doesHavePetsOption: boolean){
    doesHavePets.value = doesHavePetsOption
  }

  function setPostalCode(userPostalCode: string) {
    postalCode.value = userPostalCode
  }

  function setMiles(distance: number) {
    miles.value = distance
  }
  function setMaritalStatus(status: string) {
    maritalStatus.value = status
  }
  function setDoesDoDrugs(doesDrugs: boolean) {
    doesDoDrugs.value = doesDrugs
  }
  function setDoesDrink(doesDrugs: boolean) {
    doesDrink.value = doesDrugs
  }
  function setDoesSmoke(smokes: boolean) {
    doesSmoke.value = smokes
  }
  function setDoesDateInteracially(datesInterracialy: boolean) {
    doesDateInteracially.value = datesInterracialy
  }
  function setRaceDatingPreference(datingPreference: string) {
    raceDatingPreference.value = datingPreference
  }
  function setInterracialRaceDatingPreferences(datingPreferences: string[]) {
    interacialDatingPreferences.value = datingPreferences
  }
  function setMaritalDatingPreferences(maritalPreferences: string[]) { 
    maritalDatingPreferences.value = maritalPreferences
  }

  function setGenderDatingPreferences(genderPrefrences: string[]) { 
      genderDatingPreferences.value = genderPrefrences
  }
  function setIncome(userIncome: number) {
    income.value = userIncome
  }

  function setReligion(userReligion: string) {
    religion.value = userReligion
  }

  function setHasChildren(hasChildren: boolean) {
    doesHaveChildren.value = hasChildren
  }

  function setProfileComplete(isComplete: boolean) { 
    isProfileCompleted.value  = isComplete
  }

  function setProfession(professionOption: string) { 
    profession.value = professionOption
  }

  function addPhoto(file: File) { 
    console.log('Addiing photo')
    photos.value.push(file)
  }

  function checkSearchParams(required: any[], optional: any[]) {
    for (let i = 0; i < required.length; i++) {
      if (!required[i].value) {
        err.setErrorMessages('Please enter a value for: ' + required[i].name)
      }
    }

    const optionalParams = []
    for (let j = 0; j < optional.length; j++) {
      if (optional[j].value) {
        optionalParams.push({ name: required[j].name, value: required[j].value })
      }
    }

    return [...required, ...optionalParams]
  }
  async function basicUserFetch() {
    const required = [
      { name: 'gender', value: gender.value },
      { name: 'postalCode', value: postalCode.value },
      { name: 'miles', value: miles.value }
    ]
    const optional = [
      { name: 'usState', value: usState.value },
      { name: 'city', value: city.value },
      { name: 'minAge', value: minAge.value },
      { name: 'maxAge', value: maxAge.value },
      { name: 'minHeight', value: minHeight.value },
      { name: 'maxHeight', value: maxHeight.value },
      { name: 'datingIntent', value: datingIntent.value },
      { name: 'ethnicity', value: ethnicity.value },
      { name: 'bodyType', value: bodyType.value },
      { name: 'maritalStatus', value: maritalStatus.value },
      { name: 'doesDrink', value: doesDrink.value },
      { name: 'doesSmoke', value: doesSmoke.value },
      { name: 'doesDoDrugs', value: doesDoDrugs.value },
      { name: 'doesDateInteracially', value: doesDateInteracially.value },
      { name: 'raceDatingPreference', value: raceDatingPreference.value },
      { name: 'interacialDatingPreferences', value: interacialDatingPreferences.value },
      { name: 'income', value: income.value },
      { name: 'religion', value: religion.value }
    ]
    const searchParams = checkSearchParams(required, optional)
    if (err.getErrors.length > 0) return
    // Submit search params
    return await ProfileService.basicUserSearch(searchParams)
  }
  

  async function advancedUserFetch() {
    // return await ProfileService.advancedUserSearch()
  }

  async function getRandomUsers() {
    loadingStore.setLoadingState(true)
    AuthService.setTokenHeader()
    const results = (await ProfileService.getRandomUsersInAuthUsersPostalCode()).data
    recentUsers.value = results.users
    loadingStore.setLoadingState(false)
  }

  async function editProfile() { 
    console.log(`Editing profile....`)
    const required = [
      { name: 'bodyType', value: bodyType.value },
      { name: 'maritalStatus', value: maritalStatus.value },
      { name: 'height', value: height.value },
      { name: 'hairColor', value: hairColor.value },
      { name: 'eyeColor', value: eyeColor.value },
      { name: 'religion', value: religion.value },
      { name: 'highestEducation', value: highestEducation.value },
      { name: 'doesDrink', value: doesDrink.value },
      { name: 'doesSmoke', value: doesSmoke.value },
      { name: 'doesDoDrugs', value: doesDoDrugs.value },
      { name: 'doesDateInteracially', value: doesDateInteracially.value },
      { name: 'doesDoDrugs', value: doesDoDrugs.value },
      { name: 'doesDoDrugs', value: doesDoDrugs.value },
      { name: 'hasChildren', value: doesHaveChildren.value },

    ]
    const optional: any = []
    const searchParams = checkSearchParams(required, optional)
    if (err.getErrors.length > 0) { 
      console.log('Please fix the following errors:')
      console.log(JSON.stringify(err.getErrors, null, 2))
    } else { 
     // Submit search params
    console.log('Submiting request with the following values')
    console.log(JSON.stringify(required, null, 2))
    }
    
  }

  return {
    minAge,
    maxAge,
    minHeight,
    maxHeight,
    gender,
    height,
    datingIntent,
    highestEducation,
    ethnicity,
    usState,
    city,
    hairColor,
    eyeColor,
    bodyType,
    postalCode,
    miles,
    maritalStatus,
    doesDrink,
    doesSmoke,
    doesDoDrugs,
    doesDateInteracially,
    raceDatingPreference,
    interacialDatingPreferences,
    income,
    religion,
    personality,
    targetUser,
    doesHavePets,
    getRandomUsers,
    addPhoto,
    getUserPhotos,
    getRecentUsers,
    isProfileComplete,
    currentUserDatesInteracially,
    genderDatingPreferences,
    maritalDatingPreferences,
    editProfile,
    setMinAge,
    setMaxAge,
    setMinHeight,
    setMaxHeight,
    doesHaveChildren,
    setHeight,
    setGender,
    setEyeColor,
    setHairColor,
    setProfession,
    setDatingIntent,
    setPersonality,
    setHighestEducation,
    setEthnicity,
    setUsState,
    setCity,
    setDoesHavePets,
    setBodyType,
    setPostalCode,
    setMiles,
    setMaritalStatus,
    setDoesDoDrugs,
    setDoesSmoke,
    setDoesDrink,
    setDoesDateInteracially,
    setRaceDatingPreference,
    setInterracialRaceDatingPreferences,
    setMaritalDatingPreferences,
    setGenderDatingPreferences,
    setIncome,
    setReligion,
    setHasChildren,
    setProfileComplete,
    basicUserFetch,
    advancedUserFetch,
    stepOneValidated,
    stepTwoValidated,
    stepThreeValidated
  }
})
