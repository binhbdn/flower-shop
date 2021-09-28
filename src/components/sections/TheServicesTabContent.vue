<template>
  <div class="services__tab__content">
    <div class="tab-content">
      <div
        v-for="(itemData, index) in serviceTabItemsData"
        :key="index"
        :id="`tabs-${index + 1}`"
        :class="{ show: index == 0, active: index == 0 }"
        :aria-labelledby="`btn-tab-${index + 1}`"
        class="tab-pane fade"
        role="tabpanel"
      >
        <ServicesTabItem :service-tab-item-data="itemData" />
      </div>
    </div>
  </div>
</template>

<script>
import ServicesTabItem from "@/components/base/BaseServicesTabItem";
import axios from "axios";

export default {
  name: "TheServicesTabContent",
  components: {
    ServicesTabItem,
  },
  data: function () {
    return {
      serviceTabItemsData: null,
    };
  },
  created: function () {
    // API endpoint name: services-tab
    axios
      .get(`${process.env.VUE_APP_ROOT_API}/61508bd84a82881d6c55cb7e/latest`)
      .then((response) => {
        this.serviceTabItemsData = response.data.record;
      })
      .catch((error) => console.log(error));
  },
};
</script>
