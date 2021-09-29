<template>
  <div>
    <AppBreadcrumb>
      Tài khoản
      <template #links><router-link to="/">Trang chủ</router-link></template>
      <template #endpoint>Đăng ký</template>
    </AppBreadcrumb>
    <TheRegister />
  </div>
</template>

<script>
import AppBreadcrumb from "../components/sections/AppBreadcrumb.vue";
import TheRegister from "../components/sections/TheRegister.vue";

export default {
  name: "Register",
  pageTitle: "Florist | Đăng ký",
  components: {
    AppBreadcrumb,
    TheRegister,
  },
};
</script>
