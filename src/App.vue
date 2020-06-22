<template>
  <div id="app" class="d-flex flex-column">
    <component :is="$getComponent('Navigation')" :pageName="pageName"></component>
    <router-view style="flex: 1" />
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      pageName: this.$router.currentRoute.name
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
  color: #2c3e50;
  height: 100vh;
}
</style>
