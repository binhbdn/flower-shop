<template>
  <section class="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="section-title">
            <span>Dịch vụ</span>
            <h2>Dịch vụ shop Florist</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(itemData, index) in serviceItemsData"
          :key="index"
          class="col-sm-6 col-md-6 col-lg-4"
        >
          <ServiceItem :service-item-data="itemData" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceItem from "@/components/base/BaseServicesItem";
import axios from "axios";

export default {
  name: "TheServices",
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
      .get(
        `${process.env.VUE_APP_ROOT_API}/c6bcd447-5ac8-46c4-b788-9ec82f6a782a`
      )
      .then((response) => {
        this.serviceItemsData = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>
