<template>
  <div>
    <div class="flex">
      <div class="w-1/2">
        <text-input
          labelTitle="Postal Code"
          :show-add-on="false"
          id="postalCode"
          name="postalCode"
          inputType="text"
          @change="handleInputOfPostalCode"
        />
      </div>
      <div class="w-1/2">
        <text-input
          labelTitle="City"
          :show-add-on="false"
          id="city"
          name="city"
          inputType="text"
          @change="handleInputOfCity"
        />
      </div>
    </div>
    <div class="flex">
      <div class="w-1/2">
        <form-select
          labelTitle="Miles"
          name="miles"
          :selectList="miles"
          @change="handleInputOfMiles"
        >
        </form-select>
      </div>
      <div class="w-1/2"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import TextInput from '@/components/general/TextInput.vue'
import FormSelect from '@/components/general/FormSelect.vue'

const emit = defineEmits<{
  (e: 'handleInputOfPostalCode', postalCode: string): void
  (e: 'handleInputOfCity', city: string): void
  (e: 'handleInputOfMiles', miles: number): void
}>()

const miles = reactive([
  { name: '5 miles', value: 5 },
  { name: '8 miles', value: 8 },
  { name: '10 miles', value: 10 },
  { name: '15 miles', value: 15 },
  { name: '25 miles', value: 25 },
  { name: '35 miles', value: 35 },
  { name: '50 miles', value: 50 },
  { name: '75 miles', value: 75 },
  { name: '100 miles', value: 100 },
  { name: '150 miles', value: 150 },
  { name: '200 miles', value: 200 }
])

function handleInputOfPostalCode(postalCode: string) {
  emit('handleInputOfPostalCode', postalCode)
}

function handleInputOfCity(city: string) {
  emit('handleInputOfCity', city)
}

function handleInputOfMiles(miles: number) {
  emit('handleInputOfMiles', miles)
}
</script>
