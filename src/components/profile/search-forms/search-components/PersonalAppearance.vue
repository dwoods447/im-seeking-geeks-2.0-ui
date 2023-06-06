<template>
  <div>
    <div class="flex">
      <div class="w-1/2">
        <form-select
          labelTitle="Min Age"
          name="minAge"
          :selectList="rangeOfAges"
          @change="handleMinSelectAge"
        ></form-select>
      </div>
      <div class="w-1/2">
        <form-select
          labelTitle="Max Age"
          name="maxAge"
          :selectList="rangeOfAges"
          @change="handleMaxSelectAge"
        ></form-select>
      </div>
    </div>
    <div class="flex">
      <div class="w-1/2">
        <form-select
          labelTitle="Min Height"
          name="minHeight"
          :selectList="rangeOfHeights"
          @change="handleMinSelectHeight"
        ></form-select>
      </div>
      <div class="w-1/2">
        <form-select
          labelTitle="Max Height"
          name="maxHeight"
          :selectList="rangeOfHeights"
          @change="handleMaxSelectHeight"
        ></form-select>
      </div>
    </div>
    <div class="flex">
      <div class="w-1/2">
        <form-select
          labelTitle="Body Type"
          name="bodyType"
          :selectList="bodyTypes"
          @change="handleSelectBodyType"
        ></form-select>
      </div>
      <div class="w-1/2"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import FormSelect from '@/components/general/FormSelect.vue'
const emit = defineEmits<{
  (e: 'handleMinSelectAge', minAge: number): void
  (e: 'handleMaxSelectAge', maxAge: number): void
  (e: 'handleMinSelectHeight', minHeight: number): void
  (e: 'handleMaxSelectHeight', maxHeight: number): void
  (e: 'handleSelectBodyType', bodyType: string): void
}>()

const rangeOfAges = computed(() => {
  let ages = []
  for (let i = 18; i <= 99; i++) {
    ages.push({ name: i, value: i })
  }
  return ages
})

const bodyTypes = ref([
  { name: 'Prefer Not To Say', value: 'Prefer Not To Say' },
  { name: 'Thin', value: 'Thin' },
  { name: 'Athletic', value: 'Athletic' },
  { name: 'Average', value: 'Average' },
  { name: 'A Few Extra Pounds', value: 'A Few Extra Pounds' }
])

const rangeOfHeights = ref([
  { name: "4'5", value: 53 },
  { name: "4'6", value: 54 },
  { name: "4'7", value: 55 },
  { name: "4'8", value: 56 },
  { name: "4'9", value: 57 },
  { name: "4'10", value: 58 },
  { name: "4'11", value: 59 },
  { name: "5'0", value: 60 },
  { name: "5'1", value: 61 },
  { name: "5'2", value: 62 },
  { name: "5'3", value: 63 },
  { name: "5'4", value: 64 },
  { name: "5'5", value: 65 },
  { name: "5'6", value: 66 },
  { name: "5'7", value: 67 },
  { name: "5'8", value: 68 },
  { name: "5'9", value: 69 },
  { name: "5'10", value: 70 },
  { name: "5'11", value: 71 },
  { name: "6'0", value: 72 },
  { name: "6'1", value: 73 },
  { name: "6'2", value: 74 },
  { name: "6'3", value: 75 },
  { name: "6'4", value: 76 },
  { name: "6'5", value: 77 },
  { name: "6'6", value: 78 },
  { name: "6'7", value: 79 },
  { name: "6'8", value: 80 },
  { name: "6'9", value: 81 },
  { name: '7,0', value: 82 },
  { name: '7,1', value: 83 }
])

function handleMinSelectAge(minAge: number) {
  emit('handleMinSelectAge', minAge)
}
function handleMaxSelectAge(maxAge: number) {
  emit('handleMaxSelectAge', maxAge)
}

function handleMinSelectHeight(minHeight: number) {
  emit('handleMinSelectHeight', minHeight)
}

function handleMaxSelectHeight(maxHeight: number) {
  emit('handleMaxSelectHeight', maxHeight)
}

function handleSelectBodyType(bodyType: string) {
  emit('handleSelectBodyType', bodyType)
}
</script>
