<template>
  <div id="app" class="d-flex flex-column">
    <Navigation :pageName="pageName" />
    <router-view style="flex: 1" />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "App",

  components: { Navigation },

  data() {
    return {
      pageName: ""
    };
  },

  beforeUpdate() {
    this.pageName = this.$router.currentRoute.name;
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100vh;
}
</style>
