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
                <div class=" text-h5 text-body-1 text-high-emphasis">
                  অন্তর্ভুক্তি
                </div>
                <div>
                  <h5 class="text-h5">
                    ৫০ জন
                  </h5>
                </div>
                <div class="text-body-2">
                  Last Week Analytics
                </div>
              </div>

              <!-- Icon or Avatar Section -->
              <VAvatar
                color="primary"
                size="42"
              >
                <VIcon large>
                  ri-team-fill
                </VIcon>
              </VAvatar>
            </div>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

 ‍<style>
.text-h5{
  font-family: 'SolaimanLipi', sans-serif;
}
</style>
