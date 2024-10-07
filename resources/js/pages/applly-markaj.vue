<script setup>
import MarkajFormAgreement from '@/views/pages/markajChange/MarkajFormAgreement.vue'

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
    <!-- Added VCardTitle with a custom background color -->
    <VCardTitle
      class="text-h5"
      style="background-color:
#243b55; color: white;"
    >
      <div class="mx-5 ">
        <VBtn
          size="small"
          variant="outlined"
          color="warning"
          to="/MarkajFormAgreement"
        >
          আবেদন করুন
        </VBtn>
      </div>
    </VCardTitle>



    <VTable>
      <thead style="background-color: #f1c40f; color: white;">
        <tr>
          <th class="text-uppercase">
            আবেদন নং
          </th>
          <th class="text-uppercase">
            মারকাযের ধরন
          </th>
          <th class="text-uppercase">
            মোট মাদরাসা
          </th>
          <th class="text-uppercase">
            মোট শিক্ষার্থী
          </th>
          <th class="text-uppercase">
            স্ট্যাটাস
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
          <td>{{ item.dessert }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.fat }}</td>
          <td>{{ item.carbs }}</td>
          <td>{{ item.protein }}</td>
          <td>
            <div class="d-flex gap-1">
              <VBtn
                size="small"
                to="/MarkajApplyFormEdit "
                @click="editItem(item)"
              >
                <VIcon icon="ri-pencil-line" />
              </VBtn>
              <VBtn
                color="info"
                size="small"
                @click="editItem(item)"
              >
                <VIcon icon="ri-eye-fill" />
              </VBtn>
              <VBtn
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

    <VDialog
      v-model="deleteDialog"
      max-width="500px"
    >
      <VCard title="Are you sure you want to delete this item?">
        <VCardText>
          <div class="d-flex justify-center gap-4">
            <VBtn
              color="error"
              variant="outlined"
              @click="closeDelete"
            >
              Cancel
            </VBtn>
            <VBtn
              color="success"
              variant="elevated"
              @click="deleteItemConfirm"
            >
              OK
            </VBtn>
          </div>
        </VCardText>
      </VCard>
    </VDialog>
  </VCard>
</template>

