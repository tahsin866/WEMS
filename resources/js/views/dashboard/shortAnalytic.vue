<template>
  <VCard class="transaction-card">
    <div class="v-card-text px-4">
      <div class="v-row">
        <!-- Card 1 -->
        <div class="v-col-sm-6 v-col-md-3 v-col-12 mb-4">
          <div class="d-flex justify-space-between align-center border-b pb-4">
            <div class="d-flex flex-column gap-y-1">
              <h4 class="text-h4 font-weight-bold">
                56
              </h4>
              <span class="text-base text-capitalize text-muted">পেমেন্ট বাকি</span>
            </div>
            <div class="v-avatar icon-avatar">
              <i
                class="ri-wallet-3-line v-icon"
                aria-hidden="true"
              />
              <span class="v-avatar__underlay" />
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="v-col-sm-6 v-col-md-3 v-col-12 mb-4">
          <div class="d-flex justify-space-between align-center border-b pb-4">
            <div class="d-flex flex-column gap-y-1">
              <h4 class="text-h4 font-weight-bold">
                12
              </h4>
              <span class="text-base text-capitalize text-muted">সংযুক্তি বাকি</span>
            </div>
            <div class="v-avatar icon-avatar">
              <i
                class="ri-attachment-line v-icon"
                aria-hidden="true"
              />
              <span class="v-avatar__underlay" />
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="v-col-sm-6 v-col-md-3 v-col-12 mb-4">
          <div class="d-flex justify-space-between align-center border-b pb-4">
            <div class="d-flex flex-column gap-y-1">
              <h4 class="text-h4 font-weight-bold">
                124
              </h4>
              <span class="text-base text-capitalize text-muted">বোর্ড ফেরত</span>
            </div>
            <div class="v-avatar icon-avatar">
              <i
                class="ri-arrow-left-right-fill v-icon"
                aria-hidden="true"
              />
              <span class="v-avatar__underlay" />
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="v-col-sm-6 v-col-md-3 v-col-12 mb-4">
          <div class="d-flex justify-space-between align-center border-b pb-4">
            <div class="d-flex flex-column gap-y-1">
              <h4 class="text-h4 font-weight-bold">
                124
              </h4>
              <span class="text-base text-capitalize text-muted">বাতিল</span>
            </div>
            <div class="v-avatar icon-avatar">
              <i
                class="ri-user-unfollow-line v-icon"
                aria-hidden="true"
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
.transaction-card {
  background-color: #f9f9f9; /* Light background for contrast */
  border-radius: 8px; /* Rounded corners for a modern look */
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.icon-avatar {
  background-color: #fff; /* Background for the icon */
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-h4 {
  font-family: 'SolaimanLipi', sans-serif; /* Use your specific font */
  color: #333; /* Darker color for better readability */
}

.text-base {
  color: #888; /* Muted color for secondary text */
}

.border-b {
  border-bottom: 1px solid #e0e0e0; /* Light border for separation */
}

.mb-4 {
  margin-bottom: 16px; /* Bottom margin for spacing */
}
</style>
