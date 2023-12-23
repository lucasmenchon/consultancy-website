<template>
  <br />
  <div class="container mt-5">
    <div class="container">
      <h3 class="text-center">Contato</h3>
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <form @submit.prevent="submitForm" class="form-control mb-2">
            <div class="mb-3">
              <label for="name" class="form-label">Nome</label>
              <input type="text" class="form-control" id="nome" placeholder="Seu nome" v-model="formData.name" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Seu email" v-model="formData.email"
                required>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Telefone</label>
              <input type="tel" class="form-control" id="telefone" placeholder="Seu telefone" v-model="formData.phone">
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Mensagem</label>
              <textarea class="form-control" id="mensagem" rows="5" placeholder="Sua mensagem" v-model="formData.message"
                required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

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
  components: {

  },
  methods: {

  },
}
</script>