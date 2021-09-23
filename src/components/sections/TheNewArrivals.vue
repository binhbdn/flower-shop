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
  created: function () {
    // API endpoint name: new-arrivals-data
    axios
      .get(
        `${process.env.VUE_APP_ROOT_API}/b9614b1d-567b-4e4c-9fe3-845b0a734ab5`
      )
      .then((response) => {
        this.filterSet = response.data.filterSet;
        this.newArrivalsItems = response.data.newArrivalsItems;
      })
      .catch((error) => console.log(error));
  },
};
</script>
