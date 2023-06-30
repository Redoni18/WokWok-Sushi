import axios from 'axios'
const API_URL = import.meta.env.VITE_APP_API_URL

export function getAllCategories() {
    return axios.get(`${API_URL}/api/category`)
}

export function postCategory(categoryName) {
    return axios.post(`${API_URL}/api/uploadCategory`, {
        categoryName
    })
}

export function updateCategory(category) {
    console.log(category)
    return axios.put(`${API_URL}/api/editCategory/${category._id}`, {
        categoryName: category.categoryName
    })
}

export function deleteCategory(categoryId) {
    return axios.delete(`${API_URL}/api/category/delete/${categoryId}`)
}