<template>
    <div>
        <h2 class="text-center">Please complete your profile <span class="required">(All fields are required)</span></h2>
        <form action="">
           <EditProfileGeneral
           @handleSelectBodyType="setBodyTypeInStore"
           @handleSelectHeight="setHeightInStore"
           @handleSelectMaritalStatus="setMaritalStatuses"
           @handleDescribePersonality="setPersonalityInStore"
           @handleSelectHairColor="setHairColorInStore"
           @handleSelectReligion="setReligionInStore"
           @handleSelectHighestEducation="setHighestEducatonInStore"
           @handleSelectEyeColor="setEyeColorInStore"
           @handleChooseDoesSmoke="setDoesSmokeInStore"
           @handleChooseDoesDrink="setDoesDrinkInStore"
           @handleChooseDoesDateInterracially="setDoesDateInterracially"
           @handleDoesHaveChildren="setHasChildrenInStore"
           @handleChooseDoesDoDrugs="setDoesDrugsInStore"
           @handleChooseDoesHavePets="setDoesHavePetsInStore"
           @handleChooseDatingIntent="setDatingIntentInStore"
           @handleEnterProfession="setProfessionInStore"
           />  
           <!-- set  -->
    
                <!-- set  profession -->
             
                     <!-- set second language  -->
                      <!-- set city  -->
                       <!-- set  state -->
                        <!-- set zipcode  -->                   

        </form>
        
    </div>
</template>
<script lang="ts" setup>
import { useProfileStore } from '@/stores/Profile'
import EditProfileGeneral from './EditProfileGeneral.vue'
// import CommonSearch from '@/components/profile/search-forms/CommonSearch.vue'
// import EducationAndDatingPreference from '@/components/profile/search-forms/search-components/EducationAndFamilyStatus.vue'
// import PersonalVices from '@/components/profile/search-forms/search-components/PersonalVices.vue'
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

function setBodyTypeInStore(bodyType: string) {
  store.setBodyType(bodyType)
}

function setHeightInStore(height: number) {
    store.setHeight(height)
}

function setPersonalityInStore(personality: string) { 
    store.setPersonality(personality)
}

function setHairColorInStore(haircolor: string) { 
  store.setHairColor(haircolor)
}

function setEyeColorInStore(eyecolor: string) {
  store.setEyeColor(eyecolor)
}

function setDoesHavePetsInStore(doesHavePets: boolean) { 
  store.setDoesHavePets(doesHavePets)
}

function setDoesDateInterracially(doesDateInterracially: boolean) {
  store.setDoesDateInteracially(doesDateInterracially)
}

function setProfessionInStore(profession: string) { 
  store.setProfession(profession)
}
</script>
