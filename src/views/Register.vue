<template>
  <div class="register container d-flex justify-content-center align-items-center">
    <form class="form-def" @submit="submitForm">
      <div class="title text-center">
        <h2>Chat registration</h2>
      </div>

      <div class="form-inputs">
        <input
          ref="username"
          type="username"
          class="form-control"
          id="username"
          placeholder="Username"
          v-model="username"
        />
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="password"
        />
        <input type="email" class="form-control" id="email" placeholder="Email" v-model="email" />
      </div>

      <div class="actions d-flex justify-content-between">
        <button type="submit" class="btn btn-primary">Register</button>
        <button type="button" class="btn btn-outline-warning" @click="loginPage">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      email: ""
    };
  },

  mounted() {
    this.$refs.username.focus();
  },

  methods: {
    submitForm(e) {
      e.preventDefault();
      e.stopPropagation();

      console.log("submit register form", "add validation");
      console.log(this.$data);
    },

    loginPage() {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>

<style>
</style>