<script setup>
import { ref } from 'vue'

const file = ref(null)

const handleFileUpload = e => {
  const uploadedFile = e.target.files[0]
  if (uploadedFile) {
    file.value = Object.assign(uploadedFile, {
      preview: URL.createObjectURL(uploadedFile), // Preview image
    })
  }
}

const removeFile = () => {
  file.value = null
}
</script>

<template>
  <VCard outlined>
    <VCardTitle class="text-h6">
      Product Image
    </VCardTitle>
    <VCardText class="d-flex flex-column align-center">
      <VFileInput
        accept="image/*"
        label="Add Media from URL"
        prepend-icon="ri-upload"
        hide-details
        @change="handleFileUpload"
      />
      
      <div
        v-if="file"
        class="mt-4 d-flex flex-column align-center"
      >
        <VImg
          :src="file.preview"
          class="rounded"
          max-width="500px"
        />
        <p class="text-center mt-2">
          {{ file.name }}<br> {{ (file.size / 1024).toFixed(3) }} KB
        </p>
        <VBtn
          text
          color="error"
          @click="removeFile"
        >
          Remove File
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>

<style scoped>
.v-file-input {
  border: 2px dashed #e0e0e0;
  padding: 20px;
 
}



.v-img {
  border: 1px solid #ccc;
  padding: 4px;
}
</style>
