<template>
  <div class="container">

    <div class="row mt-4">
      <div class="col-md-6 mb-3 d-flex align-items-stretch">
        <div class="card h-100">
          <div class="card-body d-flex flex-column justify-content-center">
            <div>
              <h2 class="card-title text-center mb-0">Porque nos contratar?</h2>
              <hr> <!-- Linha horizontal abaixo do título -->
            </div>
            <div>
              <p class="card-text text-justify">
                O melhor Custo benefício, agilidade no processo e condições especiais para pagamentos de vistos superiores
                ao Turista (B1/B2). Além disso, proporcionamos assistência em cada etapa do processo de obtenção do visto,
                garantindo que você tenha todas as informações necessárias.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3 d-flex align-items-stretch">
        <div class="card h-100">
          <div class="card-body d-flex flex-column justify-content-center">
            <div>
              <h2 class="card-title text-center">Segurança</h2>
              <hr> <!-- Linha horizontal abaixo do título -->
            </div>
            <div>
              <p class="card-text text-justify">
                Temos o maior respeito com as suas informações pessoais, elas são guardadas com sigilo absoluto. Após a
                conclusão do serviço todos os seus dados são apagados do nosso banco de dados, seguindo as normas de
                segurança N.13.709/2018.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <h3 class="text-center">Na AMARICONELLI</h3>
        <p class="text-justify">
          Nós simplificamos seu processo de solicitação. Sem filas de espera e preços que cabem no seu bolso para emitir
          ou renovar seu Visto Americano. Veja abaixo os vistos que trabalhamos!
        </p>
      </div>
    </div>

    <div class="buttons-grid mt-3">
      <button class="button-square">B1/B2</button>
      <button class="button-square">EB1</button>
      <button class="button-square">EB2</button>
      <button class="button-square">EB3</button>
      <button class="button-square">EB4</button>
      <button class="button-square">EB5</button>
      <button class="button-square">E2</button>
      <button class="button-square">FI/M1</button>
      <button class="button-square">PETIÇÕES</button>
      <button class="button-square">ASILO</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* .buttons-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
} */

.buttons-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Espaço entre os botões */
  margin-top: 20px;
}



/* .button-square {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #013878;
  color: white;
  border-radius: 5px;
  height: 60px;
  padding: 8px;
  font-size: 16px;
  width: calc(20% - 20px);
  max-width: 150px;
  flex-grow: 1; 
  flex-shrink: 1; 
  text-align: center; 
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
} */

.button-square {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #013878;
  color: white;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  flex-grow: 1; /* Permite o crescimento dos botões */
  flex-shrink: 1; /* Permite a redução dos botões */
  text-align: center; /* Alinhamento do texto no centro */
  white-space: nowrap; /* Impede a quebra de linha do texto */
  overflow: hidden; /* Esconde texto que ultrapassa o botão */
  text-overflow: ellipsis; /* Adiciona reticências para texto cortado */
}

@media screen and (min-width: 768px) {
  .button-square {
    flex-basis: 150px; /* Largura fixa para os botões em PCs */
  }
}
</style>
