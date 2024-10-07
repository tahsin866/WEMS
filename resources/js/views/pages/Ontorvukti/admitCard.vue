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
      <VCardText class="d-flex">
        <!-- 👉 Avatar -->

        <!-- 👉 Upload Photo -->
        <form class="d-flex flex-column gap-5">
          <div class="d-flex justify-content-end">
            <!-- Adjusted alignment here -->
            <VBtn 
              variant="tonal"
              size="small"
       
              class="mx-5"
              color="success"
            >
              একসাথে ডাউনলোড করুন
              <VIcon
                end
                icon="ri-download-cloud-line"
              />
            </VBtn>
          </div>
        </form>
      </VCardText>
      <VDivider />
      <div class="mb-5 mx-5">
        <VRow>
          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
            <VSelect
              :items="items"
              label="মারহালা তালিকা"
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
              label="শিক্ষার্থী/রেজি:/এনআইড/বি আর এন"
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
            <VSelect
              :items="items"
              label="আবেদনের ধরন"
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




  <VCard>
    <VRow>
      <VCol cols="12">
        <VCard>
          <VRow>
            <VCol
              class="mx-8 mb-5"
              cols="12"
              md="2"
            >
              <VCol cols="2" />
              <h4 class="text-warning">
                প্রবেশপত্র
              </h4>
            </VCol>
            <VCol
              cols="12"
              md="2"
            >
              <VCol cols="2" />
            </VCol>
            <VCol
              cols="12"
              md="2"
            >
              <VCol cols="3" />
              <h4>৪৮তম কেন্দ্রীয় পরীক্ষা: মুতাওয়াসসিতা</h4>
            </VCol>
          </VRow>

          <VDivider />

          <VCardText />
        </VCard>
      </VCol>
    </VRow>
  </VCard>
</template>
