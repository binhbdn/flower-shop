<template>
  <main class="home">
    <TheCarousel />
    <TheBenefits />
    <TheCategories />
    <AppAboutUs />
    <TheLatestPosts />
    <AppTestimonial />
  </main>
</template>

<script>
import TheCarousel from "@/components/sections/TheCarousel";
import TheBenefits from "../components/sections/TheBenefits.vue";
import TheCategories from "../components/sections/TheCategories.vue";
import AppAboutUs from "../components/sections/AppAboutUs.vue";
import TheLatestPosts from "../components/sections/TheLatestPosts.vue";
import AppTestimonial from "../components/sections/AppTestimonial.vue";

export default {
  name: "Home",
  pageTitle: "Florist | Trang chủ",
  components: {
    TheCarousel,
    TheBenefits,
    TheCategories,
    AppAboutUs,
    TheLatestPosts,
    AppTestimonial,
  },
};
</script>
