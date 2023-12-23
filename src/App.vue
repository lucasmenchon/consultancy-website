<template>
  <NavbarComponent />
  <main class="main" id="app">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <FooterComponent />
</template>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;  
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transform-origin: top;
  transform: translateY(-100%);
  opacity: 0;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

<script>
import FooterComponent from '@/components/FooterComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'

export default {
  name: 'App',
  components: {
    FooterComponent,
    NavbarComponent
  }
}

</script>