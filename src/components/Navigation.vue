<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Drawer control -->
    <span class="drawer-btn navbar-toggler-icon" @click="drawerControl"></span>

    <!-- Brand -->
    <router-link class="navbar-brand" to="/">
      <img src="../assets/chatLogo.svg" width="30" height="30" alt loading="lazy" />
      ChatManiac
    </router-link>

    <!-- Mobile button -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Links -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active" v-for="route in routes" :key="route.path">
          <router-link class="nav-link" :to="route.path">
            {{route.name}}
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routes: this.$router.options.routes.filter(route => route.path !== "/")
    };
  },

  methods: {
    drawerControl() {
      const drawer = document.querySelector(".drawer");
      drawer.classList.toggle("drawer-closed");
    }
  }
};
</script>

<style>
.navbar {
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.1);
}

.drawer-btn {
  margin-right: 1rem;
}

.drawer-btn:hover {
  cursor: pointer;
}
</style>