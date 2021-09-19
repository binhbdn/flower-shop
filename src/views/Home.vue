<template>
  <main class="home">
    <TheCarousel />
    <TheBenefits />
    <p>For testing Header logic function only</p>
    <button class="btn btn-primary" @click="signInStatusToggle">
      Click to toggle this.$root.$data.isSignedIn
    </button>
    <p>{{ this.$root.$data.isSignedIn }}</p>
  </main>
</template>

<script>
import TheCarousel from "@/components/sections/TheCarousel";
import TheBenefits from '../components/sections/TheBenefits.vue';

export default {
  name: "Home",
  pageTitle: "Florist | Trang chủ",
  components: {
    TheCarousel,
    TheBenefits,
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
