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
        <template v-for="item in newArrivalsItems">
          <div
            v-show="selectedFilterId == 0 || item.filterId == selectedFilterId"
            :key="item.productId"
            class="d-col"
          >
            <div class="product__item">
              <div
                :style="{
                  'background-image': 'url(' + item.bgImgUrl + ')',
                }"
                class="product__item__pic set-bg"
              >
                <div v-if="item.label" class="label">
                  {{ item.label }}
                </div>
                <ul class="product__item__hover">
                  <li>
                    <!-- Button trigger Product Preview Modal -->
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#productPreviewModal"
                      @click="quickViewProductId = item.productId"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Xem chi tiết"
                        ><BaseIconSearch
                      /></span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      :title="
                        item.quantity == 0 ||
                        item.quantityInCart == item.quantity
                          ? 'Hết số lượng để thêm vào giỏ'
                          : 'Thêm vào giỏ hàng'
                      "
                      @click="addToCard(item)"
                    >
                      <span>
                        <BaseIconCartDisable
                          v-if="
                            item.quantity == 0 ||
                            item.quantityInCart == item.quantity
                          "
                        />
                        <BaseIconCart v-else-if="item.quantityInCart == 0" />
                        <BaseIconCartPlus v-else />
                      </span>
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        :title="
                          item.isFavorited
                            ? 'Bỏ khỏi danh sách yêu thích'
                            : 'Thêm vào danh sách yêu thích'
                        "
                        @click="favoriteToggle(item)"
                      >
                        <BaseIconHeartFill v-if="item.isFavorited" />
                        <BaseIconHeart v-else />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div class="product__item__text">
                <button
                  class="product__name"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#productPreviewModal"
                  @click="quickViewProductId = item.productId"
                >
                  <span
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Xem chi tiết"
                  >
                    {{ getFilterNameById(item.filterId) }}
                    <b>No. {{ item.productId }}</b>
                  </span>
                </button>
                <div class="price">
                  {{ item.price }}đ
                  <span v-if="item.oldPrice > 0">{{ item.oldPrice }}đ</span>
                </div>
                <button
                  v-if="
                    item.quantity != 0 && item.quantityInCart < item.quantity
                  "
                  class="cart-btn"
                  type="button"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </template>
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

    <!-- Product Preview Modal -->
    <div
      class="modal fade"
      id="productPreviewModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">{{ quickViewProductId }}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
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
      quickViewProductId: -1,
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
  methods: {
    getFilterNameById: function (id) {
      for (const item of this.filterSet) {
        if (item.id == id) {
          return item.filterName;
        }
      }
      return this.filterSet[0].filterName;
    },
    addToCard: function (item) {
      if (item.quantityInCart < item.quantity) {
        item.quantityInCart++;
        this.$root.$data.selectedProductsCount++;
      }
    },
    favoriteToggle: function (item) {
      if (item.isFavorited) {
        this.$root.$data.favoriteProductsCount--;
      } else {
        this.$root.$data.favoriteProductsCount++;
      }
      item.isFavorited = !item.isFavorited;
    },
  },
};
</script>
