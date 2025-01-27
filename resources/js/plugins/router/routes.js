
export const routes = [
  { path: '/', redirect: '/login' },
  {


    
    path: '/',
    component: () => import('@/layouts/default.vue'),
  
  
    children: [
      {
        
        path: 'dashboard',
        component: () => import('@/pages/dashboard.vue'),
      },

      {
        
        path: 'admin-dashboard',
        component: () => import('@/pages/admin/admin-dashboard.vue'),
      },

      {
        path: 'account-settings',
        component: () => import('@/pages/account-settings.vue'),
      },
      {
        path: 'typography',
        component: () => import('@/pages/typography.vue'),
      },
      {
        path: 'icons',
        component: () => import('@/pages/icons.vue'),
      },
      {
        path: 'cards',
        component: () => import('@/pages/cards.vue'),
      },
      {
        path: 'tables',
        component: () => import('@/pages/tables.vue'),
      },
      {
        path: 'form-layouts',
        component: () => import('@/pages/form-layouts.vue'),
      },
      {
        path: 'MarkajAplly',
        component: () => import('@/pages/applly-markaj.vue'),
      },
      {
        path: 'MarkajFormAgreement',
        component: () => import('@/views/pages/markajChange/MarkajFormAgreement.vue'),
      },
      {
        path: 'Markaj-change',
        component: () => import('@/views/pages/markajChange/Markaj-change.vue'),
      },
      {
        path: 'MarkajchangeApplyForm',
        component: () => import('@/views/pages/markajChange/markajChangeApplyForm.vue'),
      },
      {
        path: 'MarhalaChangeTable',
        component: () => import('@/views/pages/markajChange/MarhalaChangeTable.vue'),
      },

      // মারহাল পরিবর্তন আবেদন 
  
      {
        path: 'MarhalaChange',
        component: () => import('@/views/pages/markajChange/MarhalaChange.vue'),
      },
  
      // মারকায আবেদন ফরম সংশোধনী

      {
        path: 'MarkajApplyFormEdit',
        component: () => import('@/views/pages/markajChange/MarkajApplyFormEdit.vue'),
      },



      {
        path: 'studentRegMarhalaList',
        component: () => import('@/views/pages/studentRegistration/studentRegMarhalaList.vue'),
      },
      
      {
        path: 'studentRagistraionTable',
        component: () => import('@/views/pages/studentRegistration/studentRagistraionTable.vue'),
      },
      {
        path: 'OldStudentRagistration',
        component: () => import('@/views/pages/studentRegistration/OldStudentRagistration.vue'),
      },
      
      {
        path: 'newStudentRegForm',
        component: () => import('@/views/pages/studentRegistration/newStudentRegForm.vue'),
      },
      {
        path: 'regCard',
        component: () => import('@/views/pages/studentRegistration/regCard.vue'),
      },
      {
        path: 'payment',
        component: () => import('@/views/pages/studentRegistration/payment.vue'),
      },
      {
        path: 'registrationConfirm',
        component: () => import('@/views/pages/Ontorvukti/registrationConfirm.vue'),
      },
      {
        path: 'admitCard',
        component: () => import('@/views/pages/Ontorvukti/admitCard.vue'),
      },
      {
        path: 'regConfirmPayment',
        component: () => import('@/views/pages/Ontorvukti/regConfirmPayment.vue'),
      },
      {
        path: 'negranMumtahinApply',
        component: () => import('@/views/pages/NegranMumtahin/negranMumtahinApply.vue'),
      },
  
      {
        path: 'negranMumtahinApllyForm',
        component: () => import('@/views/pages/NegranMumtahin/negranMumtahinApllyForm.vue'),
      },
  
      {
        path: 'negranMumtahinApplyFormOld',
        component: () => import('@/views/pages/NegranMumtahin/negranMumtahinApplyFormOld.vue'),
      },


    ],
  },
  
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/pages/login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/pages/register.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
    ],
  },
]


