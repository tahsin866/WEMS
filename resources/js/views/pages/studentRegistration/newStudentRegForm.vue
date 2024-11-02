<script setup>
import { ref } from 'vue'
import Attachment from './Attachment.vue'

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
          <Attachment />
        </VRow>
      </vform>
    </vcardtext>
  </VCard>
</template>

