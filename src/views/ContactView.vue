<template>
  <br />
  <div class="container mt-5">
    <div class="container">
      <h3>Fale Conosco</h3>
      <div class="row justify-content-center mt-2">
        <div class="col-lg-6">
          <form ref="form" @submit.prevent="" class="form-control mb-2">
            <div class="mb-3">
              <label for="name" class="form-label">Nome*</label>
              <input type="text" class="form-control background-input" id="name" placeholder="Seu Nome"
                v-model="formData.name" required name="user_name">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email*</label>
              <input type="email" class="form-control background-input" id="email" placeholder="Email"
                v-model="formData.email" required name="user_email">
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Telefone*</label>
              <input type="tel" class="form-control background-input" id="phone" placeholder="Telefone"
                v-model="formData.phone" name="user_phone" v-mask="'(##) #####-####'">
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Sua Mensagem</label>
              <textarea class="form-control background-input" id="mensagem" rows="5" placeholder="Mensagem"
                v-model="formData.message" required name="user_message"></textarea>
            </div>
            <input type="submit" class="btn btn-primary" value="Enviar">
          </form>
        </div>
        <div class="row justify-content-center mt-3 mb-2">
          <div class="col-lg-6">
            <!-- Ícones das Redes Sociais -->
            <h4>Redes Sociais</h4>
            <div>
              <a href="https://www.facebook.com/seu-facebook" target="_blank" style="margin-right: 25px;">
                <i class="fab fa-facebook-square" style="font-size: 30px;"></i>
              </a>
              <a href="https://www.instagram.com/seu-instagram" target="_blank" style="margin-right: 25px;">
                <i class="fab fa-instagram instagram-icon" style="font-size: 30px;"></i>
              </a>
              <a href="https://api.whatsapp.com/send?phone=seu-numero" target="_blank">
                <i class="fab fa-whatsapp" style="font-size: 30px;color: #1CBD3C;"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.instagram-icon {
  font-size: 30px;
  background: linear-gradient(135deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.background-input {
  background-color: #f2f2f2;
}
</style>

<script>

import emailjs from '@emailjs/browser';
import { mask } from 'vue-the-mask'

export default {
  name: 'ContactView',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  },
  computed: {

  }, isValidPhone() {
    let phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return phoneRegex.test(this.formData.phone);
  },
  directives: { mask },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_99qub15', 'template_l3cj23p', this.$refs.form, 'xAy7NnpOGrrgTtrbx')
        .then((result) => {
          console.log('SUCCESS!', result.text);
        }, (error) => {
          console.log('FAILED...', error.text);
        });
    }
  },
}
</script>