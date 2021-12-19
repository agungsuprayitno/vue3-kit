import { defineStore } from 'pinia'
import { Auth } from '../model/auth'

export const useAuthStore = defineStore('auth', {
    state: () => (
        { auth: new Auth() }
    ),

    actions: {
        
    },
})