<template>
  <div class="timer-wrapper text-center">
    <h3 class="timer-heading mb-6">
      নিবন্ধনের সময় শেষ হতে আর মাত্র বাকি !
    </h3>

    <div class="timer-display">
      <div class="timer-item">
        <span class="time-value">{{ days }}</span>
        <span class="time-label">দিন</span>
      </div>
      <div class="timer-item">
        <span class="time-value">{{ hours }}</span>
        <span class="time-label">ঘন্টা</span>
      </div>
      <div class="timer-item">
        <span class="time-value">{{ minutes }}</span>
        <span class="time-label">মিনিট</span>
      </div>
      <div class="timer-item">
        <span class="time-value">{{ seconds }}</span>
        <span class="time-label">সেকেন্ড</span>
      </div>
    </div>

    <VProgressLinear
      :value="progress"
      color="green"
      height="12"
      class="my-6"
      rounded
    />

    <VBtn
      color="success"
      large
      elevation="2"
      class="enroll-button"
      @click="enrollNow"
    >
      নিবন্ধন করুন
    </VBtn>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const endTime = new Date('2024-12-31T23:59:59').getTime()
const currentTime = ref(Date.now())
const timeRemaining = ref(endTime - currentTime.value)

const calculateTimeRemaining = () => {
  currentTime.value = Date.now()
  timeRemaining.value = endTime - currentTime.value
}

const days = computed(() => Math.floor(timeRemaining.value / (1000 * 60 * 60 * 24)))
const hours = computed(() => Math.floor((timeRemaining.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
const minutes = computed(() => Math.floor((timeRemaining.value % (1000 * 60 * 60)) / (1000 * 60)))
const seconds = computed(() => Math.floor((timeRemaining.value % (1000 * 60)) / 1000))

const progress = computed(() => {
  const totalTime = endTime - (endTime - 1000 * 60 * 60 * 24 * 30) // 30 days before end date
  
  return ((totalTime - timeRemaining.value) / totalTime) * 100
})

const enrollNow = () => {
  alert('Enrollment clicked!')
}

let timerInterval

onMounted(() => {
  timerInterval = setInterval(calculateTimeRemaining, 1000)
})

onUnmounted(() => {
  clearInterval(timerInterval)
})
</script>

<style scoped>
.timer-wrapper {
  background-color: #f0f4f8;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.timer-heading {
  font-family: 'SolaimanLipi', sans-serif;
  color: #2a9d8f;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.timer-display {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.timer-item {
  background-color: #264653;
  color: white;
  padding: 1.2rem;
  border-radius: 8px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time-value {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.time-label {
  font-size: 1rem;
  font-weight: normal;
  color: #a8dadc;
}

.VProgressLinear {
  margin-top: 2rem;
  height: 12px;
  background-color: #e0e0e0;
}

.enroll-button {
  font-family: 'SolaimanLipi', sans-serif;
  font-size: 18px;
  padding: 12px 24px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.enroll-button:hover {
  background-color: #21867a;
}
</style>
