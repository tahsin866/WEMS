<template>
  <VCard>
    <div class="v-card-text px-2">
      <div class="v-row">
        <!-- Card 1 -->
        <div class="v-col-sm-6 v-col-md-3 v-col-12 px-6">
          <div class="d-flex justify-space-between border-b pb-4">
            <div class="d-flex flex-column gap-y-1">
              <h4 class="text-h4">
                56
              </h4>
              <span class="text-base text-capitalize text-warning">পেমেন্ট বাকি</span>
            </div>
            <div
              class="v-avatar v-theme--light v-avatar--density-default v-avatar--rounded v-avatar--variant-tonal"
              style="width: 42px; height: 42px;"
            >
              <i
                class="ri-wallet-3-line v-icon notranslate v-theme--light"
                aria-hidden="true"
                style="font-size: 26px; height: 26px; width: 26px;"
              />
              <span class="v-avatar__underlay" />
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="v-col-sm-6 v-col-md-3 v-col-12 px-6">
          <div class="d-flex justify-space-between border-b pb-4">
            <div class="d-flex flex-column gap-y-1">
              <h4 class="text-h4">
                12
              </h4>
              <span class="text-base text-capitalize text-warning">সংযুক্তি বাকি</span>
            </div>
            <div
              class="v-avatar v-theme--light v-avatar--density-default v-avatar--rounded v-avatar--variant-tonal"
              style="width: 42px; height: 42px;"
            >
              <i
                class="ri-attachment-line v-icon notranslate v-theme--light"
                aria-hidden="true"
                style="font-size: 26px; height: 26px; width: 26px;"
              />
              <span class="v-avatar__underlay" />
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="v-col-sm-6 v-col-md-3 v-col-12 px-6">
          <div class="d-flex justify-space-between border-b pb-4">
            <div class="d-flex flex-column gap-y-1">
              <h4 class="text-h4">
                124
              </h4>
              <span class="text-base text-capitalize text-warning">বোর্ড ফেরত</span>
            </div>
            <div
              class="v-avatar v-theme--light v-avatar--density-default v-avatar--rounded v-avatar--variant-tonal"
              style="width: 42px; height: 42px;"
            >
              <i
                class="ri-arrow-left-right-fill v-icon notranslate v-theme--light "
                aria-hidden="true"
                style="font-size: 26px; height: 26px; width: 26px;"
              />
              <span class="v-avatar__underlay" />
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="v-col-sm-6 v-col-md-3 v-col-12 px-6">
          <div class="d-flex justify-space-between border-b pb-4">
            <div class="d-flex flex-column gap-y-1">
              <h4 class="text-h4">
                124
              </h4>
              <span class="text-base text-capitalize text-warning">বাতিল</span>
            </div>
            <div
              class="v-avatar v-theme--light v-avatar--density-default v-avatar--rounded v-avatar--variant-tonal"
              style="width: 42px; height: 42px;"
            >
              <i
                class="ri-user-unfollow-line v-icon notranslate v-theme--light"
                aria-hidden="true"
                style="font-size: 26px; height: 26px; width: 26px;"
              />
              <span class="v-avatar__underlay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </VCard>
</template>

<script>
export default {
  name: "TransactionOverview",
}
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
