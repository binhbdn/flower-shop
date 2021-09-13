import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import pageTitleMixin from "./mixins/pageTitleMixin";
Vue.mixin(pageTitleMixin);

import AppLayout from "./components/layouts/AppLayout.vue";
Vue.component("AppLayout", AppLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
