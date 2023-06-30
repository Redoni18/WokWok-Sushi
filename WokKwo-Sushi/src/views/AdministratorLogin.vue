<template>
  <div class="login-page">
    <h1>Prove It!</h1>
    <form @submit.prevent="login" class="auth-form">
        <input v-model="email" type="email" placeholder="Enter your email">
        <input v-model="password" type="password" placeholder="Enter your password">

        <p>{{errorMessage}}</p>

        <button 
            @mouseover="updateButtonPosition"
            :style="{ transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)` }"
        >
            Submit
        </button>
    </form>
  </div>
</template>

<script>
import {storeUser} from '../helper/auth.js'
export default {
    data() {
        return {
            email: null,
            password: null,
            isAuthenticated: false,
            errorMessage: null,
            buttonPosition: { x: 0, y: 0 },
            isHovered: false,
            debounceTimer: null
        }
    },
    watch: {
        email() {
            this.debouncedUpdateButtonPosition()
        },
        password() {
            this.debouncedUpdateButtonPosition()
        },
    },
    methods: {
        authenticateAdmin(){
            if(this.email === import.meta.env.VITE_APP_EMAIL && this.password === import.meta.env.VITE_APP_PASSWORD){
                this.isAuthenticated = true
                this.errorMessage = null
                this.updateButtonPosition()
            } else if (this.email !== import.meta.env.VITE_APP_EMAIL || this.password !== import.meta.env.VITE_APP_PASSWORD) {
                this.isAuthenticated = false
                this.errorMessage = "Incorrect email or password"
            }

            setTimeout(() => {
                this.errorMessage = null;
            }, 3000);
        },
        updateButtonPosition() {
            if (!this.isAuthenticated) {
                if (!this.isHovered) {
                    this.buttonPosition.x = 200;
                    this.isHovered = true;
                } else {
                    this.buttonPosition.x = -200;
                    this.isHovered = false;
                }
            } else {
                this.buttonPosition.x = 0;
                this.isHovered = false;
            }
        },
        debouncedUpdateButtonPosition() {
            if (this.debounceTimer) {
                clearTimeout(this.debounceTimer);
            }
            this.debounceTimer = setTimeout(() => {
                this.authenticateAdmin();
            }, 500);
        },
        login() {
            if(this.isAuthenticated) {
                this.$router.push({path: '/dashboard'})
                storeUser(this.isAuthenticated)
            }
        }
    }
}
</script>

<style scoped>
.login-page{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 800px;
    height: 100vh;
    margin: auto;
}

.login-page h1 {
    font-size: 60px;
    font-weight: 600px;
    font-family: var(--playfair-display);
    color: var(--secondary-color);
}

.auth-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    min-width: 480px;

    padding: 14px 14px 14px 24px;
}

.auth-form input {
    border-radius: 32px;
    border: none;
    outline: none;
    padding: 30px 20px;
    color: white;
    border: 1px solid rgba(79, 74, 74, 0.5);
    border-radius: 30px;


    flex: 1;

    font-size:  20px;
    font-weight: 400px;
    font-family: var(--plus-jakarta-sans);

    color: #000;

    background: transparent;
}

.auth-form button {
    padding: 20px;

    width: 200px;
    margin: auto;

    font-size: 16px;
    font-weight: 500;
    font-family: var(--plus-jakarta-sans);
    color: #fff;
    text-align: center;

    background: var(--black-400);
    border-radius: 46px;
    border: none;
    outline: none;

    cursor: pointer;
    transition: transform 0.2s ease-in-out;
}

.auth-form button:hover {
    background: var(--black-200);
}


.auth-form p {
    text-align: center;

    font-family: var(--plus-jakarta-sans);
    color: var(--primary-color);
    font-size: 18px;
    font-weight: 400;
}
</style>