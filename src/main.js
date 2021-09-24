import "bootstrap";

// Import just what bootstrap JS we need
// import Alert from "~bootstrap/js/dist/alert.js";
// import BaseComponent from "~bootstrap/js/dist/base-component";
// import Button from "~bootstrap/js/dist/button";
// import Carousel from "~bootstrap/js/dist/carousel";
// import Collapse from "~bootstrap/js/dist/collapse";
// import Dropdown from "~bootstrap/js/dist/dropdown";
// import Modal from "~bootstrap/js/dist/modal";
// import Offcanvas from "~bootstrap/js/dist/offcanvas";
// import Popover from "~bootstrap/js/dist/popover";
// import Scrollspy from "~bootstrap/js/dist/scrollspy";
// import Tab from "~bootstrap/js/dist/tab";
// import Toast from "~bootstrap/js/dist/toast";
// import Tooltip from "~bootstrap/js/dist/tooltip";

// import { Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip } from 'bootstrap';

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import pageTitleMixin from "./mixins/pageTitleMixin";
Vue.mixin(pageTitleMixin);

import AppLayout from "./components/layouts/AppLayout.vue";
import BaseLogo from "./components/base/BaseLogo.vue";

import BaseIconSvgTemplate from "./components/base/BaseIconSvgTemplate.vue";
import BaseIconCart from "./components/base/BaseIconCart.vue";
import BaseIconCartPlus from "./components/base/BaseIconCartPlus.vue";
import BaseIconCartMinus from "./components/base/BaseIconCartMinus.vue";
import BaseIconCartDisable from "./components/base/BaseIconCartDisable.vue";
import BaseIconCartCheck from "./components/base/BaseIconCartCheck.vue";
import BaseIconHeart from "./components/base/BaseIconHeart.vue";
import BaseIconHeartFill from "./components/base/BaseIconHeartFill.vue";
import BaseIconSearch from "./components/base/BaseIconSearch.vue";

Vue.component("AppLayout", AppLayout);
Vue.component("BaseLogo", BaseLogo);

Vue.component("BaseIconSvgTemplate", BaseIconSvgTemplate);
Vue.component("BaseIconCart", BaseIconCart);
Vue.component("BaseIconCartPlus", BaseIconCartPlus);
Vue.component("BaseIconCartMinus", BaseIconCartMinus);
Vue.component("BaseIconCartDisable", BaseIconCartDisable);
Vue.component("BaseIconCartCheck", BaseIconCartCheck);
Vue.component("BaseIconHeart", BaseIconHeart);
Vue.component("BaseIconHeartFill", BaseIconHeartFill);
Vue.component("BaseIconSearch", BaseIconSearch);

Vue.config.productionTip = false;

new Vue({
  router,
  data: {
    isSignedIn: false,
    selectedProductsCount: 0,
    favoriteProductsCount: 0,
  },
  render: (h) => h(App),
}).$mount("#app");
