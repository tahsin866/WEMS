<script setup>
import RegStutas from './regStutas.vue'

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
    <RegStutas />
  </div>

  <div class="mb-5">
    <VCard>
      <!-- 👉 Styled Header -->
      <div
        class="header-background  mb-10"
        style="background-color:#243b55;  border-radius: 4px 4px 0 0;"
      >
        <VRow>
          <VCol
            class="mx-5 mt-5"
            cols="12"
            md="2"
          >
            <h4 class="text-warning">
              মোট নেগরান মুমতাহিন আবেদন সংখ্যা
            </h4>
          </VCol>
          <VCol
            cols="12"
            md="2"
          />
          <VCol
            class="mt-5"
            cols="12"
            md="3"
          >
            <h4 class="text-white">
              ৪৮তম কেন্দ্রীয় পরীক্ষা: নেগরান মুমতাহিন
            </h4>
          </VCol>
          <VCol
            class="d-flex mt-5"
            style="position: relative; left: 300px;"
            cols="12"
            md="2"
          >
            <VBtn 
              to="OldStudentRagistration"
              size="small"
              class="mx-5"
              color="warning"
            >
              নিবন্ধন করুন
              <VIcon
                end
                icon="ri-add-circle-line"
              />
            </VBtn>
            <VBtn 
          
              size="small"
            
              color="success"
            >
              ইম্পোর্ট করুন
              <VIcon
                end
                icon="ri-folder-upload-line"
              />
            </VBtn>
          </VCol>
        </VRow>
      </div>

      <!-- Divider -->


      <!-- Form Section -->
      <div class="mb-5 mx-5">
        <VRow>
          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              v-model="search"
              label="কোড"
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
            md="4"
          >
            <VTextField
              v-model="search"
              label="মোবাইল নম্বর"
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
            md="4"
          >
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
        <!-- 👉 Styled Header Section -->
        <VCard>
          <div
            class="header-background"
            style="background-color: #243b55;  border-radius: 4px 4px 0 0;"
          >
            <VRow>
              <VCol
                class="mx-8 mb-5 mt-5"
                cols="12"
                md="2"
              >
                <h4 class="text-warning">
                  মোট নিবন্ধিত ছাত্র সংখ্যা:
                </h4>
              </VCol>
              <VCol
                cols="12"
                md="2"
              />
              <VCol
                cols="12"
                md="2"
              >
                <h4 class="text-warning mt-5">
                  ৪৮তম কেন্দ্রীয় পরীক্ষা: মুতাওয়াসসিতা
                </h4>
              </VCol>
              <VCol
                style="position: relative; left: 300px;"
                class="d-flex mt-5"
                cols="12"
                md="2"
              >
                <VBtn 
              
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
          </div>



          <!-- 👉 Table Section -->
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
                        size="small"
                        @click="editItem(item)"
                      >
                        <VIcon icon="ri-send-plane-fill" />
                      </VBtn>
                      <VBtn
                        variant="tonal"
                        to="delete"
                        color="warning"
                        size="small"
                        @click="deleteItem(item)"
                      >
                        <VIcon icon="ri-arrow-down-line" />
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
</template>
