import axios from "axios"
const API_URL = import.meta.env.VITE_APP_API_URL



export function getMenuItems() {
    return axios.get(`${API_URL}/api/menu`)
}


export function createMenuItem(menuItem) {
    return axios.post(`${API_URL}/api/uploadItem`, menuItem)
}

export function editMenuItem(menuItem) {
    return axios.put(`${API_URL}/api/menuItem/edit/${menuItem._id}`, menuItem)
}

export function deleteMenuItem(itemId) {
    return axios.delete(`${API_URL}/api/menuItem/delete/${itemId}`)
}
