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


const fileInput = ref(null)

// Function to trigger the hidden file input
const triggerFileInput = () => {
  fileInput.value.click()
}

// Handle file selection from the file input
const handleFileChange = event => {
  const files = event.target.files
  if (files.length > 0) {
    handleFileUpload(files)
  }
}

// Handle drag over event (optional)
const handleDragOver = event => {
  // Add some visual indication if needed (like highlighting the drop zone)
  console.log('Drag over', event)
}

// Handle drop event (when files are dropped into the zone)
const handleDrop = event => {
  const files = event.dataTransfer.files
  if (files.length > 0) {
    handleFileUpload(files)
  }
}

// Handle file uploads from both file input and drag/drop
const handleFileUpload = files => {
  // Process the file(s) here
  for (let i = 0; i < files.length; i++) {
    console.log('File:', files[i].name)

    // Add logic to upload or preview the files
  }
}

// Reactive state for qualifications
const qualifications = ref([
  {
    exam: '',
    passingYear: '',
    result: '',
    institution: '',
  },
])

// Reactive state for teaching experience
const experience = ref('')

// Function to add more qualification rows
const addQualification = () => {
  qualifications.value.push({
    exam: '',
    passingYear: '',
    result: '',
    institution: '',
  })
}

const rows = ref([
  {
    fazilat: '',
    sanabiyaUlUlya: '',
    sanabiya: '',
    mutawassita: '',
    ibtedaiyah: '',
    totalStudents: '',
  },
])


const addRow = () => {
  rows.value.push({
    fazilat: '',
    sanabiyaUlUlya: '',
    sanabiya: '',
    mutawassita: '',
    ibtedaiyah: '',
    totalStudents: '',
  })
}

