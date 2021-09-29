<template>
  <div>
    <AppBreadcrumb>
      Tài khoản
      <template #links><router-link to="/">Trang chủ</router-link></template>
      <template #endpoint>Đăng nhập</template>
    </AppBreadcrumb>
    <TheLogin />
  </div>
</template>

<script>
import AppBreadcrumb from "../components/sections/AppBreadcrumb.vue";
import TheLogin from "../components/sections/TheLogin.vue";

export default {
  name: "Login",
  pageTitle: "Florist | Đăng nhập",
  components: {
    AppBreadcrumb,
    TheLogin,
  },
};
</script>
