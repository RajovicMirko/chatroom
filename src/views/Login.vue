<template>
  <div class="login container d-flex justify-content-center align-items-center">
    <form class="login-form" @submit="submitForm">
      <div class="title text-center">
        <h2>Chat login</h2>
      </div>

      <div class="inputs">
        <input
          ref="username"
          v-model="username"
          class="form-control"
          type="username"
          id="username"
          placeholder="Username"
        />
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="password"
        />
      </div>

      <div class="actions d-flex justify-content-between">
        <button type="submit" class="btn btn-primary">Login</button>
        <button
          type="button"
          class="btn btn-outline-warning"
          @click="regiserPage"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },

  mounted() {
    this.$refs.username.focus();
  },

  methods: {
    submitForm(e) {
      e.preventDefault();
      e.stopPropagation();

      this.$axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => response.data)
        .then((data) => {
          return data;
        })
        .then((d) => {
          this.$router.push({
            path: "/chat",
            query: {
              data: Object.assign({}, d),
            },
          });
        })
        .catch((err) => console.log(err));
    },

    regiserPage() {
      this.$router.push({
        path: "/register",
      });
    },
  },
};
</script>

<style>
.login {
  /* Solve full height problem */
  /* height: 100vh; */
}

.login-form {
  width: 350px;
}

.login-form .inputs input {
  margin-bottom: 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
}
</style>
