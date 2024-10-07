<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

// Import necessary components
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import logo from '@images/logo.svg?raw'




// Set CSRF Token
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

// Form state
const form = ref({
  email: '',
  password: '',
  remember: false,
})

// Password visibility state
const isPasswordVisible = ref(false)

// Vue Router instance
const router = useRouter()

// Login function
const login = async () => {
  try {
    // Send the login request to the Laravel API
    const response = await axios.post('/login', form.value)

    // If login is successful
    if (response.status === 200) {
      // Redirect to the dashboard
      router.push('/dashboard')
    }
  } catch (error) {
    // Log error for debugging
    if (error.response && error.response.data.message) {
      console.error('Login failed:', error.response.data.message)
    } else {
      console.error('Login failed:', error)
    }
  }
}
</script>

<template>
  <div style="position: relative; top: 100px;">
    <div class="d-flex justify-center mt-5">
      <h1>বেফাকুল মাদারসিল আরাবিয়া বাংলাদেশ</h1>
    </div>
    <div class="d-flex justify-center">
      <h3>(বাংলাদেশ কওমী মাদরাসা শিক্ষাবোর্ড)</h3>
    </div>
  </div>
  <div class="auth-wrapper d-flex align-center justify-center pa-10">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <RouterLink
          to="/"
          class="d-flex align-center gap-3"
        >
          <div
            class="d-flex"
            v-html="logo"
          />
          <h2 class="font-weight-medium text-2xl text-uppercase">
            WEMS
          </h2>
        </RouterLink>
      </VCardItem>

      <VCardText>
        <VForm @submit.prevent="login">
          <VRow>
            <!-- Email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="কোড/ আইডি"
                type="email"
                required
              />
            </VCol>

            <!-- Password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="পাসওয়ার্ড"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                required
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
            </VCol>

            <!-- Remember me checkbox -->
            <div class="d-flex align-center justify-space-between flex-wrap my-6">
              <VCheckbox
                v-model="form.remember"
                label="Remember me"
              />
              <a
                class="text-primary"
                href="javascript:void(0)"
              >
                Forgot Password?
              </a>
            </div>

            <!-- Login button -->
            <VCol cols="12">
              <VBtn
                block
                type="submit"
                to="dashboard"
              >
                লগইন
              </VBtn>
            </VCol>

            <!-- Create account link -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>মাদরার জন্য একাউন্ট খুলুন</span>
              <RouterLink
                class="text-primary ms-2"
                to="/register"
              >
                নতুন একাউন্ট তৈরি করুন
              </RouterLink>
            </VCol>

            <!-- Auth providers -->
            <VCol
              cols="12"
              class="text-center"
            >
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth";
</style>
