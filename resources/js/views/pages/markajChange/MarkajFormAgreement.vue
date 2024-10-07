<script setup>
import MarkajApllyTable from './MarkajApllyTable.vue'

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
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
      />
    </VCardText>


    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-lg font-weight-medium text-error">
                  মারকায প্রাপ্তির শর্ত ও পালনীয় কর্তব্য
                </h6>
              </VCol>
              <VCol cols="3">
                <VSelect
                  v-model="select"
                  density="compact"
                  :items="items"
                  :rules="[requiredValidator]"
                  placeholder="Select an Item"
                  label="মারকাযের ধরন"
                  name="select"
                  require
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <MarkajApllyTable />
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <p>সংযুক্তি (নিম্নে উল্লেখিত সকল সংযক্তি আপলোড করতে হবে)</p>
            <VRow>
              <VCol cols="12">
                <VDivider />

     
                <VCol cols="4">
                  <VFileInput
                    density="compact"
                    label="কমিটি রেজুলেশনের ফটোকপি"
                    prepend-icon="ri-camera-line"
                  />
                </Vcol>
                <VCol cols="4">
                  <VFileInput
                    density="compact"
                    label="জেলা/থানা কমিটির সভাপতি/সেক্রেটারির সুপারিশপত্র"
                    prepend-icon="ri-camera-line"
                  />
                </Vcol>
                <VCol cols="4">
                  <VFileInput
                    density="compact"
                    label="মুহতামিমের আবেদন পত্র"
                    prepend-icon="ri-camera-line"
                  />
                </Vcol>
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            size="small"
            color="secondary"
            variant="outlined"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="ri-arrow-left-line"
              start
              class="flip-in-rtl"
            />
            পূর্ববর্তি
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            size="small"
            color="success"
            append-icon="ri-check-line"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            size="small"
            @click="currentStep++"
          >
            পরবর্তি

            <VIcon
              icon="ri-arrow-right-line"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>


