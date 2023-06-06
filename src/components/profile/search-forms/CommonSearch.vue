<template>
  <div>
    <div class="mb-2" v-if="showLocationSection">
      <h2 class="font-semibold">Location:</h2>
      <user-location
        @handleInputOfPostalCode="setPostalCodeInStore"
        @handleInputOfCity="setCityInStore"
        @handleInputOfMiles="setMilesInStore"
      />
    </div>
    <div class="mb-2" v-if="showPersonalApperance">
      <h2 class="font-semibold">Personal Appearance:</h2>
      <personal-appearance
        @handleMinSelectAge="setMinAgeInStore"
        @handleMaxSelectAge="setMaxAgeInStore"
        @handleMinSelectHeight="setMinHeightInStore"
        @handleMaxSelectHeight="setMaxHeightInStore"
        @handleSelectBodyType="setBodyTypeInStore"
      />
    </div>
    <div class="mb-2" v-if="showGenderAndEthnicPreference">
      <h2 class="font-semibold mb-2">Gender and Ethnic Preference:</h2>
      <gender-and-ethnic-background
        @handleSeekingGender="setSeekingGenderInStore"
        @handleSeekingEthnicity="setSeekingEthnicityInStore"
        @handlePrefersToDateEthnicity="setPrefersToDateEthnicityInStore"
        @handleDoesDateInterracially="setDoesDateInterraciallyInStore"
        @handleInterracialDatingPreferences="setInterracialDatingPreferencesInStore"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import PersonalAppearance from './search-components/PersonalAppearance.vue'
import UserLocation from './search-components/UserLocation.vue'
import GenderAndEthnicBackground from './search-components/GenderAndEthnicPreferences.vue'
import { useProfileStore } from '../../../stores/Profile'


export interface Props {
  showLocationSection?: boolean
  showPersonalApperance?: boolean,
  showGenderAndEthnicPreference?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showLocationSection: true,
  showPersonalApperance: true,
  showGenderAndEthnicPreference: true
})
const store = useProfileStore()

function setMinAgeInStore(age: number) {
  store.setMinAge(age)
}

function setMaxAgeInStore(age: number) {
  store.setMaxAge(age)
}

function setMinHeightInStore(height: number) {
  store.setMinHeight(height)
}
function setMaxHeightInStore(height: number) {
  store.setMaxHeight(height)
}

function setBodyTypeInStore(bodyType: string) {
  store.setBodyType(bodyType)
}

function setSeekingGenderInStore(gender: string) {
  store.setGender(gender)
}

function setSeekingEthnicityInStore(ethnicity: string) {
  store.setEthnicity(ethnicity)
}

function setDoesDateInterraciallyInStore(doesDateInteracially: boolean) {
  store.setDoesDateInteracially(doesDateInteracially)
}

function setPrefersToDateEthnicityInStore(ethnicity: string) {
  store.setRaceDatingPreference(ethnicity)
}

function setInterracialDatingPreferencesInStore(preferences: string[]) {
  store.setInterracialRaceDatingPreferences(preferences)
}

function setPostalCodeInStore(postalCode: string) {
  store.setPostalCode(postalCode)
}

function setCityInStore(city: string) {
  store.setCity(city)
}

function setMilesInStore(miles: number) {
  store.setMiles(miles)
}
</script>
