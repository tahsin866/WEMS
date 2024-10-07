<script setup>
import AnalyticsAward from '@/views/dashboard/AnalyticsAward.vue'
import Registration from '@/views/dashboard/regisTration.vue'
import AnalyticsDepositWithdraw from '@/views/dashboard/nibondonDetailesWithtimer.vue'
import AnalyticsTransactions from '@/views/dashboard/NibondonDetailes.vue'
import Nibondon from '@/views/dashboard/Nibondon.vue'
import ReturnFromBoard from '@/views/dashboard/ReturnFromBoard.vue'
import NoticeBoard from '@/views/dashboard/NoticeBoard.vue'
import Chat from '@/views/dashboard/chat.vue'
</script>

<template>
  <VRow class="match-height">
    <VCol
      cols="12"
      md="3"
    >
      <Nibondon />
    </VCol>
    <VCol
      cols="12"
      md="3"
    >
      <Registration />
    </VCol>
    <VCol
      cols="12"
      md="3"
    >
      <ReturnFromBoard />
    </VCol>
    <VCol
      cols="12"
      md="3"
    >
      <AnalyticsAward />
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
  </vrow>
</template>
