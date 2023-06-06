<template>
    <div>
      <div>
        <img src="">
      </div>
      <div class="dropzone">
        <DropZone :enabled="!uploading" v-on:filesAdded="onFilesAdded" />
        <button @click="uploadFiles">
            Upload
        </button>
      </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import DropZone from './DropZone.vue'
const uploading = ref(false)
const imageFiles = ref<File[]>([])

function uploadFiles() {
    uploading.value = true
    console.log(`Uploading files...`)
}
function onFilesAdded(files: File[]) { 
    imageFiles.value = [...files, ...imageFiles.value]
    uploading.value = true
    console.log(`Adding files...`)
    console.log(JSON.stringify(files))
}

</script>