const removeRow = index => {
  if (rows.value.length > 1) {
    rows.value.splice(index, 1)
  }
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
      <VForm>
        <VRow class="mb-5">
          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
            <VSelect
              :items="items"
              label="আবেদনের ধরন নির্বাচন করুন"
              placeholder="Select Item"
              eager
              density="compact"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.username"
              placeholder="নাম "
              label="নাম "
              density="compact"
            />
          </VCol>

          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.email"
              placeholder="মোবাইল নম্বর"
              label="মোবাইল নম্বর"
              density="compact"
            />
          </VCol>

          
          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="formData.email"
              placeholder="হোয়াট্সঅ্যাপ নম্বর"
              label="হোয়াট্সঅ্যাপ নম্বর"
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
            <VCol cols="3" />
            <VSelect
              :items="items"
              label="জেন্ডার নির্বাচন করুন"
              placeholder="Select Item"
              eager
              density="compact"
            />
          </VCol>
        </VRow>
      </vform>
    </vcardtext>
  </VCard>
  <div class="mt-5">
    <VCard>
      <VCardTitle style="background-color: #243b55; color: white;">
        <h5 class="text-white">
          স্থায়ী ঠিকানা
        </h5>
      </VCardTitle>
      <VCardText>
        <!-- Form -->
        <VForm>
          <!-- Horizontal Scrollable Container -->
          <div class="mx-4 mt-5">
            <VRow class="d-flex flex-wrap mb-4">
              <!-- বিভাগ Field -->
              <VCol
                md="2"
                cols="12"
              >
                <VAutocomplete
                  v-model="select"
                  v-model:search="search"
                  :loading="loading"
                  :items="items"
                  density="compact"
                  label="বিভাগ"
                  :menu-props="{ maxHeight: '200px' }"
                  outlined
                />
              </VCol>
              <!-- জেলা Field -->
              <VCol
                md="2"
                cols="12"
              >
                <VAutocomplete
                  v-model="select"
                  v-model:search="search"
                  :loading="loading"
                  :items="items"
                  density="compact"
                  label="জেলা"
                  :menu-props="{ maxHeight: '200px' }"
                  outlined
                />
              </VCol>
              <!-- থানা উপজেলা Field -->
              <VCol
                md="2"
                cols="12"
              >
                <VAutocomplete
                  v-model="select"
                  v-model:search="search"
                  :loading="loading"
                  :items="items"
                  density="compact"
                  label="থানা উপজেলা"
                  :menu-props="{ maxHeight: '200px' }"
                  outlined
                />
              </VCol>
              <!-- পোস্ট Field -->
              <VCol
                md="2"
                cols="12"
              >
                <VTextField
                  v-model="post"
                  placeholder="পোস্ট"
                  label="পোস্ট"
                  density="compact"
                  outlined
                />
              </VCol>
              <!-- গ্রাম Field -->
              <VCol
                md="3"
                cols="12"
              >
                <VTextField
                  v-model="village"
                  placeholder="গ্রাম"
                  label="গ্রাম"
                  density="compact"
                  outlined
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol
                md="2"
                cols="12"
              >
                <VAutocomplete
                  v-model="select"
                  v-model:search="search"
                  :loading="loading"
                  :items="items"
                  density="compact"
                  label="পেমেন্ট মাধ্যম"
                  :menu-props="{ maxHeight: '200px' }"
                  outlined
                />
              </VCol>
              <VCol
                md="3"
                cols="12"
              >
                <VTextField
                  v-model="village"
                  placeholder="মোবাইল ব্যাংকিং নম্বর"
                  label="মোবাইল ব্যাংকিং নম্বর"
                  density="compact"
                  outlined
                />
              </VCol>
            </VRow>
          </div>
          <div class="mt-5  mb-5">
            <VTextarea
              label="Outlined"
              rows="2"
              placeholder="Placeholder Text"
              variant="outlined"
            />
          </div>
        </VForm>
      </VCardText>
    </VCard>
  </div>
  <div class="mt-5">
    <VCard>
      <VCardTitle style="background-color: #243b55; color: white;">
        <h5 class="text-white">
          বর্তমান ঠিকানা
        </h5>
      </VCardTitle>
      <VCardText>
        <!-- Form -->
        <VForm>
          <!-- Horizontal Scrollable Container -->
          <div class="mx-4 mt-5">
            <VRow class="d-flex flex-wrap mb-4">
              <!-- বিভাগ Field -->
              <VCol
                md="2"
                cols="12"
              >
                <VAutocomplete
                  v-model="select"
                  v-model:search="search"
                  :loading="loading"
                  :items="items"
                  density="compact"
                  label="বিভাগ"
                  :menu-props="{ maxHeight: '200px' }"
                  outlined
                />
              </VCol>
              <!-- জেলা Field -->
              <VCol
                md="2"
                cols="12"
              >
                <VAutocomplete
                  v-model="select"
                  v-model:search="search"
                  :loading="loading"
                  :items="items"
                  density="compact"
                  label="জেলা"
                  :menu-props="{ maxHeight: '200px' }"
                  outlined
                />
              </VCol>
              <!-- থানা উপজেলা Field -->
              <VCol
                md="2"
                cols="12"
              >
                <VAutocomplete
                  v-model="select"
                  v-model:search="search"
                  :loading="loading"
                  :items="items"
                  density="compact"
                  label="থানা উপজেলা"
                  :menu-props="{ maxHeight: '200px' }"
                  outlined
                />
              </VCol>
              <!-- পোস্ট Field -->
              <VCol
                md="2"
                cols="12"
              >
                <VTextField
                  v-model="post"
                  placeholder="পোস্ট"
                  label="পোস্ট"
                  density="compact"
                  outlined
                />
              </VCol>
              <!-- গ্রাম Field -->
              <VCol
                md="3"
                cols="12"
              >
                <VTextField
                  v-model="village"
                  placeholder="গ্রাম"
                  label="গ্রাম"
                  density="compact"
                  outlined
                />
              </VCol>
            </VRow>
          </div>
        </VForm>
      </VCardText>
      <div class="mx-5 mb-5">
        <VTextarea
          label="Outlined"
          rows="2"
          placeholder="Placeholder Text"
          variant="outlined"
        />
      </div>
    </VCard>
  </div>
  <div class="mt-5">
    <VCard>
      <VCardTitle style="background-color: #243b55; color: white;">
        <h5 class="text-white">
          শিক্ষাগত যোগ্যতা
        </h5>
      </VCardTitle>
      
      <VCardText>
        <!-- 👉 Form -->
        <VForm class="mt-6">
          <!-- Container for horizontal scrolling -->
          <div>
            <VRow
              v-for="(row, index) in rows"
              :key="index"
              class="d-flex flex-nowrap mb-5"
            >
              <!-- Dynamic Input Fields -->
              <VCol
                md="2"
                cols="12"
              >
                <VAutocomplete
                  v-model="select"
                  v-model:search="search"
                  :loading="loading"
                  :items="items"
              
                  density="compact"
                    
                  label="মারহালা/ক্লাসের নাম"
                
                  :menu-props="{ maxHeight: '200px' }"
                />
              </VCol>
              <VCol
                md="2"
                cols="12"
              >
                <VAutocomplete
                  v-model="select"
                  v-model:search="search"
                  :loading="loading"
                  :items="items"
              
                  density="compact"
                    
                  label="পাসের সন"
                
                  :menu-props="{ maxHeight: '200px' }"
                />
              </VCol>
              <VCol
                md="2"
                cols="12"
              >
                <VAutocomplete
                  v-model="select"
                  v-model:search="search"
                  :loading="loading"
                  :items="items"
              
                  density="compact"
                    
                  label="ফলাফল/বিভাগ"
                
                  :menu-props="{ maxHeight: '200px' }"
                />
              </VCol>
              <VCol
                md="3"
                cols="12"
              >
                <VAutocomplete
                  v-model="select"
                  v-model:search="search"
                  :loading="loading"
                  :items="items"
              
                  density="compact"
                    
                  label="সমাপনি বোর্ড/মাদরাসা"
                
                  :menu-props="{ maxHeight: '200px' }"
                />
              </VCol>
              <VCol
                md="2"
                cols="12"
              >
                <VTextField
                  v-model="row.mutawassita"
   
                  placeholder="মাদরাসার নাম"
                  label="মাদরাসা/ইউনিভার্সিটির নাম"
                  density="compact"
                />
              </VCol>
         
          
              <!-- Plus and Minus buttons for adding/removing rows -->
              <VCol cols="auto">
                <VBtn
                  size="small"
                  color="info"
                  @click="addRow"
                >
                  +
                </VBtn>
                <VBtn
                  v-if="rows.length > 1"
                  size="small"
                  class="mx-5"
                  color="error"
                  @click="removeRow(index)"
                >
                  -
                </VBtn>
              </VCol>
            </VRow>
          </div>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style scoped>
/* Add custom styles here if needed */
.drop-zone {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
}
</style>
