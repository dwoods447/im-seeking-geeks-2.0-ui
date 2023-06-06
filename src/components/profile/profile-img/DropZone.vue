<template>
    <div class="dropzone"
      @click="openFileSelection"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      @drop="onDrop"
      :class="{hightlight: hightlight, disabled: !enabled}">
        <div>Add files</div>
        
        <div class="flex items-center justify-center">
        <div class="w-96">
            <div class="mb-3">
                <!-- <label
                    for="formFile"
                    class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                    >Default file input example</label
                > -->
                <input @change="onFileChanged" type="file" ref="fileInput" multiple class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" id="formFile">
            </div>
            
            </div>
        </div>
      <div><small>Maximum of 4 files allowed</small></div>
      
    </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useProfileStore } from '@/stores/Profile'
// import type { ComponentPublicInstance } from 'vue'
const store = useProfileStore()
const hightlight = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
let imagePreview = ref()
const props = defineProps<{
    enabled: boolean
}>()
const emit = defineEmits<{
 (e: 'filesAdded', val: any): void
}>()

function onFileChanged(event: any) { 
    let files: FileList = event.target.files
    const result = checkFileArrayLength(files)
   emit('filesAdded', result)
  console.log(`There are ${JSON.stringify((result.length))} files`)
}

function checkFileArrayLength(files: FileList) { 
     let result: File[] = []
     for (var i = 1; i <= files?.length; i++) {
        if (i <= 3) {
              console.log(`pushing item ${i}`)
              result.push(<File>files?.item(i));
              store.addPhoto(<File>files?.item(i))
         }
  }
  return result
}

function openFileSelection() {
    if (!props.enabled) return 
    console.log('Selecting file from dropzone...')
    fileInput.value?.click()
}

function onDragOver(event: DragEvent) { 
    if (!props.enabled) return 
    console.log('Dragging file...')
    event.preventDefault()
    hightlight.value = true
}

function onDragLeave(event: DragEvent) { 
    console.log('Dragging leave...')
    hightlight.value = false
}

function onDrop(event: DragEvent) { 
    if (!props.enabled) return 
    event.preventDefault()
    const files = event.dataTransfer?.files
    let result: File[] = [];
   
}

function readAndPreview(file: File, e: Event){
  // declare ne file reader
  const reader = new FileReader()
   reader.readAsDataURL(file);
   reader.onload = e =>  imagePreview = e?.target?.result;
}
</script>
<style scoped>
.dropzone {
  position: relative;
  border: 3px dashed #42b983;
  color: #42b983;
  font: bold 24px/200px arial;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}

.hightlight {
  background-color: #b3dbc9;
}

.disabled {
  border: 3px dashed grey;
  color: grey;
}

.file-input {
  display: none;
}
</style>