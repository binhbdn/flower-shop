<template>
  <div>
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/sections/TheHeader";
import TheFooter from "@/components/sections/TheFooter";

export default {
  name: "AppLayoutDefault",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
