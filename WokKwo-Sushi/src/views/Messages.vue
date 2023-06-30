<template>
<div class="contact">
    <h1>Messages</h1>
    <table class="contact-table">
            <thead>
                <tr>
                    <th class="contact-id">Sender Email</th>
                    <th>Message</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <TransitionGroup name="slide-fade">
                    <tr v-for="message in messagesList" :key="message._id">
                        <td>{{message.contactEmail}}</td>
                        <td>{{message.contactDescription}}</td>
                        <td class="more-actions">
                            <button id="delete-button" @click="deleteMessage(message._id)">Delete</button>
                        </td>
                    </tr>
                </TransitionGroup>
            </tbody>
        </table>

</div>
</template>

<script>
import {getAllMessages, deleteMessage} from "../wokwok-sdk/contact"
export default {
    data() {
        return {
            messagesList: [],
        }
    },
    mounted() {
        this.fetchContacts()
    },
    methods: {
        async fetchContacts() {
            const response = await getAllMessages() 
            this.messagesList = response.data
        },
        async deleteMessage(messageId){
            try {
                await deleteMessage(messageId)
            } catch (err) {
                console.log(err)
            } finally {
                await this.fetchContacts()
            }
        },
    }
}
</script>

<style scoped>
.contact {
    font-family: var(--plus-jakarta-sans);
    margin: 70px 0px;
}

.contact h1{
    width: 100%;
    font-family: var(--playfair-display);
    color: black;
    font-size: 45px;
}

.contact-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
    min-height: 100%;
}

.contact-table{
    width: 100%;
    border-collapse: collapse;
    margin-top: 30px;
    font-size: 22px;
}

.contact-table th, .contact-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #000;
    height: 80px;
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
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>