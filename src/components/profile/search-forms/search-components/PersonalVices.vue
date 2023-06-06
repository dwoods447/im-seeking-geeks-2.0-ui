<template>
  <div>
    <check-box
      labelTitle="Smokes"
      name="smoke-option"
      :checkList="doesSmokeChoices"
      @change="handleDoesSmokeChoices"
    />
    <check-box
      labelTitle="Drinks"
      name="drink-option"
      :checkList="doesDrinkChoices"
      @change="handleDoesDrinkChoices"
    />
    <check-box
      labelTitle="Does Drugs"
      name="drugs-option"
      :checkList="doesDrugsChoices"
      @change="handleDoesDrugsChoices"
    />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import CheckBox from '@/components/general/CheckBox.vue'

const emit = defineEmits<{
  (e: 'handleDoesSmoke', smokeChoice: boolean): void
  (e: 'handleDoesDrink', drinkChoice: boolean): void
  (e: 'handleDoesDrugs', drugChoice: boolean): void
}>()

const doesSmokeChoices = reactive([
  { name: 'yes', value: true, key: 'doesSmokeChoices-yes' },
  { name: 'no', value: false, key: 'doesSmokeChoices-no' }
])
const doesDrinkChoices = reactive([
  { name: 'yes', value: true, key: 'doesDrinkChoices-yes' },
  { name: 'no', value: false, key: 'doesDrinkChoices-no' }
])

const doesDrugsChoices = reactive([
  { name: 'yes', value: true, key: 'doesDrugsChoices-yes' },
  { name: 'no', value: false, key: 'doesDrugsChoices-no' }
])

function handleDoesSmokeChoices(choice: boolean) {
  emit('handleDoesSmoke', choice)
}

function handleDoesDrinkChoices(choice: boolean) {
  emit('handleDoesDrink', choice)
}

function handleDoesDrugsChoices(choice: boolean) {
  emit('handleDoesDrugs', choice)
}
</script>
