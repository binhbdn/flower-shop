<template>
  <div>
    <TheHeader />
    <slot />
    <TheInstagram />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/sections/TheHeader";
import TheInstagram from "@/components/sections/TheInstagram";
import TheFooter from "@/components/sections/TheFooter";

export default {
  name: "AppLayoutDefault",
  components: {
    TheHeader,
    TheInstagram,
    TheFooter,
  },
};
</script>
