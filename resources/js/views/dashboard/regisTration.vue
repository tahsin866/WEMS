<script setup>
import graduated from '@images/avatars/graduated.png'
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
      md="12"
    >
      <VCard
        class="elevation-2"
        outlined
      >
        <VCardText>
          <div class="d-flex justify-space-between align-center">
            <!-- Information Section -->
            <div class="d-flex flex-column gap-y-1">
              <div class="text-body-1 text-high-emphasis">
                বোর্ড ফেরত
              </div>
              <div>
                <h5 class="text-h5">
                  237
                  <span class="text-base text-success">(+42%)</span>
                </h5>
              </div>
              <div class="text-body-2 grey--text">
                Last Week Analytics
              </div>
            </div>

            <!-- Icon or Avatar Section -->
            <VAvatar
              color="warning"
              size="56"
              class="ml-3 shadow"
            >
              <VIcon large>
                ri-user-add-line
              </VIcon>
            </VAvatar>
          </div>
        </VCardText>

        <!-- Custom Button -->
        <VCardActions>
          <VBtn
            class="custom-button"
            @click="handleButtonClick"
          >
            Custom Action
          </VBtn>
        </VCardActions>
      </VCard>
    </VCol>
  </VRow>
</template>

<style scoped>
.text-h5 {
  font-family: 'SolaimanLipi', sans-serif;
  font-weight: 600; /* Use a bolder font weight */
  margin: 0; /* Remove default margin */
}

.v-card {
  border-radius: 12px; /* More rounded corners */
  padding: 16px; /* Inner padding for better spacing */
}

.shadow {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); /* Subtle shadow for the avatar */
}

/* Custom Button Style */
.custom-button {
  border: 2px solid #4CAF50; /* Change this color to your desired border color */
  color: #4CAF50; /* Change button text color */
  background-color: transparent; /* Make background transparent */
  border-radius: 20px; /* Rounded corners */
}

.custom-button:hover {
  background-color: rgba(76, 175, 80, 0.1); /* Light background on hover */
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .v-avatar {
    size: 48; /* Smaller avatar on mobile */
  }
}
</style>
