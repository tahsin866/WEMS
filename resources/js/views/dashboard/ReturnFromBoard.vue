<script setup>
import graduated from '@images/avatars/graduated.png'

</script>

<template>
  <VContainer>
    <VRow>
      <VCol
        cols="12"
        sm="6"
        md="12"
      >
        <VCard class="elevation-2">
          <VCardText>
            <div class="d-flex justify-space-between">
              <!-- Information Section -->
              <div class="d-flex flex-column gap-y-1">
                <div class="text-body-1 text-high-emphasis">
                  Pending Users
                </div>
                <div>
                  <h5 class="text-h5">
                    237 
                    <span class="text-base text-success">(+42%)</span>
                  </h5>
                </div>
                <div class="text-body-2">
                  Last Week Analytics
                </div>
              </div>

              <!-- Icon or Avatar Section -->
              <VAvatar
                color="warning"
                size="42"
              >
                <VIcon large>
                  ri-user-add-line
                </VIcon>
              </VAvatar>
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>


