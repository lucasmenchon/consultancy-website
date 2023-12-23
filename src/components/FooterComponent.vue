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

                        <!-- Grid column -->
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold">Fale Conosco</h6>
                            <!-- <p><i class="fas fa-home mr-3"></i> Cidade, Estado CEP, Pais</p> -->
                            <p>
                                <i class="fas fa-envelope me-2" style="color: #3b5998;"></i>
                                <a href="mailto:amariconelli@hotmail.com" class="text-decoration-none"
                                    style="color: #3b5998;">amariconelli@hotmail.com</a>
                            </p>
                            <p>
                                <i class="fas fa-phone me-2" style="color: #3b5998;"></i>
                                <a href="tel:+5511975528024" class="text-decoration-none" style="color: #000;">(11)
                                    97552-8024</a>
                            </p>
                            <p>
                                <i class="fab fa-whatsapp me-2" style="font-size: 22px;color:forestgreen;"></i>
                                <a href="tel:+5511975528024" class="text-decoration-none" style="color: forestgreen;">(11)
                                    97552-8024</a>
                            </p>
                        </div>
                        <!-- Grid column -->



                        <hr class="w-100 clearfix d-md-none" />

                        <!-- Grid column -->
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold">Menu</h6>
                            <router-link to="/" class="text-decoration-none">
                                <p class="mb-1 link-hover">Home</p>
                            </router-link>
                            <router-link to="/about" class="text-decoration-none">
                                <p class="mb-1 link-hover">Sobre</p>
                            </router-link>
                            <router-link to="/contact" class="text-decoration-none">
                                <p class="mb-1 link-hover">Contato</p>
                            </router-link>
                        </div>


                        <!-- Grid column -->

                        <hr class="w-100 clearfix d-md-none" />

                        <!-- Grid column -->
                        <hr class="w-100 clearfix d-md-none" />

                        <!-- Grid column -->
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 mb-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold">Siga-nos</h6>

                            <!-- Facebook -->
                            <a class="btn btn-primary btn-floating m-1"
                                style="background-color: #0866FF; border: none; display: inline-block; width: 126px; text-decoration: none; color: white;"
                                href="#!" role="button">
                                <i class="fab fa-facebook-f" style="margin-right: 5px;"></i>Facebook
                            </a>

                            <!-- Instagram -->
                            <a class="btn btn-primary m-1"
                                style="background-color: #000; border: none; display: inline-block; width: 126px;text-decoration: none; color: white;"
                                href="#!">
                                <i class="fab fa-instagram" style="margin-right: 5px;"></i>Instagram
                            </a>
                        </div>

                        <!-- Grid column -->
                        <!-- <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold">
                                <a class="navbar-brand me-auto">
                                    <img class="logo" src="../assets/logo.png" style="width: 180px; height: auto;">
                                </a>
                            </h6>                            
                        </div> -->
                        <!-- Grid column -->

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