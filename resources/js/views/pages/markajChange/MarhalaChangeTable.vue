<script setup>
import { ref } from 'vue'

const input2 = ref(null)
const selectedOption = ref('')

const options = [
  { value: 'option1', text: 'Option 1' },
  { value: 'option2', text: 'Option 2' },
  { value: 'option3', text: 'Option 3' },
]
</script>



<template>
  <VCard>
    <VCardTitle style="background-color: #243b55; color: white;">
      <h5 class="text-white">
        ইলহাক আবেদন ফরম
      </h5>
    </VCardTitle>
    <div class="mb-3">
      <VCol cols="3">
        <VSelect
          v-model="select"
          density="compact"
          :items="items"
          :rules="[requiredValidator]"
          placeholder="নতুন সর্বোচ্চ মারহালা নির্বাচন করুন"
          label="মারহাল নির্বাচন করুন"
          name="select"
          require
        />
      </VCol>
    </div>
  </VCard>
  <VCard class="mt-5">
    <VCardTitle style="background-color: #243b55; color: white;">
      <h5 class="text-white">
        ইলহাক আবেদন ফরম
      </h5>
    </VCardTitle>
    <div class="mb-5 mx-5 mt-5">
      <VRow>
        <VCol
          md="6"
          cols="12"
        >
          <VTextField
            v-model.number="input2"
            density="compact"
            type="number"
            placeholder="ছাত্র সংখ্যা লিখুন"
            label="ফযীলত"
          />
        </VCol>
        <VCol
          md="6"
          cols="12"
        >
          <VTextField
            v-model.number="input2"
            density="compact"
            type="number"
            placeholder="ছাত্র সংখ্যা লিখুন"
            label="ইবতেদাইয়্যাহ"
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol
          md="6"
          cols="12"
        >
          <VTextField
            v-model.number="input2"
            density="compact"
            type="number"
            placeholder="ছাত্র সংখ্যা লিখুন"
            label="সানাবিয়া উলইয়া"
          />
        </VCol>
        <VCol
          md="6"
          cols="12"
        >
          <VTextField
            v-model.number="input2"
            density="compact"
            type="number"
            placeholder="ছাত্র সংখ্যা লিখুন"
            label="হিফজুল কোরআন"
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol
          md="6"
          cols="12"
        >
          <VTextField
            v-model.number="input2"
            density="compact"
            type="number"
            placeholder="ছাত্র সংখ্যা লিখুন"
            label="মুতাওয়াসসিতা"
          />
        </VCol>
        <VCol
          md="6"
          cols="12"
        >
          <VTextField
     
            v-model.number="input2"
            density="compact"
            type="number"
            placeholder="ছাত্র সংখ্যা লিখুন"
            label="ক্বিরআত"
            min="0"
          />
        </VCol>
        <VDivider />
        <VCol
          md="3"
          cols="12"
        >
          <VTextField
           
            density="compact"
            label="মোট ছাত্র সংখ্যা"
            placeholder="মোট ছাত্র সংখ্যা"
            aria-label="Disabled input example"
            disabled
            dense
            class="mb-3"
          />
        </VCol>
      </VRow>
    </div>
  </VCard>
  <VCard class="mt-5">
    <VCardTitle style="background-color: #243b55; color: white;">
      <h5 class="text-white">
        ইলহাক আবেদন ফরম
      </h5>
    </VCardTitle>
    <div class="mb-5 mx-5 mt-5">
      <VRow>
        <VCol
          md="6"
          cols="12"
        >
          <VFileInput
            density="compact"
            show-size
            label="মুহতামিমের পত্র "
          />
        </VCol>
        <VCol
          md="6"
          cols="12"
        >
          <VFileInput
            density="compact"
            show-size
            label="কমিটি রেজুলেশন ফটোকপি "
          />
        </VCol>
      </VRow>
    </div>
    <VDivider />
    <div class="mx-5 mb-5 mt-15">
      <VBtn 
        size="small"
        variant="outlined"
      >
        সাবমিট করুন
      </VBtn>
    </div>
  </VCard>
</template>

<style scoped>
.form-select {
  width: 200px;
  padding: 5px;
  margin-top: 10px;
}
</style>
