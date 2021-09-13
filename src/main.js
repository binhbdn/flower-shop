import 'bootstrap';

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
Vue.component("AppLayout", AppLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
