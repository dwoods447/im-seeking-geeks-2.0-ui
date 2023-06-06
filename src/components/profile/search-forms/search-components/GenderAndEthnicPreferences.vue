<template>
  <div class="flex mb-2">
    <div class="w-1/2">
      <form-select
        labelTitle="Who's gender is"
        name="seekingGender"
        :selectList="genders"
        @change="handleSeekingGender"
      ></form-select>
    </div>
    <div class="w-1/2">
      <form-select
        labelTitle="Someone whose ethnicity is"
        name="seekingEthnicities"
        :selectList="ethnicities"
        @change="handleSeekingEthnicity"
      ></form-select>
    </div>
  </div>
  <div class="flex mb-2">
    <div class="w-1/2">
      <form-select
        labelTitle="Someone who prefers to date"
        name="prefersToDateEthnicities"
        :selectList="ethnicities"
        @change="handlePrefersToDateEthnicity"
      ></form-select>
    </div>
    <div class="w-1/2">
      <form-select
        labelTitle="Who dates interracially"
        name="doesDateInteracially"
        :selectList="doesDateInteraciallyChoices"
        @change="handleDoesDateInterracially"
      ></form-select>
    </div>
  </div>
  <div class="flex mb-2">
    <div class="w-1/2">
      <label for="" class="ml-2">Interracial Dating Prefrences</label>
      <check-box
        :labelTitle="'Check All that Apply'"
        :checkList="ethnicities"
        @change="handleInterracialDatingPreferences"
      ></check-box>
    </div>
    <div class="w-1/2"></div>
  </div>

  <!-- user supplied -->
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import CheckBox from '@/components/general/CheckBox.vue'
import FormSelect from '@/components/general/FormSelect.vue'
const emit = defineEmits<{
  (e: 'handleSeekingGender', gender: string): void
  (e: 'handleSeekingEthnicity', ethnicity: string): void
  (e: 'handlePrefersToDateEthnicity', ethnicity: string): void
  (e: 'handleDoesDateInterracially', preference: boolean): void
  (e: 'handleInterracialDatingPreferences', preferences: string[]): void
}>()
const ethnicities = reactive([
  { name: 'Black/African American', value: 'Black/African American' },
  { name: 'White/Caucasian', value: 'White/Caucasian' },
  { name: 'Hispanic', value: 'Hispanic' },
  { name: 'Indian', value: 'Indian' },
  { name: 'Middle Eastern', value: 'Middle Eastern' },
  { name: 'Native American', value: 'Native American' },
  { name: 'Asian', value: 'Asian' },
  { name: 'Mixed Race', value: 'Mixed Race' },
  { name: 'Other', value: 'Other' }
])
const genders = reactive([
  { name: 'Male', value: 'male', key: 'gender-1' },
  { name: 'Female', value: 'female', key: 'gender-2' },
  { name: 'Trans Male', value: 'trans-male', key: 'gender-3' },
  { name: 'Trans Female', value: 'trans-female', key: 'gender-4' }
])

const doesDateInteraciallyChoices = reactive([
  { name: 'yes', value: true, key: 'doesDateInteraciallyChoices-yes' },
  { name: 'no', value: false, key: 'doesDateInteraciallyChoices-no' }
])

function handleSeekingGender(gender: string) {
  emit('handleSeekingGender', gender)
}
function handleSeekingEthnicity(ethnicity: string) {
  emit('handleSeekingEthnicity', ethnicity)
}
function handlePrefersToDateEthnicity(ethnicity: string) {
  emit('handlePrefersToDateEthnicity', ethnicity)
}
function handleDoesDateInterracially(answer: boolean) {
  emit('handleDoesDateInterracially', answer)
}
function handleInterracialDatingPreferences(preferences: string[]) {
  emit('handleInterracialDatingPreferences', preferences)
}
</script>
