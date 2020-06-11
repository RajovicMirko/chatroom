<template>
  <div>
    <h1>This is {{ this.$router.history.current.name }} page</h1>
    {{ data }}
  </div>
</template>

<script>
export default {
  name: "Chat",
  computed: {
    data() {
      console.log(this.$router.currentRoute.query.data);
      return this.$router.currentRoute.query.data;
    },
  },
};
</script>

<style></style>
