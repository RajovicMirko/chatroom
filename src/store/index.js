import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import user from "./user";

export default function() {
  const Store = new Vuex.Store({
    modules: {
      user,
    },
  });

  return Store;
}
