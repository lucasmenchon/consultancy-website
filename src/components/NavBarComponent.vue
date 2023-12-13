<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand me-auto">
                <img class="logo" src="../assets/logo.png">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-4" v-for="route in routes" :key="route.path">
                        <router-link class="nav-link" :to="route.path" :class="{ 'active': isActive(route) }">{{
                            capitalizeFirstLetter(route.name) }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            routes: this.$router.getRoutes(),
            activeRoute: ''
        }
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        isActive(route) {
            return this.activeRoute === route.path;
        }
    },
    watch: {
        $route(newVal) {
            this.activeRoute = newVal.path;
        }
    },
    mounted() {
        this.activeRoute = this.$route.path;
    }
}
</script>

<style scoped>
.navbar {
    background-color: transparent;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar a {
    color: #000;
}

.navbar .nav-link.active {
    color: #EE1B2E;
}

.logo {
    height: 60px;
    width: auto;
}
</style>