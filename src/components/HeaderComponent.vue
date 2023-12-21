<template>
  <div>
    <header>
      <!-- <NavbarComponent></NavbarComponent> -->
    </header>
    <div class="imageContainer">
      <img src="../assets/img-header.jpg" alt="bannerImage" class="bannerImage">
      <div class="overlay"></div>
    </div>
  </div>
</template>
  
<script>
//import NavbarComponent from '@/components/NavbarComponent.vue'

export default {
  components: {
   // NavbarComponent
  }
}
</script>
      
<style scoped>

.imageContainer {
  position: relative;
  width: 100%;
  padding-top: 55px;
}

.bannerImage {
  width: 100%;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
</style>