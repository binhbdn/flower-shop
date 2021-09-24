<template>
  <div class="about">
    <AppBreadcrumb>
      Giới thiệu
      <template #links><router-link to="/">Trang chủ</router-link></template>
      <template #endpoint>Giới thiệu</template>
    </AppBreadcrumb>
    <AppAboutUs />
    <AppTestimonial />
  </div>
</template>

<script>
import AppBreadcrumb from "../components/sections/AppBreadcrumb.vue";
import AppAboutUs from "../components/sections/AppAboutUs.vue";
import AppTestimonial from "../components/sections/AppTestimonial.vue";

export default {
  name: "About",
  pageTitle: "Florist | Giới thiệu",
  components: {
    AppBreadcrumb,
    AppAboutUs,
    AppTestimonial,
  },
};
</script>
