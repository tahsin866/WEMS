
<script setup>
import { ref, reactive } from "vue"


// Reactive state
const newMessage = ref("")

const messages = reactive([
  { text: "আস্সালামু আলাইকুম কেমন আছেন ভাই?", timestamp: "23 Jan 2:00 pm", right: false },
  { text: "জি, আলহামদুলিল্লাহ ভালো আছি। আপনি কেমন আছেন?", timestamp: "23 Jan 2:05 pm", right: true },
  { text: "তো, হযরত বলেন কিভাবে আপনকে সাহয্য করতে পারি।", timestamp: "23 Jan 5:37 pm", right: false },
  { text: "আমি আসলে নিবন্ধন সংক্রান্ত সমস্যায় পড়েছি। দয়াকরে একটু সাহায্য করুন।", timestamp: "23 Jan 6:10 pm", right: true },
])

// Methods
const sendMessage = () => {
  if (newMessage.value.trim() !== "") {
    messages.push({
      text: newMessage.value,
      timestamp: new Date().toLocaleString(),
      right: true,
    })
    newMessage.value = ""
  }
}

const toggleNotifications = () => {
  // Logic to toggle notifications
}

const toggleChatPane = () => {
  // Logic to toggle chat pane
}

const removeChat = () => {
  // Logic to remove chat box
}
</script>


<template>
  <VCard>
    <!-- Card Header -->
    <VCardTitle
      class="chat-header"
      style="background-color: #243b55; color: white;"
    >
      <VRow
        align="center"
        justify="space-between"
      >
        <VRow>
          <VCol
            cols="12"
            class="text-center"
          >
            <h5 class="mb-0">
              সরাসরি বার্তা
            </h5>
          </VCol>
          <VCol
            cols="12"
            class="d-flex justify-center"
          >
            <VBadge
              content="3"
              color="warning"
              dot
            >
              <VBtn
                size="small"
                icon
                @click="toggleNotifications"
              >
                <VIcon>ri-notification-line</VIcon>
              </VBtn>
            </VBadge>
            <VBtn
              size="small"
              icon
              @click="toggleChatPane"
            >
              <VIcon>ri-chat-new-line</VIcon>
            </VBtn>
          </VCol>
        </VRow>
      </vrow>
    </VCardTitle>

    <!-- Card Body (Chat Messages) -->
    <VCardText class="chat-messages">
      <VList>
        <VListItem
          v-for="(message, index) in messages"
          :key="index"
          :class="message.right ? 'justify-end' : 'justify-start'"
        >
          <template
            v-if="!message.right"
            #prepend
          >
            <VAvatar>
              <img
                src="https://via.placeholder.com/36"
                alt="User Avatar"
              >
            </VAvatar>
          </template>

          <VListItemContent>
            <VListItemTitle :class="message.right ? 'message-sent' : 'message-received'">
              {{ message.text }}
            </VListItemTitle>
            <VListItemSubtitle class="text-xs grey--text">
              {{ message.timestamp }}
            </VListItemSubtitle>
          </VListItemContent>

          <template
            v-if="message.right"
            #append
          >
            <VAvatar>
              <img
                src="https://via.placeholder.com/36"
                alt="User Avatar"
              >
            </VAvatar>
          </template>
        </VListItem>
      </VList>
    </VCardText>

    <!-- Card Footer (Input) -->
    <VCardActions class="chat-input">
      <VTextField
        v-model="newMessage"
        label="Type Message..."
        hide-details
        dense
        class="flex-grow-1 me-2"
      />
      <VBtn
        color="warning"
        @click="sendMessage"
      >
        পাঠান
      </VBtn>
      <VBtn color="warning">
        আপলোড করুন
      </VBtn>
    </VCardActions>
  </VCard>
</template>



<style scoped>
.chat-messages {
  max-height: 300px; /* Set maximum height */
  overflow-y: auto; /* Enable scrolling */
}

.message-sent {
  background-color: #00796b; /* Color for sent messages */
  color: white; /* Text color for sent messages */
  border-radius: 8px; /* Rounded corners for sent messages */
  padding: 8px; /* Padding */
}

.message-received {
  background-color: #bbdefb; /* Color for received messages */
  color: black; /* Text color for received messages */
  border-radius: 8px; /* Rounded corners for received messages */
  padding: 8px; /* Padding */
}

.chat-input {
  padding: 16px; /* Padding for input area */
}
</style>
