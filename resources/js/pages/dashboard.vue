<script setup>
import AnalyticsDepositWithdraw from '@/views/dashboard/nibondonDetailesWithtimer.vue'
import AnalyticsTransactions from '@/views/dashboard/NibondonDetailes.vue'
import NoticeBoard from '@/views/dashboard/NoticeBoard.vue'
import Chat from '@/views/dashboard/chat.vue'

import ShortAnalytic from '@/views/dashboard/shortAnalytic.vue'
</script>

<template>
  <VRow class="match-height">
    <VCol
      cols="12"
      md="12"
    >
      <ShortAnalytic />
    </VCol>
  
    <VCol
      cols="12"
      md="12"
    >
      <AnalyticsDepositWithdraw />
    </VCol>

    <VCol
      cols="12"
      md="12"
    >
      <AnalyticsTransactions />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <NoticeBoard />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <Chat />
    </VCol>
  </VRow>
</template>
