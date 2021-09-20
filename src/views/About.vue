<template>
  <div class="about">
    <AppAboutUs />
    <AppTestimonial />
  </div>
</template>

<script>
import AppAboutUs from "../components/sections/AppAboutUs.vue";
import AppTestimonial from "../components/sections/AppTestimonial.vue";

export default {
  name: "About",
  pageTitle: "Florist | Giới thiệu",
  components: {
    AppAboutUs,
    AppTestimonial,
  },
};
</script>
