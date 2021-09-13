<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/sections/AppHeader";
import AppFooter from "@/components/sections/AppFooter";

export default {
  name: "AppLayoutDefault",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
