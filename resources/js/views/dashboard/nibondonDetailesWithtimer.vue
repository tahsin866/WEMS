<script setup lang="ts">
import Timer from './timer.vue'
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard class="elevation-3">
        <VRow no-gutters>
          <VCol
            cols="12"
            lg="7"
            class="p-5"
          >
            <VCardItem>
              <VCardTitle class="text-primary">
                নিবন্ধন সম্পর্কিত তথ্য
              </VCardTitle>
            </VCardItem>

            <VCardText class="mb-4">
              নেগরান ও মুমতাহিনের নিয়মিত কার্যক্রম আরো সহজ করে তুলতে অ্যাপটি ব্যাবহার করে নেগরানগণ পরীক্ষার্থীর রোল নম্বর অথবা খাতার QR-CODE স্ক্যান করে সরাসরি পরীক্ষার্থীদের উপস্থিতি গ্রহন করতে পারবেন এবং নেগরানের নিজের উপস্থিতি প্রদান করতে পারবেন। এছাড়াও অ্যাপটি মৌখিক পরীক্ষার নম্বর এন্ট্রি এবং মুমতাহিন কর্তৃক QR-CODE স্ক্যান করে উত্তর পত্রের প্রাপ্ত নম্বর সরাসরি সিস্টেমে এন্ট্রি করার সুযোগ রয়েছে।
            </VCardText>

            <VDivider />

            <VCardText class="d-flex justify-space-between align-center mt-4">
              <div class="text-start">
                <p class="d-flex align-center mb-4">
                  <VIcon
                    color="primary"
                    icon="ri-timer-2-line"
                  />
                  <span class="ms-3">নিবন্ধনের সময় শুরু</span>
                </p>
                <p class="d-flex align-center">
                  <VIcon
                    color="primary"
                    icon="ri-timer-2-line"
                  />
                  <span class="ms-3">নিবন্ধনের সময় শেষ</span>
                </p>
              </div>
              <VDivider vertical />
              <div class="text-end">
                <p class="d-flex align-center mb-4">
                  <VIcon
                    color="primary"
                    icon="ri-calendar-line"
                  />
                  <span class="ms-3">০৪/০৫/২০২৪ ইসাঈ</span>
                </p>
                <p class="d-flex align-center">
                  <VIcon
                    color="primary"
                    icon="ri-calendar-line"
                  />
                  <span class="ms-3">০৪/০৫/২০২৪ ইসাঈ</span>
                </p>
              </div>
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            lg="5"
            class="bg-light text-center py-14 d-flex align-center justify-center"
          >
            <Timer />
          </VCol>
        </VRow>
      </VCard>
    </VCol>
  </VRow>
</template>

<style scoped>
.v-card {
  border-radius: 8px;
}

.v-card-title {
  font-weight: bold;
  font-size: 1.5rem;
}

.v-divider {
  margin: 20px 0;
}

.v-card-text {
  line-height: 1.7;
  font-size: 1rem;
  color: #5c5c5c;
}

.bg-light {
  background-color: #f5f5f5;
}
</style>
