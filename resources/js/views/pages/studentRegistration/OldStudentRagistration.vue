<script setup>
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
 
]
</script>

<template>
  <div class="mb-5">
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
          />
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
              ৪৮তম কেন্দ্রীয় পরীক্ষা: মুতাওয়াসসিতা
            </h4>
          </VCol>
          <VCol
            class="d-flex mt-5"
            style="position: relative; left: 300px;"
            cols="12"
            md="2"
          >
            <VBtn 
              to="newStudentRegForm"
              size="small"
              class="mx-5"
              color="warning"
            >
              নতুন নিবন্ধন
              <VIcon
                end
                icon="ri-add-circle-line"
              />
            </VBtn>
            <VBtn 
          
              size="small"
            
              color="success"
            >
              নিবন্ধন তালিকা 
              <VIcon
                end
                icon="ri-list-view"
              />
            </VBtn>
          </VCol>
        </VRow>
      </div>
     
      <div class="mb-5 mx-5">
        <VRow>
          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
            <VSelect
              :items="items"
              label="মারহালা নির্বাচন করুন"
              placeholder="Select Item"
              eager
              density="compact"
            />
          </VCol>
          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
            <VSelect
              :items="items"
              label="পাশের সন নির্বাচন করুন"
              placeholder="Select Item"
              eager
              density="compact"
            />
          </VCol>
          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
            <VSelect
              :items="items"
              label="বিগত পরীক্ষার বোর্ড নির্বাচন করুন"
              placeholder="Select Item"
              eager
              density="compact"
            />
          </VCol>
          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
            <VTextField
              v-model="search"
              label="রেজিস্ট্রেশন নম্বর"
              placeholder="Search ..."
              append-inner-icon="ri-search-line"
              single-line
              hide-details
              dense
              outlined
              density="compact"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
            <VTextField
              v-model="search"
              label="রোল নম্বর"
              placeholder="Search ..."
              append-inner-icon="ri-search-line"
              single-line
              hide-details
              dense
              outlined
              density="compact"
            />
          </VCol>
          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
          </VCol>
          <VCol
            cols="12"
            md="3"
          />


          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
            <VBtn 
              variant="tonal"
              size="small"
            >
              সার্চ করুন
            </VBtn>
            <VBtn
              variant="tonal"
              size="small"
              class="mx-5"
              color="error"
            >
              রেসেট
            </VBtn>
          </VCol>
        </VRow> 
      </div>
    </VCard>
  </div>
</template>
