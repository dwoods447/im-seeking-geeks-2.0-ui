<template>
    <div>
        <div>
            <FormSelect
             labelTitle="Do you date interracially?"
             name="interraciallyDating"
             :selectList="doesDateInteraciallyChoices"
              @change="handleSelectDoesDateInterracially"
            >

            </FormSelect>
        </div>
        <div v-if="store.currentUserDatesInteracially">
            <CheckBox labelTitle="Im interested in the following races:" :checkList="ethnicities" @change="handleSelectRaceDatingPrefereneces" />
        </div>
        <div>
            <CheckBox labelTitle="I prefer:" :checkList="genders" @change="handleGenderDatingPreferences" />
        </div>
        <div>
            <CheckBox label-title="I will date someone with marital status of:" :check-list="maritalStatuses" @change="handleSelectMaritalStatus"/>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useProfileStore } from '@/stores/Profile'
import FormSelect from '@/components/general/FormSelect.vue'
import CheckBox from '@/components/general/CheckBox.vue'
const store = useProfileStore()
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
const doesDateInteraciallyChoices = ref([
  {name: 'yes', value: true, key: 'doesDateInteraciallyChoices-yes'},
  {name: 'no', value: false, key: 'doesDateInteraciallyChoices-no'},
])

const genders = reactive([
  { name: 'Male', value: 'male', key: 'gender-1' },
  { name: 'Female', value: 'female', key: 'gender-2' },
  { name: 'Trans Male', value: 'trans-male', key: 'gender-3' },
  { name: 'Trans Female', value: 'trans-female', key: 'gender-4' }
])

const maritalStatuses = reactive([
  { name: 'single', value: 'single', key: 'single-0' },
  { name: 'married', value: 'married - interested in having an affair', key: 'married-1' },
  { name: 'widowed', value: 'widowed', key: 'widowed-2' },
  { name: 'divorced', value: 'divorced', key: 'divorced-3' }
])

function handleSelectDoesDateInterracially(doesDateInterracially: boolean) { 
  store.setDoesDateInteracially(doesDateInterracially)
}

function handleSelectRaceDatingPrefereneces(preferences: string[]) {
    store.setInterracialRaceDatingPreferences(preferences)
}

function handleGenderDatingPreferences(preferences: string[]) {
   store.setGenderDatingPreferences(preferences)
}

function handleSelectMaritalStatus(statuses: string[]) { 
     store.setMaritalDatingPreferences(statuses)
}
</script>