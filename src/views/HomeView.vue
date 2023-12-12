<template>
  <div class="home">
    <img alt="" src="">
    <HelloWorld msg="Em desenvolvimento..."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
