import axios from 'axios'
const API_URL = import.meta.env.VITE_APP_API_URL

export function getAllMessages() {
    return axios.get(`${API_URL}/api/contact`)
}

export function sendMessage(message) {
    return axios.post(`${API_URL}/api/uploadContact`, {
        contactEmail: message.email,
        contactDescription: message.messageContent
    })
}

export function deleteMessage(messageId) {
    return axios.delete(`${API_URL}/api/contact/delete/${messageId}`)
}