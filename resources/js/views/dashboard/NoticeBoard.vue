
<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'

const notices = [
  {
    avatar: avatar1,
    title: 'নিবন্ধনের সময়সূচী বৃদ্ধী করা হয়েছে',
    description: 'আগামী ৬ই জুন থেকে নিবন্ধনের সময়সূচী বৃদ্ধি করা হয়েছে। দয়া করে নতুন সময়সূচী অনুযায়ী নিবন্ধন করুন।',
    date: '05/05/2023',
  },
  {
    avatar: avatar2,
    title: 'পরীক্ষার সময় পরিবর্তন',
    description: 'আগামী ১০ই জুনের পরীক্ষার সময় পরিবর্তন করে দুপুর ২টায় নির্ধারণ করা হয়েছে।',
    date: '03/06/2023',
  },
]
</script>


<template>
  <VCard>
    <!-- VCard Header with customized color -->
    <VCardTitle style="background-color: #243b55; color: white;">
      <form class="d-flex justify-content-end">
        <!-- Adjusted alignment of the button -->
        <h5 class="text-white">
          নোটিস বোর্ড
        </h5>
      </form>
    </VCardTitle>
    <VList>
      <template
        v-for="(notice, index) in notices"
        :key="notice.title"
      >
        <VListItem class="py-3">
          <template #prepend>
            <!-- Avatar Image -->
            <VAvatar
              :image="notice.avatar"
              size="40"
              class="me-4"
            />
          </template>

          <!-- Notice Title & Description -->
          <VListItemTitle
            style="font-family: 'SolaimanLipi', sans-serif; "
            class="font-weight-bold text-h6"
          >
            {{ notice.title }}
          </VListItemTitle>
          <VListItemSubtitle
            style="font-family: 'SolaimanLipi', sans-serif; "
            class="mt-2 text-body-2"
          >
            {{ notice.description }}
          </VListItemSubtitle>

          <!-- Date -->
          <VListItemSubtitle
            style="font-family: 'SolaimanLipi', sans-serif; "
            class="mt-1 text-xs text-disabled"
          >
            প্রকাশিত: {{ notice.date }}
          </VListItemSubtitle>

          <!-- "Read More" Button -->
          <template #append>
            <VBtn
              variant="tonal"
              color="primary"
              size="small"
              class="read-more-btn"
            >
              বিস্তারিত দেখুন
            </VBtn>
          </template>
        </VListItem>

        <!-- Divider between notices -->
        <VDivider v-if="index !== notices.length - 1" />
      </template>
    </VList>
  </VCard>
</template>



<style scoped>
.timer-heading {
  font-family: 'SolaimanLipi', sans-serif; /* Use the same font as before */
  color: #2a9d8f; /* Adjust color for the header */
}

.text-primary {
  color: #2a9d8f; /* Ensure this matches your previous design */
}

.text-h6 {
  font-size: 1.125rem;
}

.text-body-2 {
  font-size: 0.875rem;
}

.text-disabled {
  color: #b0b0b0;
}

.read-more-btn {
  font-size: 0.875rem;
  text-transform: none;
  padding: 0 10px;
}

.VListItem {
  align-items: flex-start;
}

.VAvatar {
  border: 2px solid #21867a; /* Add a border to the avatar */
}
</style>
