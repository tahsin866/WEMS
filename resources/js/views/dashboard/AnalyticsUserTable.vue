<script setup>
const nibondonDetailes = [
  {
    nibondonDetailes: 'সর্বমোট নিবন্ধনের সংখ্যা',
    students: '৩০ জন',
    paymentStatus: 'পেমেন্ট হয়েছে',
    PaymantWay: 'বিকাশ',
    carbs: '১০০০ টাকা',
  },
  {
    nibondonDetailes: 'নিয়মিত পরীক্ষার্থীর সংখ্যা',
    students: '৩০ জন',
    paymentStatus: 'পেমেন্ট হয়েছে',
    PaymantWay: 'বিকাশ',
    carbs: '৮০০ টাকা',
  },
  {
    nibondonDetailes: 'অনিয়মিত পরীক্ষার্থীর সংখ্যা',
    students: '৩০ জন',
    paymentStatus: 'পেমেন্ট হয়েছে',
    PaymantWay: 'বিকাশ',
    carbs: '৫০০ টাকা',
  },
  {
    nibondonDetailes: 'অন্য বোর্ড থেকে আগত পরীক্ষার্থীর সংখ্যা',
    students: '৩ জন',
    paymentStatus: 'পেমেন্ট হয়েছে',
    PaymantWay: 'বিকাশ',
    carbs: '২০০ টাকা',
  },
  {
    nibondonDetailes: 'বোর্ড দাখিলকৃত নিবন্ধনের সংখ্যা',
    students: '৩০ জন',
    paymentStatus: 'পেমেন্ট হয়েছে',
    PaymantWay: 'বিকাশ',
    carbs: '৩০০০ টাকা',
  },
  {
    nibondonDetailes: 'বোর্ড ফেরত নিবন্ধনের সংখ্যা',
    students: '৩০ জন',
    paymentStatus: 'পেমেন্ট হয়েছে',
    PaymantWay: 'বিকাশ',
    carbs: '৪০০০ টাকা',
  },
  {
    nibondonDetailes: 'নেগরান মুমতাহিন আবেদন সংখ্যা',
    students: '১০ জন',
    paymentStatus: 'পেমেন্ট হয়েছে',
    PaymantWay: 'বিকাশ',
    carbs: '৫০০০ টাকা',
  },
]
</script>

<template>
  <VRow class="mt-5 mb-5 mx-2">
    <VCol
      cols="12"
      sm="4"
    >
      <VSelect
        v-model="selectedNotification"
        density="compact"
        label="Notification"
        :items="['Only when I\'m online', 'Anytime']"
        dense
        outlined
      />
    </VCol>
    <VCol
      cols="12"
      sm="4"
    >
      <VSelect
        v-model="selectedNotification"
        density="compact"
        label="Alert Frequency"
        :items="['Once a Day', 'Weekly']"
        dense
        outlined
      />
    </VCol>
  </VRow>

  <!-- Table Section -->
  <VTable class="elevation-1 rounded-lg">
    <thead class="bg-primary text-white">
      <tr>
        <th class="text-uppercase py-3 px-4 text-center">
          নিবন্ধনের উপাত্ত
        </th>
        <th class="text-uppercase py-3 px-4 text-center">
          সংখ্যা
        </th>
        <th class="text-uppercase py-3 px-4 text-center">
          পেমেন্ট স্ট্যাটাস
        </th>
        <th class="text-uppercase py-3 px-4 text-center">
          পেমেন্ট মাধ্যম
        </th>
        <th class="text-uppercase py-3 px-4 text-center">
          মোট টাকা
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in nibondonDetailes"
        :key="item.nibondonDetailes"
        class="text-center"
      >
        <td class="py-2 px-4">
          {{ item.nibondonDetailes }}
        </td>
        <td class="py-2 px-4">
          {{ item.students }}
        </td>
        <td class="py-2 px-4">
          <VChip
            :color="item.paymentStatus === 'পেমেন্ট হয়েছে' ? 'success' : 'error'"
            class="ma-0"
            dense
          >
            {{ item.paymentStatus }}
          </VChip>
        </td>
        <td class="py-2 px-4">
          {{ item.PaymantWay || 'N/A' }}
        </td>
        <td class="py-2 px-4">
          {{ item.carbs }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>

<style scoped>
.VTable {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

th, td {
  padding: 12px 8px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: var(--v-primary-base);
  color: white;
  text-transform: uppercase;
}

td {
  vertical-align: middle;
}

.VChip {
  padding: 0 10px;
}

.elevation-1 {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.rounded-lg {
  border-radius: 10px;
}

.text-center {
  text-align: center;
}
</style>
