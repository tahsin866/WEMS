<script setup>
import { ref } from 'vue'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}



// Define references and reactive variables
const fileInput = ref(null)
const selectedFiles = ref([])

// Method to trigger the file input click
const triggerFileInput = () => {
  fileInput.value.click()
}

// Method to handle file change when a file is selected
const handleFileChange = event => {
  const files = event.target.files

  selectedFiles.value = []

  // Loop through the selected files and add to the array
  for (let i = 0; i < files.length; i++) {
    const file = files[i]

    const fileData = {
      name: file.name,
      size: file.size,
      type: file.type,
      preview: URL.createObjectURL(file), // Create preview for image files
    }

    selectedFiles.value.push(fileData)
  }
}

// Method to remove a file by index
const removeFile = index => {
  selectedFiles.value.splice(index, 1)
}

// Placeholder methods for drag and drop events
const handleDragOver = event => {
  // Optional logic to handle drag over event
}

const handleDrop = event => {
  // Optional logic to handle drop event
}
</script>

<template>
  <VCard>
    <VCardTitle style="background-color: #243b55; color: white;">
      <h5 class="text-white">
        ব্যক্তিগত তথ্য
      </h5>
    </VCardTitle>
    <VCardText>
      <!-- 👉 stepper content -->
      <VForm class="mt-5">
        <VRow>
          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.username"
              placeholder="নাম (বাংলা)"
              label="নাম (বাংলা)"
              density="compact"
            />
          </VCol>

          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.email"
              placeholder="নাম (ইংরেজি)"
              label="নাম (ইংরেজি)"
              density="compact"
            />
          </VCol>

          
          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.email"
              placeholder="নাম (আরবি)"
              label="নাম (আরবি)"
              density="compact"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12" />

          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.username"
              placeholder="মাতার নাম (বাংলা)"
              label="মাতার নাম (বাংলা)"
              density="compact"
            />
          </VCol>

          <VCol
            cols="12"
            md="4"
          >
            <VTextField
               
              placeholder="মাতার নাম (ইংরেজি)"
              label="মাতার নাম (ইংরেজি)"
              density="compact"
            />
          </VCol>

          
          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.email"
              placeholder="মাতার নাম (আরবি)"
              label="মাতার নাম (আরবি)"
              density="compact"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12" />

          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.username"
              placeholder="পিতার নাম (বাংলা)"
              label="পিতার নাম (বাংলা)"
              density="compact"
            />
          </VCol>

          <VCol
            cols="12"
            md="4"
            density="compact"
          >
            <VTextField
              v-model="formData.email"
              placeholder="পিতার নাম (ইংরেজি)"
              label="পিতার নাম (ইংরেজি)"
              density="compact"
            />
          </VCol>

          
          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.email"
              placeholder="পিতার নাম (আরবি)"
              label="পিতার নাম (আরবি)"
              density="compact"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12" />

          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="selectedDate"
              label="Date"
              type="date"
              outlined
              class="form-label"
              density="compact"
            />
          </VCol>

          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.email"
              placeholder="জন্ম-নিবন্ধন নম্বর"
              label="জন্ম-নিবন্ধন নম্বর"
              density="compact"
            />
          </VCol>

          
          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.email"
              placeholder="জাতীয় পরিচয়পত্র নম্বর"
              label="জাতীয় পরিচয়পত্র নম্বর"
              density="compact"
            />
          </VCol>
        </VRow>
        <VRow class="mb-5">
          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.email"
              placeholder="অভিবাবকের নাম"
              label="অভিবাবকের নাম"
              density="compact"
            />
          </VCol>
          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.email"
              placeholder="অভিবাবকের মোবাইল নম্বর"
              label="অভিবাবকের মোবাইল নম্বর"
              density="compact"
            />
          </VCol>
        </VRow>
      </vform>
    </vcardtext>
  </VCard>
  <VCard class="mt-5">
    <VCardTitle style="background-color: #243b55; color: white;">
      <h5 class="text-white">
        প্রয়োজনীয় তথ্য
      </h5>
    </VCardTitle>
    <VCardText>
      <!-- 👉 stepper content -->
      <VForm class="mt-5">
        <VRow class="mt-10">
          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              label="নিয়মিত"
              placeholder="মোট ছাত্র সংখ্যা"
              aria-label="Disabled input example"
              disabled
              dense
              class="mb-3"
              density="compact"
            />
          </VCol>
          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              label="বোর্ড"
              placeholder="মোট ছাত্র সংখ্যা"
              aria-label="Disabled input example"
              disabled
              dense
              class="mb-3"
              density="compact"
            />
          </VCol>
        </vrow>
        <VRow>
          <VCol
            cols="12"
            md="2"
          >
            <h4 class="text-warning">
              নির্বাচনি কিতাব সিলেক্ট করুন
            </h4>
          </VCol>
          <VCol
            cols="12"
            md="2"
          >
            <VCheckbox label="হিদায়া ১ম খন্ড" />
          </VCol>
          <VCol
            cols="12"
            md="2"
            class="mb-5"
          >
            <VCheckbox label="হিদায়া ২ম খন্ড" />
          </VCol>
        </VRow>
      </vform>
    </vcardtext>
  </VCard>
  <VCard class="mt-5">
    <VCardTitle style="background-color: #243b55; color: white;">
      <h5 class="text-white">
        ঠিকানা
      </h5>
    </VCardTitle>
    <VCardText>
      <!-- 👉 stepper content -->
      <VForm class="mt-5">
        <VRow>
          <VCol
            cols="12"
            md="4"
          >
            <VCol cols="3" />
            <VSelect
              :items="items"
              label="বিভাগ"
              placeholder="Select Item"
              eager
              density="compact"
            />
          </VCol>
          <VCol
            cols="12"
            md="4"
          >
            <VCol cols="3" />
            <VSelect
              :items="items"
              label="জেলা"
              placeholder="Select Item"
              eager
              density="compact"
            />
          </VCol>
          <VCol
            cols="12"
            md="4"
          >
            <VCol cols="3" />
            <VSelect
              :items="items"
              label="থানা/উপজেলা"
              placeholder="Select Item"
              eager
              density="compact"
            />
          </VCol>
        </vrow>
        <VRow>
          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.email"
              placeholder="ডাক ঘর"
              label="ডাক ঘর"
              density="compact"
            />
          </vcol>
          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.email"
              placeholder="গ্রাম"
              label="গ্রাম"
              density="compact"
            />
          </vcol>
        </VRow>
      </vform>
    </vcardtext>
  </VCard>
  <VCard class="mt-5">
    <VCardTitle style="background-color: #243b55; color: white;">
      <h5 class="text-white">
        সংযক্তি
      </h5>
    </VCardTitle>
    <VCardText>
      <!-- 👉 stepper content -->
      <VForm class="mt-5">
        <VRow>
          <div
            class="d-flex flex-column justify-center align-center gap-y-2 pa-12 drop-zone rounded"
            @dragover.prevent="handleDragOver"
            @drop.prevent="handleDrop"
          >
            <!-- Upload Button (for Drag and Drop) -->
            <button
              type="button"
              class="v-btn v-btn--icon v-theme--light text-secondary v-btn--density-default v-btn--variant-tonal rounded"
              style="width: 40px; height: 40px;"
              @click="triggerFileInput"
            >
              <span class="v-btn__overlay" />
              <span class="v-btn__underlay" />
              <span
                class="v-btn__content"
                data-no-activator
              >
                <i
                  class="ri-upload-2-line v-icon notranslate v-theme--light"
                  aria-hidden="true"
                  style="font-size: 24px; height: 24px; width: 24px;"
                />
              </span>
            </button>

            <!-- Text for Drag and Drop -->
            <h4 class="text-h4">
              Drag and drop your image here.
            </h4>

            <!-- Or -->
            <span class="text-disabled">or</span>

            <!-- Browse Images Button -->
            <button
              type="button"
              class="v-btn v-theme--light text-primary v-btn--density-default v-btn--size-small v-btn--variant-outlined"
              @click="triggerFileInput"
            >
              <span class="v-btn__overlay" />
              <span class="v-btn__underlay" />
              <span
                class="v-btn__content"
                data-no-activator
              >
                Browse Images
              </span>
            </button>

            <!-- Hidden file input -->
            <input
              ref="fileInput"
              type="file"
              style="display: none"
              @change="handleFileChange"
            >

            <!-- Display selected files inside the drop zone -->
            <div
              v-if="selectedFiles.length > 0"
              class="mt-4 w-100"
            >
              <h4 class="text-h5">
                Selected Files:
              </h4>
              <ul class="w-100 d-flex flex-column align-items-center">
                <li
                  v-for="(file, index) in selectedFiles"
                  :key="index"
                  class="d-flex justify-between align-center w-75 mb-2"
                  style="border: 1px solid #ddd; padding: 10px; border-radius: 8px;"
                >
                  <div>
                    {{ file.name }} ({{ (file.size / 1024).toFixed(2) }} KB)

                    <!-- Image preview for image files -->
                    <div
                      v-if="file.type.startsWith('image/')"
                      class="mt-2"
                    >
                      <img
                        :src="file.preview"
                        alt="Image Preview"
                        style="max-width: 100px; max-height: 100px; border-radius: 4px;"
                      >
                    </div>
                  </div>

                  <!-- Remove button -->
                  <button
                    type="button"
                    class="v-btn v-theme--light text-error v-btn--density-default v-btn--size-small v-btn--variant-outlined ml-2"
                    @click="removeFile(index)"
                  >
                    Remove
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </VRow>
      </vform>
    </vcardtext>
  </VCard>
</template>

<style scoped>
/* Add custom styles here if needed */
.drop-zone {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
}

.drop-zone {
  border: 2px dashed #ccc;
  padding: 20px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}

.w-100 {
  width: 100%;
}

.w-75 {
  width: 75%;
}
</style>
