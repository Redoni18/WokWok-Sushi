<template>
<div class="menu">
    <div class="menu-starter">
        <h1>Our Menu</h1>
        <button class="add-item" @click="showModal = true;">+ Add Menu Item</button>
    </div>
    
    <div v-if="categoriesList" class="menu-filter__buttons" data-aos="fade-up">
        <button @click="fetchMenuItems" class="menu-filter__btn">
            All
        </button>
        <button @click="filterItems(category)" v-for="category in categoriesList" :key="category._id" class="menu-filter__btn">
            {{category.categoryName}}
        </button>
    </div>
    <div>
        <table class="menu-table">
            <thead>
                <tr>
                    <th class="menu-id">Photo</th>
                    <th>Item Name</th>
                    <th>Item Ingredients</th>
                    <th>Item Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <TransitionGroup name="slide-fade">
                    <tr style="width: 100%;" v-for="menuItem in menuItemList" :key="menuItem._id">
                        <td style="width: 15%;" class="menuItem-image"><img :src="menuItem.imageUrl"/></td>
                        <td style="max-width: 300px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{menuItem.menuItem}}</td>
                        <td style="max-width: 300px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{menuItem.itemIngredients}}</td>
                        <td>{{menuItem.itemPrice}} &euro;</td>
                        <td class="more-actions">
                            <button id="delete-button" @click="deleteItem(menuItem._id)">Delete</button>
                            <button id="edit-button" @click="showEditModal = true; selectedMenuItem = menuItem">Edit</button>
                        </td>
                    </tr>
                </TransitionGroup>
            </tbody>
        </table>
    </div>

    <MenuModal v-if="showModal" @close="closeModal">
        <template v-slot:header>
            Create New Menu Item
        </template>

        <template v-slot:body>
            <form @submit.prevent="createNewItem" class="menu-container">
                <label class="menu-container__label" for="itemName">Item Name:</label>
                <input v-model="menuItem.menuItem" placeholder='Item Name' class="menu-container__input" required type="text" id="itemName">

                <label class="menu-container__label" for="itemCategory">Item Category</label>
                <select class="menu-container__select" id="itemCategory" v-model="menuItem.itemCategory">
                    <option value="" disabled selected>Select the menu item category</option>
                    <option v-for="category in categoriesList" :value="category" :key="category._id">{{ category.categoryName }}</option>
                </select>

                <label class="menu-container__label" for="itemPhoto">Item Photo:</label>
                <input v-model="menuItem.imageUrl" placeholder='http://example_image_domain' class="menu-container__input" required type="text" id="itemPhoto">

                <label class="menu-container__label" for="itemPrice">Item Price:</label>
                <input v-model="menuItem.itemPrice" placeholder='10.0' class="menu-container__input" required type="text" id="itemPrice">

                <label class="menu-container__label" for="itemIngredients">Item Ingredients:</label>
                <input v-model="menuItem.itemIngredients" placeholder='Rice, Avocado, Salmon' class="menu-container__input" required type="text" id="itemIngredients">
            </form>
        </template>

        <template v-slot:footer>
            <p
                type="button"
                class="save-button"
                @click="createNewItem"
            >
                Create
            </p>
        </template>

    </MenuModal>

    <MenuModal v-if="showEditModal" @close="closeModal">
        <template v-slot:header>
            Edit Menu Item
        </template>

        <template v-slot:body>
            <form @submit.prevent="editSelectedItem" class="menu-container">
                <label class="menu-container__label" for="itemName">Item Name:</label>
                <input v-model="selectedMenuItem.menuItem" placeholder='Item Name' class="menu-container__input" required type="text" id="itemName">

                <label class="menu-container__label" for="itemCategory">Item Category</label>
                <select class="menu-container__select" id="itemCategory" v-model="selectedMenuItem.itemCategory">
                    <option value="" disabled selected>Select the menu item category</option>
                    <option v-for="category in categoriesList" :value="category" :key="category._id">{{ category.categoryName }}</option>
                </select>

                <label class="menu-container__label" for="itemPhoto">Item Photo:</label>
                <input v-model="selectedMenuItem.imageUrl" placeholder='http://example_image_domain' class="menu-container__input" required type="text" id="itemPhoto">

                <label class="menu-container__label" for="itemPrice">Item Price:</label>
                <input v-model="selectedMenuItem.itemPrice" placeholder='10.0' class="menu-container__input" required type="text" id="itemPrice">

                <label class="menu-container__label" for="itemIngredients">Item Ingredients:</label>
                <input v-model="selectedMenuItem.itemIngredients" placeholder='Rice, Avocado, Salmon' class="menu-container__input" required type="text" id="itemIngredients">
            </form>
        </template>

        <template v-slot:footer>
            <p
                type="button"
                class="save-button"
                @click="editSelectedItem"
            >
                Save
            </p>
        </template>

    </MenuModal>
