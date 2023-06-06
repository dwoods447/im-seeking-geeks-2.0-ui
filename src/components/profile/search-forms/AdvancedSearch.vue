<template>
  <div class="flex flex-column items-center justify-center">
    <div class="w-[50%]">
      <form action="">
        <div class="mb-2">
          <common-search />
        </div>

        <div class="mb-2">
          <!-- education and dating preference -->
          <h2 class="font-semibold">Education and Family Status :</h2>
          <education-and-dating-preference
            @handleInputDatingIntent="setDatingIntentInStore"
            @handleInputHighestEducation="setHighestEducatonInStore"
            @handleInputMaritalStatuses="setMaritalStatuses"
            @handleInputReligion="setReligionInStore"
            @handleInputDoesHaveChildren="setHasChildrenInStore"
          />
        </div>
        <div class="mb-2">
          <h2 class="font-semibold">Personal Vices:</h2>
          <!-- vices -->
          <personal-vices
            @handleDoesSmoke="setDoesSmokeInStore"
            @handleDoesDrink="setDoesDrinkInStore"
            @handleDoesDrugs="setDoesDrugsInStore"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProfileStore } from '../../../stores/Profile'
import EducationAndDatingPreference from './search-components/EducationAndFamilyStatus.vue'
import CommonSearch from '@/components/profile/search-forms/CommonSearch.vue'
import PersonalVices from './search-components/PersonalVices.vue'
const store = useProfileStore()

function setReligionInStore(religion: string) {
  store.setReligion(religion)
}

function setDatingIntentInStore(datingIntent: string) {
  store.setDatingIntent(datingIntent)
}

function setMaritalStatuses(maritalStatus: string) {
  store.setMaritalStatus(maritalStatus)
}

function setHasChildrenInStore(hasChildren: boolean) {
  store.setHasChildren(hasChildren)
}

function setHighestEducatonInStore(education: string) {
  store.setHighestEducation(education)
}

function setDoesSmokeInStore(choice: boolean) {
  store.setDoesSmoke(choice)
}

function setDoesDrinkInStore(choice: boolean) {
  store.setDoesDrink(choice)
}

function setDoesDrugsInStore(choice: boolean) {
  store.setDoesDoDrugs(choice)
}
</script>
