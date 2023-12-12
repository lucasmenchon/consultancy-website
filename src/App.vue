<template>
  <header>
    <NavbarComponent></NavbarComponent>
  </header>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component"/>
      </transition>
    </router-view>
  </main>
</template>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;  
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
import NavbarComponent from '@/components/NavbarComponent'

export default {
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>