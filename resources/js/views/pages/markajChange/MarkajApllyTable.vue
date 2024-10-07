<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import { ref, computed }  from 'vue'

const input1 = ref(0)
const input2 = ref(0)
const input3 = ref(0)
const input4 = ref(0)
const input5 = ref(0)
const input6 = ref(0)

const totalSum = computed(()=>{
  return input1.value+ input2.value+ input3.value + input4.value+ input5.value 
  input6.value
})




const accountData = {
  avatarImg: avatar1,

  email: 'johnDoe@example.com',
  org: 'ThemeSelection',
  phone: '+1 (917) 543-9876',
  address: '123 Main St, New York, NY 10001',
  state: 'New York',
  zip: '10001',
  country: 'USA',
  language: 'English',
  timezone: '(GMT-11:00) International Date Line West',
  currency: 'USD',
}

const isDialogVisible = ref(false)
const refInputEl = ref()
const accountDataLocal = ref(structuredClone(accountData))
const isAccountDeactivated = ref(false)



const changeAvatar = file => {
  const fileReader = new FileReader()
  const { files } = file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        accountDataLocal.value.avatarImg = fileReader.result
    }
  }
}

// reset avatar image
const resetAvatar = () => {
  accountDataLocal.value.avatarImg = accountData.avatarImg
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

const resetAvatar1 = () => {
  // Implement avatar reset logic here
}

const changeAvatar1 = () => {
  // Implement avatar change logic here
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <p class="text-primary mt-2 mx-3">
        আবেদনকৃত মাদরাসার তথ্য
      </p>
      <VDivider />

      <VCardText>
        <!-- 👉 Form -->
        <VForm class="mt-6">
          <VRow>
            <!-- 👉 First Name -->
           
            <VCol
              md="1"
              cols="12"
            >
              <VTextField
                v-model.number="input1"
                type="number"
                placeholder="ছাত্র সংখ্যা লিখুন"
                label="ফযীলত"
                density="compact"
              />
            </VCol>
            <VCol
              md="1"
              cols="12"
            >
              <VTextField
                v-model.number="input2"
                type="number"
                placeholder="ছাত্র সংখ্যা লিখুন"
                label="সানাবিয়া উলইয়া"
                density="compact"
              />
            </VCol>
            <!-- 👉 Last Name -->
            <VCol
              md="1"
              cols="12"
            >
              <VTextField
                v-model.number="input3"
                type="number"
                placeholder="ছাত্র সংখ্যা লিখুন"
                label="সানাবিয়া"
                density="compact"
              />
            </VCol>
            <VCol
              md="1"
              cols="12"
            >
              <VTextField
                v-model.number="input4"
                type="number"
                placeholder="ছাত্র সংখ্যা লিখুন"
                label="মুতাওয়াসসিতা"
                density="compact"
              />
            </VCol>
            <VCol
              md="1"
              cols="12"
            >
              <VTextField
                v-model.number="input5"
                type="number"
                placeholder="ছাত্র সংখ্যা লিখুন"
                label="ইবতেদাইয়াহ"
                density="compact"
              />
            </VCol>
            <VCol
              md="1"
              cols="12"
            >
              <VTextField
                label="মোট ছাত্র সংখ্যা"
                placeholder="মোট ছাত্র সংখ্যা"
                aria-label="Disabled input example"
                disabled
                dense
                class="mb-3"
                density="compact"
              />
            </VCol>
            <!-- 👉 Last Name -->
        
            <VCol cols="4">
              <VFileInput
                label="সম্মাতি পত্র"
                prepend-icon="ri-camera-line"
                density="compact"
              />
            </VCol>
          



            <VCol
              cols="12"
              md="1"
            >
              <VCardText class="d-flex">
                <!-- 👉 Avatar -->
                

                <!-- 👉 Upload Photo -->
                <form class="d-flex flex-column justify-center gap-5">
                  <div class="d-flex flex-wrap gap-2">
                    <input
                      ref="refInputEl"
                      type="file"
                      name="file"
                 
                      accept=".jpeg,.png,.jpg,GIF"
                      hidden
                      density="compact"
                      @input="changeAvatar"
                    >
                  </div>
                </form>
              </VCardText>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCol>
    <!-- Dialog -->
  </VRow>
  <VRow>
    <VCol>
      <VDivider />
      <p class="text-primary mt-3 mx-3">
        আবেদনকৃত মাদরাসায় পরীক্ষা দিতে ইচ্ছুক  মাদরাসার তালিকা ও তথ্য
      </p>
      <VDivider />
      <VCardText>
        <!-- 👉 Form -->
        <VForm class="mt-6">
          <!-- Container for horizontal scrolling -->
          <div class="overflow-x-auto">
            <VRow
              v-for="(row, index) in rows"
              :key="index"
              class="d-flex flex-nowrap mb-5"
            >
              <!-- Dynamic Input Fields -->
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
                    
                  label="মাদরাসা সিলেক্ট করুন"
                
                  :menu-props="{ maxHeight: '200px' }"
                />
              </VCol>
              <VCol
                md="1"
                cols="12"
              >
                <VTextField
                  v-model="row.fazilat"
                  type="number"
                  placeholder="ছাত্র সংখ্যা লিখুন"
                  label="ফযীলত"
                  density="compact"
                />
              </VCol>
              <VCol
                md="1"
                cols="12"
              >
                <VTextField
                  v-model="row.sanabiyaUlUlya"
                  type="number"
                  placeholder="ছাত্র সংখ্যা লিখুন"
                  label="সানাবিয়া উলইয়া"
                  density="compact"
                />
              </VCol>
              <VCol
                md="1"
                cols="12"
              >
                <VTextField
                  v-model="row.sanabiya"
                  type="number"
                  placeholder="ছাত্র সংখ্যা লিখুন"
                  label="সানাবিয়া"
                  density="compact"
                />
              </VCol>
              <VCol
                md="1"
                cols="12"
              >
                <VTextField
                  v-model="row.mutawassita"
                  type="number"
                  placeholder="ছাত্র সংখ্যা লিখুন"
                  label="মুতাওয়াসসিতা"
                  density="compact"
                />
              </VCol>
              <VCol
                md="1"
                cols="12"
              >
                <VTextField
                  v-model="row.ibtedaiyah"
                  type="number"
                  placeholder="ছাত্র সংখ্যা লিখুন"
                  label="ইবতেদাইয়াহ"
                  density="compact"
                />
              </VCol>
              <VCol
                md="1"
                cols="12"
              >
                <VTextField
                  label="মোট ছাত্র সংখ্যা"
                  placeholder="মোট ছাত্র সংখ্যা"
                  aria-label="Disabled input example"
                  disabled
                  density="compact"
                  dense
                  class="mb-3"
                />
              </VCol>
              <VCol cols="2">
                <VFileInput
                  label="সম্মাতি পত্র"
                  prepend-icon="ri-camera-line"
                  density="compact"
                />
              </VCol>
              <VCol cols="2">
                <VFileInput
                  label="অনাপত্তি পত্র"
                  prepend-icon="ri-camera-line"
                  density="compact"
                />
              </VCol>
              <VCol cols="auto">
                <VCardText class="d-flex">
                  <form class="d-flex flex-column justify-center gap-5">
                    <div class="d-flex flex-wrap gap-2">
                      <input
                        ref="refInputEl"
                        type="file"
                        name="file"
                        accept=".jpeg,.png,.jpg,GIF"
                        hidden
                        @input="changeAvatar"
                      >
                    </div>
                  </form>
                </VCardText>
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
        <div class="mt-8"> 
          <VTextarea
            label="মারকায প্রাপ্তির প্রয়োজনীয়তা"
            placeholder="Placeholder Text"
          />
        </div>
      </VCardText>
    </VCol>
  </VRow>

  <VRow>
    <VCol cols="12">
      <VDivider />
      <p class="text-primary mt-3 mx-3">
        সংযুক্তি (নিম্নে উল্লেখিত সকল সংযক্তি আপলোড করতে হবে)
      </p>
      <VDivider />

     
      <VCol cols="4">
        <VFileInput
          label="কমিটি রেজুলেশনের ফটোকপি"
          prepend-icon="ri-camera-line"
          density="compact"
        />
      </Vcol>
      <VCol cols="4">
        <VFileInput
          label="জেলা/থানা কমিটির সভাপতি/সেক্রেটারির সুপারিশপত্র"
          prepend-icon="ri-camera-line"
          density="compact"
        />
      </Vcol>
      <VCol cols="4">
        <VFileInput
          label="মুহতামিমের আবেদন পত্র"
          prepend-icon="ri-camera-line"
          density="compact"
        />
      </Vcol>
    </VCol>
  </VRow>
</template>

<style scoped>
.overflow-x-auto {
  overflow-x: auto;
  white-space: nowrap;
}
</style>
