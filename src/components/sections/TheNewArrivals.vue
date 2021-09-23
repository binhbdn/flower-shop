<template>
  <section class="arrival spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="section-title">
            <span>Hoa tươi</span>
            <h2>Mới Nhập Về</h2>
          </div>
          <div class="filter__controls">
            <ul>
              <li
                v-for="item in filterSet"
                :key="item.id"
                :class="{ active: selectedFilterId == item.id }"
                @click="selectedFilterId = item.id"
              >
                {{ item.filterName }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="view__all">
            <router-link to="/san-pham" class="btn-florist"
              >Xem tất cả sản phẩm</router-link
            >
          </div>
        </div>
      </div>
    </div>
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