</div>
</template>

<script>
import MenuModal from "../components/Modal.vue"
import { getAllCategories } from "../wokwok-sdk/categories"
import { createMenuItem, getMenuItems, editMenuItem, deleteMenuItem } from "../wokwok-sdk/menu"
export default {
    components: {
        MenuModal
    },
    data() {
        return {
            showModal: false,
            categoriesList: null,
            menuItem: {
                menuItem: null,
                imageUrl: null,
                itemIngredients: null,
                itemCategory: null,
                itemPrice: null,
            },
            menuItemList: [],
            showEditModal: false,
            selectedMenuItem: false,
            allMenuItems: []
        }
    },
    mounted() {
        this.fetchCategories()
        this.fetchMenuItems()
    },
    methods: {
        async fetchCategories() {
            const response = await getAllCategories() 
            this.categoriesList = response.data
        },
        async fetchMenuItems() {
            const response = await getMenuItems()
            console.log(response)
            this.allMenuItems = response.data
            this.menuItemList = this.allMenuItems
        },
        async createNewItem() {
            try {
                await createMenuItem(this.menuItem)
            } catch (err) {
                console.log(err)
            } finally {
                this.closeModal()
                await this.fetchMenuItems()
            }
        },
        async editSelectedItem() {
            try {
                await editMenuItem(this.selectedMenuItem)
            } catch (err) {
                console.log(err)
            } finally {
                this.closeModal()
                await this.fetchMenuItems
            }
        },
        async deleteItem(id) {
            try {
                await deleteMenuItem(id)
            } catch (err) {
                console.log(err)
            } finally {
                await this.fetchMenuItems()
            }
        },
        async filterItems(category) {
            this.menuItemList = this.allMenuItems.filter((menuItem) => menuItem.itemCategory._id === category._id)
            console.log(this.menuItemList)
        },
        closeModal(){
            this.showModal = false
            this.showEditModal = false
            this.menuItem.name = null
            this.menuItem.imageUrl = null
            this.menuItem.itemCategory = null
            this.menuItem.itemIngredients = null
            this.menuItem.itemPrice = null
        }
    }
}
</script>

<style scoped>
.menu {
    font-family: var(--plus-jakarta-sans);
    margin: 70px 0px;
}

.menu-starter {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.menu-starter h1{
    width: 100%;
    font-family: var(--playfair-display);
    color: black;
    font-size: 45px;
}

.menu .add-item {
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

.menu-container{
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

.menu-table{
    width: 100%;
    border-collapse: collapse;
    margin-top: 30px;
    font-size: 22px;
}

.menu-table th, .menu-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #000;
    height: 80px;
}


.menu-container__input, .menu-container__select{
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
.menu-container__input, .menu-container__select{
    height: 60px;
}
.category-container__input::placeholder, .menu-container__select::placeholder{
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
    font-size: 20px;
    font-weight: 500;
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
    font-size: 20px;
    font-weight: 500;
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
  transform: translateX(+100px);
  opacity: 0;
}

.menu-table .menuItem-image img{
    height: 100px !important;
    width: 120px !important;
    border-radius: 12px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.menu-filter__buttons{
    display: flex;
    justify-content: center;
    gap: 20px;
}

.menu-filter__btn{
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    outline: none;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgb(62, 60, 60);
    border-radius: 46px;
    font-size: 16px;
    font-weight: 300px;
    line-height: 25px;
    font-family: var(--plus-jakarta-sans);
    color: black;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.menu-filter__btn:hover{
    background: rgba(139, 139, 139, 0.2);
    transition: background-color 0.3s ease;
}

</style>