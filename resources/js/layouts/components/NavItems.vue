<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'

import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavGroup
    :item="{
      title: 'প্রফাইল',

 
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
        to: '/markaj-Change',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'মারহালা পরিবর্তন',
    
        to: '/MarhalaChange',
    
     
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
    <VerticalNavLink
      :item="{
        title: 'Account Settings',
        icon: 'ri-user-settings-line',
        to: '/account-settings',
      }"
    />
  </VerticalNavGroup>

  <!-- 👉 Front Pages -->
  <VerticalNavGroup
    :item="{
      title: 'নিবন্ধন সংক্রান্ত',
     
   
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'পরীক্ষার্থী নিবন্ধন',
        to: '/studentRegMarhalaList',
       
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'নিবন্ধন পত্র',
        to: '/regCard',
 
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'পেমেন্ট',
    
        to:'/payment',
      }"
    />
  </VerticalNavGroup>
  <VerticalNavGroup
    :item="{
      title: 'অন্তর্ভূ্ক্তি সংক্রান্ত',



    }"
  >
    <VerticalNavLink
      :item="{
        title: 'অন্তর্ভূ্ক্তির তালিকা',
        to:'/registrationConfirm'
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'প্রবেশপত্র',
     
        to: 'admitCard',
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
    
        to:'regConfirmPayment',
      }"
    />
  </VerticalNavGroup>
 
  <VerticalNavGroup
    :item="{
      title: 'নেগরান/মুমতাহিন সংক্রান্ত',

     

    }"
  >
    <VerticalNavLink
      :item="{
        title: 'নেগরান/মুমতাহিন আবেদন',
        to:'negranMumtahinApply',
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

  
  <VerticalNavGroup
    :item="{
      title: 'রিপোর্টস',

     

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
        title: 'Documentation',
        icon: 'ri-article-line',
        href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/guide/laravel-integration/folder-structure.html',
        target: '_blank',
      }"
    />
  </VerticalNavGroup>

  <VerticalNavLink
    :item="{
      title: 'প্রয়োজনীয় ডকুমেন্টস',


    }"
  />


  <VerticalNavLink
    :item="{
      title: 'সাপোর্ট',


    }"
  />
</template>
