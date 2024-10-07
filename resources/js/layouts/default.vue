<script setup>
import AdminDefault from './components/AdminDefault.vue'
import DefaultLayoutWithVerticalNav from './components/DefaultLayoutWithVerticalNav.vue'

// Importing Vue features
import { ref, computed } from 'vue'

// Reactive state for user roles
const userRole = ref('user') // This should be set dynamically

// Define if the current role is User or Admin
const isUser = computed(() => userRole.value === 'user')
const isAdmin = computed(() => userRole.value === 'admin')
</script>

<template>
  <div>
    <!-- Conditionally render layouts based on user roles -->
    <DefaultLayoutWithVerticalNav v-if="isUser">
      <RouterView />
    </DefaultLayoutWithVerticalNav>

    <AdminDefault v-if="isAdmin">
      <RouterView />
    </AdminDefault>
  </div>
</template>

<style lang="scss">
// Import the default layout styles
@use "@layouts/styles/default-layout";
</style>
