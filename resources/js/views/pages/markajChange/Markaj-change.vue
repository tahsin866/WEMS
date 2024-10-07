<script setup>
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
    <!-- VCard Header with customized color -->
    <VCardTitle style="background-color: #243b55; color: white;">
      <form class="d-flex justify-content-end">
        <!-- Adjusted alignment of the button -->
        <VBtn
       
          size="small"
          color="primary"
          to="/markajChangeApplyForm"
        >
          আবেদন করুন
        </VBtn>
      </form>
    </VCardTitle>

    <VRow>
      <VCol cols="12">
        <VCard>
          <!-- Form Section -->
         
          <!-- Divider between form and table -->
          <VDivider />

          <!-- Table Section -->
          <VCardText>
            <VTable>
              <!-- Updated header for better visual appearance -->
              <thead style="background-color: #f1c40f; color: white;">
                <tr>
                  <th class="text-uppercase">
                    আবেদন নং
                  </th>
                  <th class="text-uppercase">
                    আবেদনের তারিখ
                  </th>
                  <th class="text-uppercase">
                    আবেদনের বিস্তারিত
                  </th>
                  <th class="text-uppercase">
                    মন্তব্য
                  </th>
                  <th class="text-uppercase">
                    স্ট্যাটাস
                  </th>
                  <th class="text-uppercase">
                    করনীয়
                  </th>
                </tr>
              </thead>

              <!-- Dynamic table data -->
              <tbody>
                <tr
                  v-for="item in desserts"
                  :key="item.dessert"
                >
                  <td>55568</td>
                  <td>05/05/2023</td>
                  <td>{{ item.fat }}</td>
                  <td>
                    <VBadge
                      dot
                      color="primary"
                    >
                      <VIcon
                        size="25"
                        icon="ri-message-2-line"
                      />
                    </VBadge>
                  </td>
                  <td>
                    <VChip
                      label
                      color="success"
                    >
                      মন্জুর হেয়েছে
                    </VChip>
                  </td>
                  <td>
                    <div class="d-flex gap-1">
                      <!-- Button 1 -->
                      <VBtn
                        variant="tonal"
                        size="small"
                        @click="editItem(item)"
                      >
                        <VIcon icon="ri-send-plane-fill" />
                      </VBtn>
                      <!-- Button 2 -->
                      <VBtn
                        variant="tonal"
                        color="info"
                        size="small"
                        @click="editItem(item)"
                      >
                        <VIcon icon="ri-eye-fill" />
                      </VBtn>
                      <!-- Button 3 -->
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
</template>
