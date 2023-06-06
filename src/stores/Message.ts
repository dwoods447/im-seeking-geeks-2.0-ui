import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
import MessageService from '@/services/MessageService'


/* 
{
    "messages": [
        {
            "_id": {
                "from": "64146fff5db8a61aa4cbdea6"
            },
            "messageContent": [
                {
                    "messageId": "6434e3632f3ed9030a64b6e6",
                    "sender": "Carlie.Smith7",
                    "image": "94.jpg",
                    "date": "2023-04-11T04:34:43.148Z",
                    "content": "Hey this is my second message",
                    "unread": true,
                    "random": "true",
                    "gender": "trans-female"
                }
            ]
        },
        {
            "_id": {
                "from": "641470005db8a61aa4cbdea8"
            },
            "messageContent": [
                {
                    "messageId": "64163644b4f9f006114e9bc5",
                    "sender": "Annabell66",
                    "image": "91.jpg",
                    "date": "2023-03-18T22:08:04.704Z",
                    "content": "Hey I just wanted to say Hi, Your so Cute!",
                    "unread": false,
                    "random": "true",
                    "gender": "trans-male"
                }
            ]
        }
    ],
    "totalItems": [
        {
            "total_messages": 2
        }
    ]
}

*/


export interface UserMessage { 
        _id: { from: string },
        messageContent: [
            {
                    messageId: string,
                    sender?: string,
                    reciever?: string,
                    image:  string,
                    date:  string,
                    content:  string,
                    unread: boolean,
                    random: string,
                    gender: string
            }
       ]

}


export const useMessageStore = defineStore('message', () => {
    const messages = reactive<UserMessage[]>([])
    const page = ref(1)
    const date = ref(null)
    const userMessages = computed<UserMessage[]>(() => messages || [])
    const userSentMessages = computed<UserMessage[]>(() => messages || [] )
    const filteredDate  = computed(() => date.value || '')
    const currentPage = computed(() => page.value)

    async function getUserMessages() { 
        // await MessageService.getUserMessages(currentPage)
    }
    async function getUserSentMessages() { 
        // await MessageService.getUserMessages(currentPage)
    }
  return {
      userMessages,
      userSentMessages,
      filteredDate,
      currentPage
  }
})
