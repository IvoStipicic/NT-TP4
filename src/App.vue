<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1><center><u>TP4: Forms and HttpRequest</u></center></h1>
      <br>
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
}

h1 {
  color: black;
}

.jumbotron {
  padding: 40px !important;
}

</style>
