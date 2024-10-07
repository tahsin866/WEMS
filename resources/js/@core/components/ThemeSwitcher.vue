<script setup>
import { useTheme } from 'vuetify'
import { ref, watch, onMounted } from 'vue'

// Define props for theme list
const props = defineProps({
  themes: {
    type: Array,
    required: true,
  },
})

// Get theme-related functions from Vuetify's useTheme
const { name: themeName, global: globalTheme } = useTheme()

// Manage the current theme name and cycling through themes
const currentThemeName = ref(themeName.value)

// Get the list of theme names for cycling
const {
  next: getNextThemeName,
  index: currentThemeIndex,
} = useCycleList(props.themes.map(t => t.name), { initialValue: themeName.value })

// Function to change the theme and store it in localStorage
const changeTheme = () => {
  const nextTheme = getNextThemeName()

  globalTheme.name.value = nextTheme
  currentThemeName.value = nextTheme
  localStorage.setItem('selectedTheme', nextTheme) // Save theme to localStorage
}

// Load theme from localStorage when the page is loaded
onMounted(() => {
  const savedTheme = localStorage.getItem('selectedTheme')
  if (savedTheme) {
    globalTheme.name.value = savedTheme
    currentThemeName.value = savedTheme
  }
})

// Watch for external theme changes and update local theme state
watch(() => globalTheme.name.value, val => {
  currentThemeName.value = val
})
</script>

<template>
  <IconBtn @click="changeTheme">
    <VIcon :icon="props.themes[currentThemeIndex].icon" />
    <VTooltip
      activator="parent"
      open-delay="1000"
      scroll-strategy="close"
    >
      <span class="text-capitalize">{{ currentThemeName }}</span>
    </VTooltip>
  </IconBtn>
</template>
