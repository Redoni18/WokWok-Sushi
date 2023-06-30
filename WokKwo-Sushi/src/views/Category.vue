<template>
<div class="category">
    <div class="category-starter">
        <h1>Menu Categories</h1>
        <button @click="showModal = true;">+ Add Category</button>
    </div>
    <div>
        <table class="category-table">
            <thead>
                <tr>
                    <th class="category-id">Category ID</th>
                    <th>Category Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <TransitionGroup name="slide-fade">
                    <tr v-for="category in categoriesList" :key="category._id">
                        <td>{{category._id}}</td>
                        <td>{{category.categoryName}}</td>
                        <td class="more-actions">
                            <button id="delete-button" @click="deleteCategory(category._id)">Delete</button>
                            <button id="edit-button" @click="showModal=true; categoryToBeEdited = category;">Edit</button>
                        </td>
                    </tr>
                </TransitionGroup>
            </tbody>
        </table>
    </div>

    <CategoryModal v-if="showModal" @close="closeModal">
        <template v-slot:header>
            {{ categoryToBeEdited ? 'Edit Category' : 'Create New Category' }}
        </template>

        <template v-slot:body>
            <form @submit.prevent="callProperMethod" class="category-container">
                <label class="category-container__label" for="category">Category Name:</label>
                <input v-model="categoryName" :placeholder="categoryToBeEdited ? categoryToBeEdited.categoryName : 'Category Name'" class="category-container__input" required type="text" id="category">
            </form>
        </template>

        <template v-slot:footer>
            <p
                type="button"
                class="save-button"
                @click="callProperMethod"
            >
                {{ categoryToBeEdited ? 'Save' : 'Submit' }}
            </p>
        </template>

    </CategoryModal>
</div>
</template>

<script>
import CategoryModal from "../components/Modal.vue"
import {getAllCategories, postCategory, updateCategory, deleteCategory} from "../wokwok-sdk/categories"
export default {
    components: {
        CategoryModal
    },
    data() {
        return {
            showModal: false,
            categoryName: null,
            categoriesList: [],
            categoryToBeEdited: null,
        }
    },
    computed: {
        callProperMethod() {
            if(this.categoryToBeEdited === null) {
                return this.createCategory
            }
            return () => this.editCategory(this.categoryName);
        }
    },
    mounted() {
        this.fetchCategories()
    },
    methods: {
        async fetchCategories() {
            const response = await getAllCategories() 
            this.categoriesList = response.data
        },
        async createCategory() {
            try {
                await postCategory(this.categoryName)
            } catch (err) {
                console.log(err)
            } finally {
                this.closeModal()
                await this.fetchCategories()
            }
        },
        async editCategory(categoryName) {
            console.log(this.categoryToBeEdited)
            this.categoryToBeEdited.categoryName = categoryName
            try {
                await updateCategory(this.categoryToBeEdited)
            } catch (err) {
                console.log(err)
            } finally {
                this.closeModal()
                await this.fetchCategories()
            }
        },
        async deleteCategory(categoryId){
            try {
                await deleteCategory(categoryId)
            } catch (err) {
                console.log(err)
            } finally {
                await this.fetchCategories()
            }
        },
        closeModal(){
            this.showModal = false
            this.categoryName = null
        }
    }
}
</script>

<style scoped>
.category {
    font-family: var(--plus-jakarta-sans);
    margin: 70px 0px;
}

.category-starter {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.category-starter h1{
    width: 100%;
    font-family: var(--playfair-display);
    color: black;
    font-size: 45px;
}

.category button {
  width: 100%;

  font-size: 20px;
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);
  color: #000;
  text-align: right;
  background: transparent;
  border-radius: 46px;
  border: none;
  outline: none;
  cursor: pointer;
}

.category-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
    min-height: 100%;
}

.save-button{
    padding: 10px 20px;
    font-weight: 500;
    font-family: var(--plus-jakarta-sans);
    color: #fff;
    background: var(--black-400);
    text-align: center;
    border-radius: 46px;
    border: none;
    outline: none;
    cursor: pointer;
}

.category-table{
    width: 100%;
    border-collapse: collapse;
    margin-top: 30px;
    font-size: 22px;
}

.category-table th, .category-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #000;
    height: 80px;
}


.category-table input, .category-container__input{
    font-size: 19px;
    font-weight: 400;
    font-family: var(--plus-jakarta-sans);
    color: #000;
    opacity: 0.5;
    background: transparent;
    outline: none;
    width: 100%;
    border: 1px solid rgba(64, 62, 62, 0.5);
    padding: 5px 10px;
    height: 100%;
    border-radius: 10px;
}
.category-container__input{
    height: 60px;
}
.category-table input::placeholder, .category-container__input::placeholder{
    color: #000;
    opacity: 0.5;
}

#delete-button{
    padding: 10px 20px;
    width: fit-content;
    color: #fff;
    cursor: pointer;
    border-radius: 46px;
    border: none;
    outline: none;
    cursor: pointer;
    background: var(--primary-color);
    margin: 0 10px;
}

#edit-button{
    padding: 10px 20px;
    width: fit-content;
    color: #fff;
    cursor: pointer;
    border-radius: 46px;
    border: none;
    outline: none;
    cursor: pointer;
    background: var(--black-400);
}

.more-actions{
    text-align: right !important;
}


.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>