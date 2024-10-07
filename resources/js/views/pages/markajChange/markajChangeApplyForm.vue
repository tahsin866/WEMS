<script setup>
const desserts = [
  {
    dessert: 'দরসিয়াত',
    calories: 'জামিয়া আরাবিয়া ইমদাদুল উলুম ফরিদাবাদ ঢাকা ১২৩৬- (W10130)',
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'হিফুল কোরআন',
    calories: 'জামিয়া আরাবিয়া ইমদাদুল উলুম ফরিদাবাদ ঢাকা ১২৩৬- (W10130)',
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    color: 'warning',
    dessert: 'ক্বিরআত',
    calories: 'জামিয়া আরাবিয়া ইমদাদুল উলুম ফরিদাবাদ ঢাকা ১২৩৬- (W10130)',
    fat: 6,
    carbs: 24,
    protein: 4,
  },

]
</script>

<template>
  <!-- দরসিয়াত Section -->
  <VCard>
    <!-- VCard Header with custom color -->
    <VCardTitle style="background-color: #243b55; color: white;">
      দরসিয়াত
    </VCardTitle>

    <VCardText>
      <!-- Grid View Wrapper -->
      <div class="grid-wrapper">
        <VRow class="custom-grid-spacing">
          <!-- মারকাযের ধরন -->
          <VCol
            cols="12"
            md="4"
            class="grid-item"
          >
            <strong class="text-uppercase text-primary">মারকাযের ধরন</strong>
            <div>{{ desserts[0].dessert }}</div>
          </VCol>

          <!-- বর্তমান মারকায -->
          <VCol
            cols="12"
            md="4"
            class="grid-item"
          >
            <strong class="text-uppercase text-primary">বর্তমান মারকায</strong>
            <div>{{ desserts[0].calories }}</div>
          </VCol>

          <!-- কাঙ্খিত মারকায -->
          <VCol
            cols="12"
            md="4"
            class="grid-item"
          >
            <strong class="text-uppercase text-primary">কাঙ্খিত মারকায</strong>
            <VAutocomplete
              v-model="select"
              v-model:search="search"
              density="compact"
              :loading="loading"
              :items="items"
              label="মাদরাসা সিলেক্ট করুন"
              :menu-props="{ maxHeight: '200px' }"
            />
          </VCol>
        </VRow>

        <VRow>
          <!-- অনাপত্তি পত্র -->
          <VCol
            cols="12"
            md="6"
            class="grid-item"
          >
            <VFileInput
              density="compact"
              show-size
              label="বর্তমান মারকায অনাপত্তিপত্র"
            />
          </VCol>

          <!-- সম্মতিপত্র পত্র -->
          <VCol
            cols="12"
            md="6"
            class="grid-item"
          >
            <VFileInput
              density="compact"
              show-size
              label="কাঙ্খিত মারকায সম্মতিপত্র"
            />
          </VCol>
        </VRow>
      </div>
    </VCardText>

    <VCardActions />
  </VCard>


  <!-- হিফজুল কোরআন Section -->
  <VCard class="mt-5">
    <VCardTitle style="background-color: #243b55; color: white;">
      হিফজুল কোরআন
    </VCardTitle>
    <VCardText>
      <div class="grid-wrapper">
        <VRow class="custom-grid-spacing">
          <!-- Same fields for হিফজুল কোরআন -->
          <VCol
            cols="12"
            md="4"
            class="grid-item"
          >
            <strong class="text-uppercase text-primary">মারকাযের ধরন</strong>
            <div>{{ desserts[1].dessert }}</div>
          </VCol>
          <VCol
            cols="12"
            md="4"
            class="grid-item"
          >
            <strong class="text-uppercase text-primary">বর্তমান মারকায</strong>
            <div>{{ desserts[1].calories }}</div>
          </VCol>
          <VCol
            cols="12"
            md="4"
            class="grid-item"
          >
            <strong class="text-uppercase text-primary">কাঙ্খিত মারকায</strong>
            <VAutocomplete
              v-model="select"
              v-model:search="search"
              density="compact"
              :loading="loading"
              :items="items"
              label="মাদরাসা সিলেক্ট করুন"
              :menu-props="{ maxHeight: '200px' }"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol
            cols="12"
            md="6"
            class="grid-item"
          >
            <VFileInput
              density="compact"
              show-size
              label="বর্তমান মারকায অনাপত্তিপত্র"
            />
          </VCol>
          <VCol
            cols="12"
            md="6"
            class="grid-item"
          >
            <VFileInput
              density="compact"
              show-size
              label="কাঙ্খিত মারকায সম্মতিপত্র "
            />
          </VCol>
        </VRow>
      </div>
    </VCardText>
  </VCard>

  <!-- ক্বিরআত Section -->
  <VCard class="mt-5">
    <VCardTitle style="background-color: #243b55; color: white;">
      ক্বিরআত
    </VCardTitle>
    <VCardText>
      <div class="grid-wrapper">
        <VRow class="custom-grid-spacing">
          <!-- Same fields for ক্বিরআত -->
          <VCol
            cols="12"
            md="4"
            class="grid-item"
          >
            <strong class="text-uppercase text-primary">মারকাযের ধরন</strong>
            <div>{{ desserts[2].dessert }}</div>
          </VCol>
          <VCol
            cols="12"
            md="4"
            class="grid-item"
          >
            <strong class="text-uppercase text-primary">বর্তমান মারকায</strong>
            <div>{{ desserts[2].calories }}</div>
          </VCol>
          <VCol
            cols="12"
            md="4"
            class="grid-item"
          >
            <strong class="text-uppercase text-primary">কাঙ্খিত মারকায</strong>
            <VAutocomplete
              v-model="select"
              v-model:search="search"
              density="compact"
              :loading="loading"
              :items="items"
              label="মাদরাসা সিলেক্ট করুন"
              :menu-props="{ maxHeight: '200px' }"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol
            cols="12"
            md="6"
            class="grid-item"
          >
            <VFileInput
              density="compact"
              show-size
              label="বর্তমান মারকায অনাপত্তিপত্র"
            />
          </VCol>
          <VCol
            cols="12"
            md="6"
            class="grid-item"
          >
            <VFileInput
              density="compact"
              show-size
              label="কাঙ্খিত মারকায সম্মতিপত্র "
            />
          </VCol>
        </VRow>
      </div>
      <VDivider />
      <div class="mt-15">
        <VTextarea
          label="মারকায পরিবর্তনের প্রয়োজনীয়তা"
          placeholder="মারকায পরিবর্তনের প্রয়োজনীয়তা"
          class="mx-3"
        />
      </div>
    </VCardText>
 
    <div class="mx-5 mt-10 mb-8">
      <VBtn
        size="small"
        color="success"
        class="mx-5 mt-4"
      >
        সাবমিট করুন
      </VBtn>
    </div>
  </VCard>
</template>

<style scoped>
.grid-wrapper {
  padding: 16px;
}

.grid-item {
  padding: 10px 0;
}

.custom-grid-spacing {
  margin-bottom: 50px;
}
</style>
