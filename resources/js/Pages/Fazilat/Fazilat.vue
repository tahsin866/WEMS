<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { ref } from 'vue';

export default {
  components: {
    AuthenticatedLayout
  },
  setup() {
    const selectedStudentType = ref(null);
    const selectedSonodType = ref(null);
    const selectedYear = ref(null);
const selectSonodLanguage=ref (null);

    const studentItems = ref(["ছাত্র", "ছাত্রী"]);
    const sonodTypes= ref(["সাময়িক সনদ", "সংশোধনী সনদ", "ডুপলিকেট সনদ", "নম্বর পত্র"]);
    const Years = ref(["2009", "2010", "2011", "2012", "2013"]); // Extend years as needed
const sonodlanguage=ref (["আরবি সনদ","বাংলা সনদ","আরবি নম্বর পত্র","বাংলা নম্বর পত্র",])

    return {
      selectedStudentType,
      selectedSonodType,
    selectSonodLanguage,
      selectedYear,
      studentItems,
      sonodTypes,
      Years,
      sonodlanguage
    };
  }
};
</script>

<template>
  <AuthenticatedLayout>
    <div class="bg-white shadow-md rounded-lg p-4">
      <div class="flex justify-between items-center bg-green-700 p-4 rounded-t-lg">
        <h3 style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" class="text-white text-lg font-bold">ফযিলত ছাত্র-ছাত্রীদের সনদ কার্যক্রম</h3>
        <div class="space-x-2">
          <button class="text-white focus:outline-none">
            <i class="fas fa-minus"></i>
          </button>
          <button class="text-white focus:outline-none">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <div class="p-4 space-y-4">
        <div class="grid grid-cols-4 gap-4">
          <!-- Dropdown for Sonod Types -->
          <div>
            <label style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" class="block text-gray-700">সনদের ধরন নির্বাচন করুন</label>
            <select style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" v-model="selectedSonodType" class="w-full p-2 border border-gray-300 rounded-md">
              <option style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" value="" disabled selected>সনদের ধরন নির্বাচন করুন</option>
              <option style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" v-for="(item, index) in sonodTypes" :key="index" :value="item">{{ item }}</option>

            </select>
          </div>

          <!-- Dropdown for Student Type -->
          <div>
            <label style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" class="block text-gray-700">ছাত্র-ছাত্রি নির্বাচন করুন</label>
            <select style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" v-model="selectedStudentType" class="w-full p-2 border border-gray-300 rounded-md">
              <option style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" value="" disabled selected>ছাত্র-ছাত্রী নির্বাচন করুন</option>
              <option style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" v-for="(item, index) in studentItems" :key="index" :value="item">{{ item }}</option>
            </select>
          </div>

          <!-- Dropdown for Years -->
          <div>
            <label style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" class="block text-gray-700">বছর নির্বাচন করুন</label>
            <select style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" v-model="selectedYear" class="w-full p-2 border border-gray-300 rounded-md">
              <option style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" value="" disabled selected>বছর নির্বাচন করুন</option>
              <option style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" v-for="year in Years" :key="year" :value="year">{{ year }}</option>
            </select>
          </div>
          <div>
            <label style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" class="block text-gray-700">ভাষা নির্বাচন করুন</label>
            <select style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" v-model=" selectSonodLanguage" class="w-full p-2 border border-gray-300 rounded-md">
              <option style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" value="" disabled selected>বছর নির্বাচন করুন</option>
              <option style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" v-for="sonodlanguage in sonodlanguage" :key="sonodlanguage" :value="sonodlanguage">{{ sonodlanguage }}</option>
            </select>
          </div>
        </div>

        <!-- Second Row -->
        <div class="grid grid-cols-4 gap-4">


          <div>
            <label style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" class="block text-gray-700">রোল নম্বর</label>
            <input style="font-family: 'Merriweather','SolaimanLipi',sans-serif;" type="text" class="w-full p-2 border border-gray-300 rounded-md" placeholder="রোল নম্বর দিন">
          </div>

          <div class="col-span-1 flex items-center mt-6">
    <button class="w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow hover:bg-blue-700 transition duration-200 ease-in-out">
    search here
    </button>
  </div>


        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped>
/* Add any additional custom styling here */
.bg-white {
  transition: box-shadow 0.3s ease;
}

.bg-white:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
</style>
