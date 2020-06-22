import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
Vue.prototype.$axios = axios;

import { getComponent } from "./components/componentMap";
Vue.prototype.$getComponent = getComponent;

import { getInitialFromName } from "./jsHelpers/getInitials";
Vue.prototype.$getInitialFromName = getInitialFromName;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
