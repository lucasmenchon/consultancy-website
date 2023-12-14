<template>
    <div>
        <header class="customHeader">
            <NavbarComponent></NavbarComponent>
            <div class="imageContainer">
                <img src="../assets/img-header.jpg" alt="" style="width: 100%;">
            </div>
        </header>
    </div>
</template>
  
<script>
import NavbarComponent from '@/components/NavbarComponent.vue'

export default {
    components: {
        NavbarComponent
    }
}
</script>
    
<style scoped>
.customHeader {
    position: relative;
    z-index: 1;
}

.imageContainer img {
    width: 100%;
}
</style>
  