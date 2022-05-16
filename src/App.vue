<template>
  <div class="app">
    <HeaderComponent/>
    <NavBar/>
  </div>

</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import NavBar from "@/components/NavBar";
export default {
  name: 'App',
  components: {NavBar, HeaderComponent}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
  margin: 0;
}
.app{
  height: 100vh;
}
</style>
