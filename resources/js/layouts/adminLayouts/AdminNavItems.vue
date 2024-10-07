<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavGroup
    :item="{
      title: 'ড্যাশবোর্ড',
      icon: 'ri-home-4-line',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'ড্যাশবোর্ড',
        to: '/dashboard',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'মারকায আবেদন',
        to: '/MarkajAplly',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'মারকায পরিবর্তন',

      }"
    />
    <VerticalNavLink
      :item="{
        title: 'মারহালা পরিবর্তন',
    

    
     
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'মন্জুরিপত্র আবেদন',
      

    
     
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'পাসওয়ার্ড পরিবর্তন',
     
      }"
    />
  </VerticalNavGroup>

  <!-- 👉 Front Pages -->
  <VerticalNavGroup
    :item="{
      title: 'নিবন্ধন সংক্রান্ত',
      icon: 'ri-graduation-cap-line',
   
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'নিবন্ধন সেটাপ',
 
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'পরীক্ষার্থী নিবন্ধন',
     
        target: '_blank',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'নিবন্ধন পত্র',
    
        target: '_blank',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'পেমেন্ট',
    
        target: '_blank',
      }"
    />
  </VerticalNavGroup>
  <VerticalNavGroup
    :item="{
      title: 'অন্তর্ভূ্ক্তি সংক্রান্ত',
      icon: 'ri-verified-badge-line',
     

    }"
  >
    <VerticalNavLink
      :item="{
        title: 'অন্তর্ভূ্ক্তির তালিকা',
 
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'প্রবেশপত্র',
     
        target: '_blank',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'সনদ তথ্য',
    
        target: '_blank',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'পেমেন্ট',
    
        target: '_blank',
      }"
    />
  </VerticalNavGroup>
  <VerticalNavGroup
    :item="{
      title: 'পরীক্ষার রুটিন',
      icon: 'ri-calendar-check-line',
     

    }"
  >
    <VerticalNavLink
      :item="{
        title: 'লিখিত পরীক্ষার রুটিন',
 
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'মৌখিক পরীক্ষার রুটিন',
     
        target: '_blank',
      }"
    />
  </VerticalNavGroup>
  <VerticalNavGroup
    :item="{
      title: 'নেগরান/মুমতাহিন সংক্রান্ত',
      icon: 'ri-team-line',
     

    }"
  >
    <VerticalNavLink
      :item="{
        title: 'নেগরান/মুমতাহিন আবেদন',
 
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'বিগত আবেদন তালিকা',
     
        target: '_blank',
      }"
    />
  </VerticalNavGroup>
  <VerticalNavGroup
    :item="{
      title: 'মারকায সংক্রান্ত',
      icon: 'ri-school-line',
     

    }"
  >
    <VerticalNavLink
      :item="{
        title: 'মাদরাসার তালিকা',
 
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'প্রশ্নপত্র',
     
        target: '_blank',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'নিয়োগ পত্র',
     
        target: '_blank',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'কভারপেজ',
     
        target: '_blank',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'নেগরান হাজিরা',
     
        target: '_blank',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'পরীক্ষার্থী হাজিরা',
     
        target: '_blank',
      }"
    />
  </VerticalNavGroup>

  <VerticalNavLink
    :item="{
      title: 'প্রয়োজনীয় ডকুমেন্টস',
      icon: 'ri-article-line',

    }"
  />
  <VerticalNavGroup
    :item="{
      title: 'রিপোর্টস',
      icon: 'ri-file-chart-line',
     

    }"
  >
    <VerticalNavLink
      :item="{
        title: 'রিপোর্টস',
 
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'বিগত আবেদন তালিকা',
     
        target: '_blank',
      }"
    />
  </VerticalNavGroup>

  <VerticalNavLink
    :item="{
      title: 'সাপোর্ট',
      icon: 'ri-customer-service-2-line.',

    }"
  />


  <VerticalNavLink
    :item="{
      title: 'Chat',
      icon: 'ri-wechat-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-laravel-admin-template/demo-1/apps/chat',
      target: '_blank',
      badgeContent: 'Pro',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Calendar',
      icon: 'ri-calendar-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-laravel-admin-template/demo-1/apps/calendar',
      target: '_blank',
      badgeContent: 'Pro',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Kanban',
      icon: 'ri-drag-drop-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-laravel-admin-template/demo-1/apps/kanban',
      target: '_blank',
      badgeContent: 'Pro',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Account Settings',
      icon: 'ri-user-settings-line',
      to: '/account-settings',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Login',
      icon: 'ri-login-box-line',
      to: '/login',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Register',
      icon: 'ri-user-add-line',
      to: '/register',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Error',
      icon: 'ri-information-line',
      to: '/no-existence',
    }"
  />

  <!-- 👉 User Interface -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'User Interface',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Typography',
      icon: 'ri-text',
      to: '/typography',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Icons',
      icon: 'ri-remixicon-line',
      to: '/icons',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Cards',
      icon: 'ri-bar-chart-box-line',
      to: '/cards',
    }"
  />

  <!-- 👉 Forms & Tables -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Forms & Tables',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Form Layouts',
      icon: 'ri-layout-4-line',
      to: '/form-layouts',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Form Validation',
      icon: 'ri-checkbox-multiple-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-laravel-admin-template/demo-1/forms/form-validation',
      target: '_blank',
      badgeContent: 'Pro',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Form Wizard',
      icon: 'ri-git-commit-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-laravel-admin-template/demo-1/forms/form-wizard-numbered',
      target: '_blank',
      badgeContent: 'Pro',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Tables',
      icon: 'ri-table-alt-line',
      to: '/tables',
    }"
  />

  <!-- 👉 Others -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Others',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Access Control',
      icon: 'ri-shield-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-laravel-admin-template/demo-1/access-control',
      target: '_blank',
      badgeContent: 'Pro',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Documentation',
      icon: 'ri-article-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/guide/laravel-integration/folder-structure.html',
      target: '_blank',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Raise Support',
      href: 'https://github.com/themeselection/materio-vuetify-vuejs-laravel-admin-template-free/issues',
      icon: 'ri-lifebuoy-line',
      target: '_blank',
    }"
  />
</template>
