<template>
    <hr style="margin: 0;">
    <div class="container-fluid" style="padding: 0;">
        <!-- Footer -->
        <footer class="text-center text-lg-start" style="background-color: white;">
            <!-- Grid container -->
            <div class="container pb-0">
                <!-- Section: Links -->
                <section class="">
                    <!--Grid row-->
                    <div class="row">

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold">Fale Conosco</h6>
                            <!-- <p><i class="fas fa-home mr-3"></i> Cidade, Estado CEP, Pais</p> -->
                            <p>
                                <a href="mailto:amariconelli@hotmail.com" class="text-decoration-none"
                                    style="color: #3b5998;">
                                    <i class="fas fa-envelope me-1" style="color: #3b5998;"></i> amariconelli@hotmail.com
                                </a>
                            </p>
                            <p>
                                <a href="tel:+5511976917787" class="text-decoration-none" style="color: #000;">
                                    <i class="fas fa-phone me-1" style="color: #3b5998;"></i> (11) 97552-8024</a>
                            </p>
                            <p>
                                <a href="https://wa.me/message/L57OUXXHQ6VUB1" class="text-decoration-none"
                                    style="color: forestgreen;" target="_blank">
                                    <i class="fab fa-whatsapp me-1" style="font-size: 20px;color:forestgreen;"></i> (11)
                                    97552-8024</a>
                            </p>
                        </div>

                        <div class="col-md-4 mt-3 d-flex justify-content-center">
                            <div class="row">
                                <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
                                    <img src="../assets/brazil.svg" alt="Ícone Brasil" style="width: 50px; height: 50px;">
                                    <p style="font-size: 10px; text-align: center; margin-top: 5px;">
                                        Atendimento para todo o Brasil
                                    </p>
                                </div>
                                <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
                                    <img src="../assets/lock.svg" alt="Ícone de Cadeado" style="width: 50px; height: 50px;">
                                    <p style="font-size: 10px; text-align: center; margin-top: 5px;">
                                        Segurança máxima
                                    </p>
                                </div>
                            </div>
                        </div>



                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 mb-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold">redes sociais, Siga-nos</h6>

                            <div>
                                <a href="https://www.facebook.com/amariconelli" target="_blank" style="margin-right: 25px;">
                                    <i class="fab fa-facebook-square" style="font-size: 30px;"></i>
                                </a>
                                <a href="https://www.instagram.com/amariconelli_/" target="_blank"
                                    style="margin-right: 25px;">
                                    <i class="fab fa-instagram instagram-icon" style="font-size: 30px;"></i>
                                </a>
                                <a href="https://wa.me/message/L57OUXXHQ6VUB1" target="_blank">
                                    <i class="fab fa-whatsapp" style="font-size: 30px;color: #1CBD3C;"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!--Grid row-->

                </section>
                <!-- Section: Links -->
            </div>
            <!-- Grid container -->
            <hr style="margin: 0;">
            <!-- Copyright -->
            <div class="text-center p-1">
                © Amariconelli. Todos os direitos reservados
            </div>
            <!-- Copyright -->
        </footer>
        <!-- Footer -->
    </div>
    <!-- End of .container -->
</template>
<style scoped>
.instagram-icon {
    font-size: 30px;
    background: linear-gradient(135deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.link-hover {
    color: #3b5998;
    /* Cor do texto inicial */
    transition: color 0.3s;
    /* Transição suave ao passar o mouse */
    font-weight: bold;
    /* Fonte em negrito */
}

.link-hover:hover {
    color: #013878;
    /* Nova cor ao passar o mouse */
    text-decoration: underline;
    /* Sublinhado ao passar o mouse */
    cursor: pointer;
    /* Mostrar cursor ao passar o mouse */
}
</style>
<script>
export default {
    data() {
        return {
            routes: this.$router.getRoutes(),

        }
    },
    computed: {

    },
    watch: {
        $route(newVal) {
            this.activeRoute = newVal.path;
        }
    },
    methods: {

    },
    mounted() {
        this.activeRoute = this.$route.path;
    }
}
</script>