<template>
  <div class="services__sidebar__tab">
    <ul class="nav nav-tabs" role="tablist">
      <li
        v-for="(itemData, index) in serviceItemsData"
        :key="index"
        class="nav-item"
        role="presentation"
      >
        <button
          :id="`btn-tab-${index + 1}`"
          :data-bs-target="`#tabs-${index + 1}`"
          :aria-controls="`tabs-${index + 1}`"
          :aria-selected="index == 0"
          :class="{ active: index == 0 }"
          class="nav-link"
          data-bs-toggle="tab"
          role="tab"
          type="button"
        >
          <ServiceItem :service-item-data="itemData" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import ServiceItem from "@/components/base/BaseServicesItem";
import axios from "axios";

export default {
  name: "TheServicesSidebarTab",
  components: {
    ServiceItem,
  },
  data: function () {
    return {
      serviceItemsData: null,
    };
  },
  created: function () {
    // API endpoint name: services
    axios
      .get(`${process.env.VUE_APP_ROOT_API}/614f3504aa02be1d444e88c0/latest`)
      .then((response) => {
        this.serviceItemsData = response.data.record;
      })
      .catch((error) => console.log(error));
  },
};
</script>
