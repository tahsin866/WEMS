<script setup>
import MonjuriApplyForm from './MonjuriApplyForm.vue'

const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
 
]
</script>

<template>
  <VCard>
    <VRow>
      <VCol cols="12">
        <VCard>
          <VCardTitle style="background-color: #243b55; color: white;">
            <VBtn
         
              size="small"
              color="primary"
              to="/MarhalaChangeTable"
            >
              <span class="d-none d-sm-block">ফরম পূরন করুন</span>
            </VBtn>
          </VCardTitle>
      

          <VDivider />

          <VCardText>
            <VTable>
              <thead>
                <tr>
                  <th class="text-uppercase">
                    আবেদন নং
                  </th>
                  <th class="text-uppercase">
                    আবেদনের তারিখ
                  </th>
                  <th class="text-uppercase">
                    মাদরাসার নাম
                  </th>
                  <th class="text-uppercase">
                    বর্তমান সর্বোচ্চ মারহালা
                  </th>
                  <th class="text-uppercase">
                    নতুন  সর্বোচ্চ মারহালা
                  </th>
                  <th class="text-uppercase">
                    মোট শিক্ষার্থী
                  </th>
                  <th class="text-uppercase">
                    পেমেন্ট স্ট্যাটাস
                  </th>
                  <th class="text-uppercase">
                    আবেদন অবস্থা
                  </th>
                  <th class="text-uppercase">
                    করনীয়
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="item in desserts"
                  :key="item.dessert"
                >
                  <td>12568</td>
                  <td>05/09/2023</td>
                  <td>জামিয়া আরাবিয়া ইমদাদুল উলুম ফরিদবাদ ঢাকা</td>
                  <td>
                    মুতাওয়াসিসতা
                  </td>
                  <td>
                    ফযীলত
                  </td>
                  <td>
                    ৩০০ জন
                  </td>
                  <td>
                    <VChip
                      color="error"
                      label=""
                    >
                      পেমেন্ট হয়নি
                    </VChip>
                  </td>
                  <td>
                    <VChip
                      color="success"
                      label=""
                    >
                      আবেদন মন্জুর হয়েছে
                    </VChip>
                  </td>
                  <td>
                    <div class="d-flex gap-1">
                      <VBtn
                        variant="tonal"
                        size="small"
                        @click="editItem(item)"
                      >
                        <VIcon icon="ri-send-plane-fill" />
                      </VBtn>
                      <VBtn
                        variant="tonal"
                        color="info"
                        size="small"
                        @click="editItem(item)"
                      >
                        <VIcon icon="ri-eye-fill" />
                      </VBtn>
                      <VBtn
                        variant="tonal"
                        to="delete"
                        color="error"
                        size="small"
                        @click="deleteItem(item)"
                      >
                        <VIcon icon="ri-delete-bin-line" />
                      </VBtn>
                    </div>
                  </td>
                </tr>
              </tbody>
            </VTable>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VCard>

  <div class="mt-5"> 
    <MonjuriApplyForm />
  </div>
</template>
