<template>
  <div class="flex ml-2">
    <div class="m-1 mb-3 xl:w-96">
      <label
        :for="props.name"
        v-if="props.labelTitle"
        class="py-3 block text-sm font-medium mb-2 dark:text-white"
        >{{ props.labelTitle }}</label
      >
      <select
        :name="props.name"
        :id="props.name"
        v-model="selected"
        @change="handleSelect"
        class="py-3 px-4 block w-full border-2 border-gray-500"
      >
        <option disabled value="">Please select one</option>
        <option :value="item.value" v-for="(item, i) in props.selectList" :key="name + '-' + i">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const selected = ref('')
const props = defineProps<{
  labelTitle?: string
  name: string
  selectList?: any[]
}>()
const emit = defineEmits<{
  (e: 'change', val: any): void
}>()
function handleSelect() {
  emit('change', selected.value)
}
</script>
