<template>
  <section class="arrival spad">
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "TheNewArrivals",
  data: function () {
    return {
      selectedFilterId: 0,
      filterSet: null,
      newArrivalsItems: null,
    };
  },
};
</script>
