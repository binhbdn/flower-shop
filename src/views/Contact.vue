<template>
  <div>
    <AppBreadcrumb>
      Liên hệ với chúng tôi
      <template #links><router-link to="/">Trang chủ</router-link></template>
      <template #endpoint>Liên hệ</template>
    </AppBreadcrumb>
    <TheContact />
  </div>
</template>

<script>
import AppBreadcrumb from "../components/sections/AppBreadcrumb.vue";
import TheContact from "../components/sections/TheContact.vue";

export default {
  name: "Contact",
  pageTitle: "Florist | Liên hệ",
  components: {
    AppBreadcrumb,
    TheContact,
  },
};
</script>
