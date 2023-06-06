<template>
  <div>
    <div>
      <div class="flex">
        <div class="w-1/2">
          <form-select
            labelTitle="Dating Intent"
            name="datingIntent"
            :selectList="datingIntent"
            @change="handleInputDatingIntent"
          ></form-select>
        </div>
        <div class="w-1/2">
          <form-select
            labelTitle="Highest Education"
            name="educations"
            :selectList="educations"
            @change="handleInputHighestEducation"
          ></form-select>
        </div>
      </div>
      <div class="flex">
        <div class="w-1/2">
          <form-select
            labelTitle="Has a Martial Status of"
            name="maritalStatuses"
            :selectList="maritalStatuses"
            @change="handleInputMaritalStatuses"
          ></form-select>
        </div>
        <div class="w-1/2">
          <form-select
            labelTitle="Has a religion of"
            name="religion"
            :selectList="religions"
            @change="handleInputReligion"
          ></form-select>
        </div>
      </div>
      <div class="flex">
        <div class="w-1/2">
          <form-select
            labelTitle="Someone who has children"
            name="doesHaveChildren"
            :selectList="doesHaveChildrenChoices"
            @change="handleInputDoesHaveChildren"
          ></form-select>
        </div>
        <div class="w-1/2"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import FormSelect from '@/components/general/FormSelect.vue'
// import CheckBox from '@/components/general/CheckBox.vue'
// const props = defineProps([''])
const emit = defineEmits<{
  (e: 'handleInputDatingIntent', education: string): void
  (e: 'handleInputHighestEducation', education: string): void
  (e: 'handleInputMaritalStatuses', maritalStatus: string): void
  (e: 'handleInputDatingIntent', datingIntent: string): void
  (e: 'handleInputReligion', religion: string): void
  (e: 'handleInputDoesHaveChildren', hasChildren: boolean): void
}>()

const datingIntent = reactive([
  {
    name: "I'm looking for Casual dating/No Commitment",
    value: "I'm looking for Casual dating/No Commitment"
  },
  { name: 'I want to date but nothing serious', value: 'I want to date but nothing serious' },
  {
    name: 'I am putting in serious effort to find someone',
    value: 'I am putting in serious effort to find someone'
  },
  {
    name: 'I am serious and I want to find someone to marry',
    value: 'I am serious and I want to find someone to marry'
  }
])

const educations = reactive([
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
const doesHaveChildrenChoices = reactive([
  { name: 'yes', value: true, key: 'doesHaveChildrenChoices-yes' },
  { name: 'no', value: false, key: 'doesHaveChildrenChoices-no' }
])

const religions = reactive([
  { name: 'Chrisitan - other', value: 'chrisitan - other', key: '' },
  { name: 'New age', value: 'new age', key: '' },
  { name: 'Muslim', value: 'muslim', key: '' },
  { name: 'Jewish', value: 'jewish', key: '' },
  { name: 'Catholic', value: 'catholic', key: '' },
  { name: 'Buddhist', value: 'buddhist', key: '' },
  { name: 'Hindu', value: 'hindu', key: '' },
  { name: 'Anglican', value: 'anglican', key: '' },
  { name: 'Sikh', value: 'sikh', key: '' },
  { name: 'Methodist', value: 'methodist', key: '' },
  { name: 'Baptist', value: 'baptist', key: '' },
  { name: 'Lutheran', value: 'lutheran', key: '' },
  { name: 'Presbyterian', value: 'presbyterian', key: '' },
  { name: 'Other', value: 'other', key: '' }
])
const maritalStatuses = reactive([
  { name: 'single', value: 'single', key: 'single-0' },
  { name: 'married', value: 'married - interested in having an affair', key: 'married-1' },
  { name: 'widowed', value: 'widowed', key: 'widowed-2' },
  { name: 'divorced', value: 'divorced', key: 'divorced-3' }
])

function handleInputDatingIntent(intent: string) {
  emit('handleInputDatingIntent', intent)
}

function handleInputHighestEducation(education: string) {
  emit('handleInputHighestEducation', education)
}

function handleInputMaritalStatuses(maritalStatus: string) {
  emit('handleInputMaritalStatuses', maritalStatus)
}

function handleInputReligion(religion: string) {
  emit('handleInputReligion', religion)
}

function handleInputDoesHaveChildren(hasChildren: boolean) {
  emit('handleInputDoesHaveChildren', hasChildren)
}
</script>
