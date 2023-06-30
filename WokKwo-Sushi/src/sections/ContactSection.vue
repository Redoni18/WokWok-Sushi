<template>
   <section class="contact flex-center" id="contact">
        <div class="contact__content">
            <h2 data-aos="flip-down">
                Enjoy our services?
            </h2>
            <p data-aos="fade-up">Feel free to send us a message!</p>
        </div>

        <div class="contact__form-container">
            <div class="contact__form" data-aos="fade-up">
                <input v-model="message.email" type="text" placeholder="Enter your email address"/>
                <button @click="sendMessage">Send Message</button>
            </div>

            <div class="contact__form-message" data-aos="fade-up">
                <textarea v-model="message.messageContent" rows="8" type="text" placeholder="Enter your message"/>
            </div>
        </div>
    </section>
</template>

<script>
import {sendMessage} from "../wokwok-sdk/contact"
export default {
  data() {
    return {
      message: {
        email: null,
        messageContent: null
      }
    }
  },
  methods: {
    async sendMessage() {
      try {
        await sendMessage(this.message)
      } catch (err) {
        console.log(err)
      } finally {
        this.reset()
      }
    },
    reset() {
      this.message.email = null
      this.message.messageContent = null
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 40px 20px;

  background-color: var(--color-creamson);
}

.contact__content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 45%;
    background-image: url("../assets/about_bg2.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
}

.contact h2 {
  font-size: 70px;
  font-family: var(--playfair-display);
  font-weight: 600;
  line-height: 100px;

  color: #000;
}

.contact p {
  font-size: 18px;
  font-family: var(--plus-jakarta-sans);
  font-weight: 300;
  line-height: 36px;

  margin-top: 32px;

  color: rgba(31, 31, 31, 0.8);
}

.contact__form-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact__form, .contact__form-message {
  min-width: 480px;

  padding: 14px 14px 14px 24px;

  display: flex;
  gap: 10px;

  border: 1px solid rgba(64, 62, 62, 0.5);
  border-radius: 30px;
}

.contact__form-message textarea {
    flex: 1;

    font-size:  16px;
    font-weight: 400px;
    font-family: var(--plus-jakarta-sans);

    color: #000;
    opacity: 0.5;

    background: transparent;
    border: none;
    outline: none;
}

.contact__form-message textarea::placeholder {
  color: #000;
  opacity: 0.5;
}


.contact__form input {
  flex: 1;

  font-size:  16px;
  font-weight: 400px;
  font-family: var(--plus-jakarta-sans);

  color: #000;
  opacity: 0.5;

  background: transparent;
  border: none;
  outline: none;
}

.contact__form input::placeholder {
  color: #000;
  opacity: 0.5;
}

.contact__form button {
  padding: 20px;

  min-width: 180px;

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
}
</style>