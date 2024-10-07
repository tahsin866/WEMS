<template>
  <VCard>
    <div class=" mx-10 mt-5 mb-8">
      <VBtn>
        new product
      </VBtn>
    </div>
    <VDivider />
    <VCardText>
      <VRow class="mt-4">
        <!-- Left Column for Product Details -->
        <VCol
          cols="12"
          lg="8"
        >
          <VCard
            outlined
            class="bordered-card p-4"
          >
            <div class="mt-5 mb-5 mx-5">
              <VTextField
                v-model="productTitle"
                label="Product Title"
                placeholder="Enter product title"
                dense
              />
            </div>
            <div class="mx-5 mb-8 mt-10">
              <VTextarea
                v-model="productDescription"
                label="Description"
                rows="3"
                placeholder="Enter product description"
                dense
              />
            </div>
            <VFileInput
              label="Product Images"
              multiple
              accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf"
              show-size
            />
          </VCard>
        </VCol>

        <!-- Right Column for Product Pricing and Other Info -->
        <VCol
          cols="12"
          lg="4"
        >
          <VCard
            outlined
            class="bordered-card p-4"
          >
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="price"
                  label="Price"
                  placeholder="00.00"
                  dense
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="compareAtPrice"
                  label="Compare at Price"
                  placeholder="00.00"
                  dense
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="costPerPrice"
                  label="Cost Per Price"
                  placeholder="00.00"
                  dense
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="starPoints"
                  label="Star Points"
                  placeholder="00.00"
                  dense
                />
              </VCol>
              <VCol cols="12">
                <VSelect
                  v-model="productType"
                  :items="productTypes"
                  label="Product Type"
                  dense
                />
              </VCol>
              <VCol cols="12">
                <VSelect
                  v-model="vendor"
                  :items="vendors"
                  label="Vendor"
                  dense
                />
              </VCol>
              <VCol cols="12">
                <VSelect
                  v-model="collection"
                  :items="collections"
                  label="Collection"
                  dense
                />
              </VCol>
              <VCol cols="12">
                <VTextField
                  v-model="productTags"
                  label="Product Tags"
                  placeholder="Enter product tags"
                  dense
                />
              </VCol>
              <VCol cols="12">
                <VBtn
                  color="primary"
                  block
                  @click="saveProduct"
                >
                  Save Product
                </VBtn>
              </VCol>
            </VRow>
          </VCard>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<script setup>
import { ref } from 'vue'

// Form data
const productTitle = ref('')
const productDescription = ref('')
const price = ref('')
const compareAtPrice = ref('')
const costPerPrice = ref('')
const starPoints = ref('')
const productType = ref(null)
const vendor = ref(null)
const collection = ref(null)
const productTags = ref('')

// Dropdown options
const productTypes = ref(['One', 'Two', 'Three'])
const vendors = ref(['One', 'Two', 'Three'])
const collections = ref(['One', 'Two', 'Three'])

// Save product function
const saveProduct = () => {
  // logic to save the product
  console.log('Product saved', {
    productTitle,
    productDescription,
    price,
    compareAtPrice,
    costPerPrice,
    starPoints,
    productType,
    vendor,
    collection,
    productTags,
  })
}
</script>

<style scoped>
.bordered-card {
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
