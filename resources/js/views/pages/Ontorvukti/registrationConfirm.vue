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
  <div class="mb-5">
    <VCard>
      <VCardText class="d-flex">
        <h3 class="text-warning">
          অন্তর্ভুক্তির তালিকা
        </h3>
      </VCardText>
      <VDivider />
      <div class="mb-5 mx-5">
        <VRow>
          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
            <VTextField
              v-model="search"
              label="শিক্ষার্থী/রেজি:/এনআইড/বি আর এন"
              placeholder="Search ..."
              append-inner-icon="ri-search-line"
              single-line
              hide-details
              dense
              outlined
              density="compact"
            />
          </VCol>
          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
            <VSelect
              :items="items"
              label="নিবন্ধন প্রকার"
              placeholder="Select Item"
              eager
              density="compact"
            />
          </VCol>
          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
            <VSelect
              :items="items"
              label="আবেদনের ধরন"
              placeholder="Select Item"
              eager
              density="compact"
            />
          </VCol>
          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
            <VSelect
              :items="items"
              label="নিবন্ধন স্ট্যাটাস"
              placeholder="Select Item"
              eager
              density="compact"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
          </VCol>
          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
          </VCol>
          
          <VCol
            cols="12"
            md="3"
          />


          <VCol
            cols="12"
            md="3"
          >
            <VCol cols="3" />
            <VBtn 
              variant="tonal"
              size="small"
            >
              সার্চ করুন
            </VBtn>
            <VBtn
              variant="tonal"
              size="small"
              class="mx-5"
              color="error"
            >
              রেসেট
            </VBtn>
          </VCol>
        </VRow> 
      </div>
    </VCard>
  </div>




  <VCard>
    <VRow>
      <VCol cols="12">
        <VCard>
          <VRow>
            <VCol
              class="mx-8 mb-5"
              cols="12"
              md="2"
            >
              <VCol cols="2" />
              <h4 class="text-warning">
                মোট নিবন্ধিত ছাত্র সংখ্যা:
              </h4>
            </VCol>
            <VCol
              cols="12"
              md="2"
            >
              <VCol cols="2" />
            </VCol>
            <VCol
              cols="12"
              md="2"
            >
              <VCol cols="3" />
              <h4>৪৮তম কেন্দ্রীয় পরীক্ষা: মুতাওয়াসসিতা</h4>
            </VCol>
         
            <VCol
              style="position: relative; left: 300px;"
              class="d-flex mt-5 "
              cols="12"
              md="2"
            >
              <VCol cols="2" />
              <VBtn 
                variant="tonal"
                size="small"
                class="mx-5"
                color="warning"
              >
                PDF ডাউনলোড
                <VIcon
                  end
                  icon="ri-file-pdf-line"
                />
              </VBtn>
              <VBtn 
                variant="tonal"
                size="small"
              
                color="primary"
              >
                বোর্ড দাখিল
                <VIcon
                  end
                  icon="ri-send-plane-line"
                />
              </VBtn>
            </VCol>
          </VRow>

          <VDivider />

          <VCardText>
            <VTable>
              <thead>
                <tr>
                  <th class="text-uppercase">
                    ক্রমিক নং
                  </th>
                  <th class="text-uppercase">
                    ছবি
                  </th>
                  <th class="text-uppercase">
                    পিতার নাম
                  </th>
                  <th class="text-uppercase">
                    মাদরাসার নাম
                  </th>
                  <th class="text-uppercase">
                    জন্ম-তারিখ
                  </th>
                  <th class="text-uppercase">
                    আবেদনের ধরন
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
                      label=""
                      color="error"
                    >
                      পেমেন্ট হয়নি
                    </VChip>
                  </td>
                  <td>
                    <VChip
                      label=""
                      color="success"
                    >
                      আবেদন মন্জুর হয়েছে
                    </VChip>
                  </td>
                  <td>
                    <div class="d-flex gap-1">
                      <VBtn
                        variant="tonal"
                        color="success"
                        size="small"
                        @click="editItem(item)"
                      >
                        <VIcon icon="ri-send-plane-fill" />
                      </VBtn>
                  
                      <VBtn
                        variant="tonal"
                        to="delete"
                        color="primary"
                        size="small"
                        @click="deleteItem(item)"
                      >
                        <VIcon icon="ri-arrow-down-line" />
                      </VBtn>
                      <VBtn
                        variant="tonal"
                        to="delete"
                        color="info"
                        size="small"
                        @click="deleteItem(item)"
                      >
                        <VIcon icon="ri-draft-line" />
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
