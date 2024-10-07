<script setup>
const desserts = [
  {
    Marhala: 'ফযীলত',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    Marhala: 'সানাবিয়া উলইয়া',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    Marhala: 'সানাবিয়া',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    Marhala: 'মুতাওয়াসসিতা',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    Marhala: 'ইবতেদাইয়্যাহ',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    Marhala: 'হিফজুল কোরআন',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    Marhala: 'ক্বিরআত',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]


const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref([])
</script>

<template>
  <VCard>
    <div
      class="header-background  mb-10"
      style="background-color:#243b55;  border-radius: 4px 4px 0 0;"
    >
      <VRow>
        <VCol
          class="mx-5 mt-5"
          cols="12"
          md="2"
        >
          <h4 class="text-warning">
            মোট নেগরান মুমতাহিন আবেদন সংখ্যা
          </h4>
        </VCol>
        <VCol
          cols="12"
          md="2"
        />
        <VCol
          class="mt-5"
          cols="12"
          md="3"
        >
          <h4 class="text-white">
            ৪৮তম কেন্দ্রীয় পরীক্ষা: নেগরান মুমতাহিন
          </h4>
        </VCol>
     
        <VCol
          style="position: relative; left: 250px;"
          class="d-flex  "
          cols="12"
          md="2"
        >
          <VCol cols="2" />
      
          <VDialog
            v-model="isDialogVisible"
            max-width="600"
          >
            <!-- Dialog Activator -->
            <template #activator="{ props }">
              <VBtn
                class="mt-5"
                variant="tonal"
                size="small"
            
                v-bind="props"
              >
                মারকায সেটিং
                <VIcon icon="ri-settings-2-line" />
              </VBtn>
            </template>

            <!-- Dialog Content -->
            <VCard title="User Profile">
              <DialogCloseBtn
                variant="text"
                size="default"
                @click="isDialogVisible = false"
              />

              <VCardText>
                <VRow>
                  <VCol
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <VTextField
                      v-model="firstName"
                      label="First Name"
                      placeholder="John"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <VTextField
                      v-model="middleName"
                      label="Middle Name"
                      placeholder="peter"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <VTextField
                      v-model="lastName"
                      label="Last Name"
                      persistent-hint
                      placeholder="Doe"
                    />
                  </VCol>
                  <VCol cols="12">
                    <VTextField
                      v-model="email"
                      label="Email"
                      placeholder="johndoe@email.com"
                    />
                  </VCol>
                  <VCol cols="12">
                    <VTextField
                      v-model="password"
                      label="Password"
                      autocomplete="on"
                      type="password"
                      placeholder="············"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    sm="6"
                  >
                    <VTextField
                      v-model="age"
                      label="Age"
                      type="number"
                      placeholder="18"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    sm="6"
                  >
                    <VTextField
                      v-model="interest"
                      label="Interests"
                      placeholder="Sports, Music, Movies"
                    />
                  </VCol>
                </VRow>
              </VCardText>

              <VCardActions>
                <VSpacer />
                <VBtn
                  color="error"
                  @click="isDialogVisible = false"
                >
                  Close
                </VBtn>
                <VBtn
                  color="success"
                  @click="isDialogVisible = false"
                >
                  Save
                </VBtn>
              </VCardActions>
            </VCard>
          </vdialog>
        </VCol>
      </VRow>
    </div>
 
  
    
    <VTable hover="succsess">
      <thead>
        <tr>
          <th class="text-uppercase">
            মারহালা
          </th>
          <th class="text-uppercase">
            শুরুর তারিখ
          </th>
          <th class="text-uppercase">
            শেষের তারিখ
          </th>
          <th class="text-uppercase">
            রেজি লিমিট
          </th>
          <th class="text-uppercase">
            একশন
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="item in desserts"
          :key="item. Marhala"
        >
          <td>
            {{ item. Marhala }}
          </td>
          <td>
            {{ item.calories }}
          </td>
          <td>
            {{ item.fat }}
          </td>
          <td>
            <VTextField
              v-model.number="input2"
              type="number"
              placeholder=""
           
              density="compact"
              width="100px"
            />
          </td>
          <td>
            <VBtn
              size="small"
              color="success"
              to="/studentRagistraionTable"
              variant="tonal"
              @click="editItem(item)"
            >
              <VIcon icon="ri-add-circle-line" />
            </VBtn>
            <VBtn
              variant="tonal"
              size="small"
              class="mx-5"
         
              @click="editItem(item)"
            >
              <VIcon icon="ri-file-list-3-line" />
            </VBtn>
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>


  <!-- dailog -->
</template>
