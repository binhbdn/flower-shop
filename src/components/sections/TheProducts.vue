<template>
  <section class="product">
    <div class="container">
      <div class="product__widget">
        <div class="row">
          <div class="col-12 text-center pb-3">
            <div class="form-check d-inline-block pe-3">
              <input
                v-model="isCheckedAll"
                id="checkboxAll"
                class="form-check-input"
                type="checkbox"
                checked
              />
              <label for="checkboxAll" class="form-check-label">
                {{ filterSet[0].filterName }}
              </label>
            </div>
            <div
              v-for="index in 5"
              :key="index"
              :class="{ 'pe-3': index != 5 }"
              class="form-check d-inline-block"
            >
              <input
                v-model="filterSet[index].isChecked"
                :id="`checkbox${index}`"
                @change="indeterminateCheckbox"
                class="form-check-input"
                type="checkbox"
                checked
              />
              <label :for="`checkbox${index}`" class="form-check-label">
                {{ filterSet[index].filterName }}
              </label>
            </div>
          </div>
          <div class="col-lg-7 col-md-6">
            <div class="product__widget__text navbar-light">
              <i class="navbar-toggler-icon"></i>
              <p v-if="productTotal == 0">Không có sản phẩm nào !</p>
              <p v-else>Có tất cả {{ productTotal }} sản phẩm</p>
            </div>
          </div>
          <div class="col-lg-5 col-md-6">
            <div class="product__widget__filter">
              <select v-model="sortBy" class="form-select">
                <option value="" disabled>Chọn một kiểu sắp xếp</option>
                <option value="0" selected>Sắp xếp theo mã sản phẩm</option>
                <option value="1">Sắp xếp theo giá tăng dần</option>
                <option value="2">Sắp xếp theo giá giảm dần</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <template v-for="item in sortedProductsList">
          <div
            v-if="isMatchFilterSet(item)"
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
                      :class="{
                        disabled:
                          item.quantity == 0 ||
                          item.quantityInCart == item.quantity,
                      }"
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
                  VNĐ {{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}
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
            <span @click="loadMoreProducts" class="btn-florist" role="button"
              >Xem thêm các sản phẩm khác</span
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
  name: "TheProducts",
  data: function () {
    return {
      quickViewProductId: -1,
      isCheckedAll: true,

      sortBy: -1,
      unSortedProductsList: null,

      // reference to $root.$data
      filterSet: null, // alias for this.$root.$data.filterSet
      allProducts: {
        newProductItems: null, // alias for this.$root.$data.allProducts.newProductItems
        oldProductItems: null, // alias for this.$root.$data.allProducts.oldProductItems
      },
    };
  },

  computed: {
    sortedProductsList: function () {
      if (this.unSortedProductsList == null) return null;

      if (this.sortBy == 0) {
        return this.unSortedProductsList;
      } else if (this.sortBy == 1) {
        return [...this.unSortedProductsList].sort(function (a, b) {
          return a.price - b.price;
        });
      } else if (this.sortBy == 2) {
        return [...this.unSortedProductsList].sort(function (a, b) {
          return b.price - a.price;
        });
      } else {
        return null;
      }
    },

    productTotal: function () {
      if (this.unSortedProductsList == null) return 0;

      let count = 0;
      for (let i = 0; i < this.unSortedProductsList.length; i++) {
        if (this.isMatchFilterSet(this.unSortedProductsList[i])) count++;
      }

      return count;
    },
  },

  watch: {
    isCheckedAll: function (newVal) {
      for (let i = 1; i < 6; i++) {
        let newArrItem = this.filterSet[i];
        newArrItem.isChecked = newVal;
        this.filterSet.splice(i, 1, newArrItem);
      }
    },
  },

  created: function () {
    // Fetch newProductItems
    if (this.$root.$data.allProducts.newProductItems == null) {
      // API endpoint name: new-arrivals-data
      axios
        .get(`${process.env.VUE_APP_ROOT_API}/614f3e1aaa02be1d444e8bd9/latest`)
        .then((response) => {
          this.$root.$data.allProducts.newProductItems =
            response.data.record.newArrivalsItems;
          this.$root.$data.filterSet = response.data.record.filterSet;

          this.allProducts.newProductItems =
            this.$root.$data.allProducts.newProductItems;
          this.filterSet = this.$root.$data.filterSet;
        })
        .catch((error) => console.log(error));
    } else {
      this.allProducts.newProductItems =
        this.$root.$data.allProducts.newProductItems;
      this.filterSet = this.$root.$data.filterSet;
    }

    // Fetch oldProductItems
    // API endpoint name: old-product-items
    axios
      .get(`${process.env.VUE_APP_ROOT_API}/6151c6814a82881d6c5667dc/latest`)
      .then((response) => {
        this.$root.$data.allProducts.oldProductItems = response.data.record;
        this.allProducts.oldProductItems =
          this.$root.$data.allProducts.oldProductItems;

        this.unSortedProductsList = this.allProducts.newProductItems.concat(
          this.allProducts.oldProductItems
        );
        this.sortBy = 0;
      })
      .catch((error) => console.log(error));
  },

  methods: {
    isMatchFilterSet: function (item) {
      if (item == null) return false;
      return (
        (this.filterSet[1].isChecked &&
          item.filterId == this.filterSet[1].id) ||
        (this.filterSet[2].isChecked &&
          item.filterId == this.filterSet[2].id) ||
        (this.filterSet[3].isChecked &&
          item.filterId == this.filterSet[3].id) ||
        (this.filterSet[4].isChecked &&
          item.filterId == this.filterSet[4].id) ||
        (this.filterSet[5].isChecked && item.filterId == this.filterSet[5].id)
      );
    },

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

    indeterminateCheckbox: function () {
      let allTrue = true;
      for (let i = 1; i < 6; i++) {
        if (!this.filterSet[i].isChecked) {
          allTrue = false;
          break;
        }
      }

      let allFalse = true;
      for (let i = 1; i < 6; i++) {
        if (this.filterSet[i].isChecked) {
          allFalse = false;
          break;
        }
      }

      const checkbox = document.getElementById("checkboxAll");

      if (allTrue) {
        this.isCheckedAll = true;
        checkbox.indeterminate = false;
      } else if (allFalse) {
        this.isCheckedAll = false;
        checkbox.indeterminate = false;
      } else {
        checkbox.indeterminate = true;
      }
    },

    loadMoreProducts: function () {
      // Fetch loadMoreProducts
      // API endpoint name: load-more-products
      axios
        .get(`${process.env.VUE_APP_ROOT_API}/6152e4989548541c29b9e8fb/latest`)
        .then((response) => {
          this.unSortedProductsList = this.unSortedProductsList.concat(
            response.data.record
          );
          this.sortBy = 0;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
