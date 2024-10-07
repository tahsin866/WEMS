<script setup>
import NavItems from '@/layouts/components/NavItems.vue'
import logo from '@images/logo.svg?raw'
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
</script>

<template>
  <VCard>
    <div class="fixed-top">
      <nav>
        <VerticalNavLayout>
          <!-- 👉 navbar -->
          <template #navbar="{ toggleVerticalOverlayNavActive }">
            <div class="d-flex h-100 align-center">
              <!-- 👉 Vertical nav toggle in overlay mode -->

      

              <IconBtn
                class="ms-n3 d-lg-none"
                @click="toggleVerticalOverlayNavActive(true)"
              >
                <VIcon icon="ri-menu-line" />
              </IconBtn>

              <VBtn 
                size="small"
                color="primary"
                variant="tonal"
              >
                <VIcon
                   
                  start
                  icon="ri-arrow-left-line"
                />পেছনে যাই
              </VBtn>


              <div style=" position: relative; left: 400px;">
                <h3 class="text-center text-warning ">
                  জামিয়া আরাবিয়া ইমদাদুল উলুম ফরিদাবাদ ঢাকা-১২৩৬ (WA02323)
                </h3>
              </div>


              <VSpacer />
              <IconBtn size="small">
                <VIcon icon="ri-chat-2-line" />
              </IconBtn>

              <IconBtn size="small">
                <VIcon icon="ri-notification-line" />
              </IconBtn>

              <NavbarThemeSwitcher class="me-2" />

              <UserProfile />
            </div>
          </template>

          <template #vertical-nav-header="{ toggleIsOverlayNavActive }">
            <RouterLink
              to="/dashboard"
              class="app-logo app-title-wrapper"
            >
              <!-- eslint-disable vue/no-v-html -->
              <div class="d-flex" />
              <!-- eslint-enable -->

              <h4 class="font-weight-bold leading-normal  text-uppercase">
                বেফাকুল মাদারিসিল আরাবিয়া
              </h4>
            </RouterLink>

            <IconBtn
              class="d-block d-lg-none"
              @click="toggleIsOverlayNavActive(false)"
            >
              <VIcon icon="ri-close-line" />
            </IconBtn>
          </template>

          <template #vertical-nav-content>
            <NavItems />
          </template>

          <!-- 👉 Pages -->
          <slot />

          <!-- 👉 Footer -->
          <template #footer>
            <Footer />
          </template>
        </VerticalNavLayout>
      </nav>
    </div>
  </VCard>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}

.app-logo {
  display: flex;
  align-items: center;
  column-gap: 0.75rem;

  .app-logo-title {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.75rem;
    text-transform: uppercase;
  }

  nav.fixed-top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Ensure the navbar is above other elements */
  background-color: white; /* Optional: Keep the navbar background visible */
}
.mx-5{
  position: relative;
  justify-content: center;
}


}
</style>
