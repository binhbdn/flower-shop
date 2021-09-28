<template>
  <div>
    <AppBreadcrumb>
      Giới thiệu
      <template #links><router-link to="/">Trang chủ</router-link></template>
      <template #endpoint>Giới thiệu</template>
    </AppBreadcrumb>
    <AppAboutUs />
    <TheServices />
    <AppTestimonial />
    <TheTeam />
  </div>
</template>

<script>
import AppBreadcrumb from "../components/sections/AppBreadcrumb.vue";
import AppAboutUs from "../components/sections/AppAboutUs.vue";
import TheServices from "../components/sections/TheServices.vue";
import AppTestimonial from "../components/sections/AppTestimonial.vue";
import TheTeam from "../components/sections/TheTeam.vue";

export default {
  name: "About",
  pageTitle: "Florist | Giới thiệu",
  components: {
    AppBreadcrumb,
    AppAboutUs,
    TheServices,
    AppTestimonial,
    TheTeam,
  },
};
</script>
