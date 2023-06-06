<template>
  <div class="mb-3 mt-3 mx-3">
    <label>{{ labelTitle }}</label>
    <div>
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <span
          v-if="showAddOn"
          class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:bg-zinc-800 dark:text-neutral-200 dark:placeholder:text-neutral-200"
          :id="props.addOnId"
          >{{ props.addOnVal }}</span
        >
        <input
          :id="props.name"
          :name="props.name"
          :type="props.inputType"
          :placeholder="props.inputPlaceHolder"
          :aria-label="props.inputPlaceHolder"
          :aria-describedby="props.addOnId"
          v-model="inputVal"
          class="border-2 border-gray-500 relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition ease-in-out focus:z-[3] focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
          @change="handleInputEvent"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

export interface InputProps {
  id: string
  name: string
  inputType: string
  inputPlaceHolder?: string
  addOnVal?: string
  showAddOn: boolean
  addOnId?: string
  labelTitle?: string
}
const props = withDefaults(defineProps<InputProps>(), {
  showAddOn: false
})
const emit = defineEmits<{
  (e: 'change', val: any): void
}>()
const inputVal = ref<string | number | null>(null)

function handleInputEvent() {
  emit('change', inputVal.value)
}
</script>
