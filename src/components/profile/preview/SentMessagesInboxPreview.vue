<template>
    <div>
    <message-inbox-preview
      v-for="(message, index) in store.userSentMessages"
      :key="index"
      :content="message.messageContent[message.messageContent.length - 1].content"
      :gender="message.messageContent[message.messageContent.length - 1].gender"
      :reciever="message.messageContent[message.messageContent.length - 1].reciever"
      :source="message.messageContent[message.messageContent.length - 1].image"
      :date="message.messageContent[message.messageContent.length - 1].date"
      :senderId="message._id.from"
      :random="message.messageContent[message.messageContent.length - 1].random"
      :messageLength="message.messageContent.length"
      
    />
    </div>
</template>
<script lang="ts" setup>
import { useMessageStore } from '@/stores/Message'
const store = useMessageStore()
import MessageInboxPreview from '../preview/MessageInboxPreview.vue'
</script>