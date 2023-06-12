<template>
   <section class="contact flex-center" id="services">
        <div class="contact__content">
            <h2 data-aos="flip-down">
                Enjoy our services?
            </h2>
            <p data-aos="fade-up">Feel free to send us a message!</p>
        </div>

        <div class="contact__form-container">
            <div class="contact__form" data-aos="fade-up">
                <input type="text" placeholder="Enter your email address"/>
                <button>Send Message</button>
            </div>

            <div class="contact__form-message" data-aos="fade-up">
                <textarea rows="8" type="text" placeholder="Enter your message"/>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.contact {
  padding: 40px 20px;

  background-color: var(--primary-color);
  background-image: url('../assets/subscribe_bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
}

.contact__content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 45%;
}

.contact h2 {
  font-size: 70px;
  font-family: var(--playfair-display);
  font-weight: 600;
  line-height: 100px;

  color: #fff;
}

.contact p {
  font-size: 18px;
  font-family: var(--plus-jakarta-sans);
  font-weight: 300;
  line-height: 36px;

  margin-top: 32px;

  color: rgba(255, 255, 255, 0.8);
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

  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 30px;
}

.contact__form-message textarea {
    flex: 1;

    font-size:  16px;
    font-weight: 400px;
    font-family: var(--plus-jakarta-sans);

    color: #fff;
    opacity: 0.5;

    background: transparent;
    border: none;
    outline: none;
}

.contact__form-message textarea::placeholder {
  color: #fff;
  opacity: 0.5;
}


.contact__form input {
  flex: 1;

  font-size:  16px;
  font-weight: 400px;
  font-family: var(--plus-jakarta-sans);

  color: #fff;
  opacity: 0.5;

  background: transparent;
  border: none;
  outline: none;
}

.contact__form input::placeholder {
  color: #fff;
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