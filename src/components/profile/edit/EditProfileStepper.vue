<template>
<nav aria-label="Progress">
  <ol role="list" class="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
    <li class="relative md:flex md:flex-1">
      <!-- Completed Step -->
      <a href="#" class="group flex w-full items-center">
        <span class="flex items-center px-6 py-4 text-sm font-medium">
          <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
            <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
            </svg>
          </span>
          <span class="ml-4 text-sm font-medium text-gray-900">Job details</span>
        </span>
      </a>
      <!-- Arrow separator for lg screens and up -->
      <div class="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
        <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
          <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
        </svg>
      </div>
    </li>
    <li class="relative md:flex md:flex-1">
      <!-- Current Step -->
      <a href="#" class="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
        <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
          <span class="text-indigo-600">02</span>
        </span>
        <span class="ml-4 text-sm font-medium text-indigo-600">Application form</span>
      </a>
      <!-- Arrow separator for lg screens and up -->
      <div class="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
        <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
          <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
        </svg>
      </div>
    </li>
    <li class="relative md:flex md:flex-1">
      <!-- Upcoming Step -->
      <a href="#" class="group flex items-center">
        <span class="flex items-center px-6 py-4 text-sm font-medium">
          <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
            <span class="text-gray-500 group-hover:text-gray-900">03</span>
          </span>
          <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">Preview</span>
        </span>
      </a>
    </li>
  </ol>
</nav>
<div>
  <div :class="{'hidden': currentStep !== 1}">
    <UpdateFormProfileIncomplete class="transition transform hover:-translate-y-"></UpdateFormProfileIncomplete>
  </div>
  <div :class="{'hidden': currentStep !== 2}">
    <ImageUpload/>
  </div>
  <div :class="{'hidden': currentStep !== 3}">
    <GeekPreferences/>
  </div>
</div>
<div>
  <button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    <!-- ... -->
  </svg>
  Processing...
</button>
</div>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed, defineAsyncComponent } from "vue"
import type { ComponentPublicInstance } from 'vue'
import { useProfileStore } from '@/stores/Profile'
import {
  Stepper,
  initTE,
} from "tw-elements";
const store = useProfileStore()
import UpdateFormProfileComplete from "@/components/profile/edit/steps/UpdateFormProfileComplete.vue"
import UpdateFormProfileIncomplete from "@/components/profile/edit/steps/UpdateFormProfileIncomplete.vue";
import ImageUpload from "../profile-img/ImageUpload.vue"
const GeekPreferences = defineAsyncComponent(() => import('@/components/profile/edit/steps/GeekPreferences.vue'))
 const mystepper = ref<ComponentPublicInstance>()
const step = ref(1)
const stepOne = ref()
const validated = ref(false)
const  isValid = computed(() => validated.value)
const currentStep = computed(()=> step.value)




const isStepOneValidated = computed(() => { 
  if (currentStep.value === 1 && store.stepOneValidated === true) {
    return true
  } else { 
    return false
  }
})

const isStepTwoValidated = computed(() => { 
  if (currentStep.value === 2 && store.stepOneValidated === true) { 
    return true
  } else { 
    return false
  }
})
const isStepThreeValidated = computed(() => {
  if(currentStep.value === 3 && store.stepTwoValidated === true){
   return true
  } else { 
    return false
  }
})

function changeStep(step: number) { 
  validateStep()
 
}

function goToNextStep() { 
  validateStep()
}

function goToPreviousStep() { 
  step.value--
}


function validatedStep() { 
  validated.value = true
}

function invalidatedStep() { 
  validated.value = false
}

function validateStep() { 
  if (currentStep.value === 1 && !store.stepOneValidated) return 
  if (currentStep.value === 2 && !store.stepTwoValidated) return
  if (currentStep.value === 3 && !store.stepThreeValidated) return

  if (currentStep.value === 1 && store.stepOneValidated) { 
    validatedStep()
    step.value++

  }

   if (currentStep.value === 2 && store.stepTwoValidated) { 
    validatedStep()
    step.value++
  }


  if (currentStep.value === 3 && store.stepThreeValidated) { 
     validatedStep()
     step.value++
  }


  
}


onMounted(() => { 

})
</script>