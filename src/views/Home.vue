<template>
  <main class="home">
    <TheCarousel />
    <TheBenefits />
    <TheCategories />
    <AppAboutUs />
    <button class="btn btn-primary" @click="signInStatusToggle">
      Click to toggle this.$root.$data.isSignedIn
    </button>
  </main>
</template>

<script>
import TheCarousel from "@/components/sections/TheCarousel";
import TheBenefits from "../components/sections/TheBenefits.vue";
import TheCategories from "../components/sections/TheCategories.vue";
import AppAboutUs from "../components/sections/AppAboutUs.vue";

export default {
  name: "Home",
  pageTitle: "Florist | Trang chủ",
  components: {
    TheCarousel,
    TheBenefits,
    TheCategories,
    AppAboutUs,
  },
  methods: {
    // For testing Header logic function only
    signInStatusToggle: function () {
      this.$root.$data.isSignedIn = !this.$root.$data.isSignedIn;
    },
  },
  mounted() {
    // console.log("this.$root.$data.isSignedIn = " + this.$root.$data.isSignedIn);
  },
};
</script>
