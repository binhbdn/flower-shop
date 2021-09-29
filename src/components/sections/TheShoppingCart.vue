<template>
  <section class="cart">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="cart__table">
            <table>
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-if="selectedProductsList">
                <template v-for="item in selectedProductsList">
                  <tr :key="item.productId">
                    <td class="cart__item">
                      <div class="cart__item__pic">
                        <img :src="item.bgImgUrl" />
                      </div>
                      <div class="cart__item__text">
                        <h4>
                          {{ getFilterNameById(item.filterId) }}
                          {{ item.productId }}
                        </h4>
                        <span
                          >VNĐ
                          {{
                            item.price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                          }}</span
                        >
                      </div>
                    </td>
                    <td class="cart__quantity">
                      <div class="quantity">
                        <div class="pro-qty">
                          <span
                            @click="removeOneFromCart(item)"
                            :title="
                              item.quantityInCart < 1 ? '' : 'Bớt khỏi giỏ hàng'
                            "
                            :class="{
                              disabled: item.quantityInCart < 1,
                            }"
                            class="qtybtn"
                            role="button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            ><BaseIconCartMinus size="24"
                          /></span>
                          <input type="text" :value="item.quantityInCart" />
                          <span
                            @click="addToCard(item)"
                            :title="
                              item.quantityInCart == item.quantity
                                ? 'Hết số lượng để thêm vào giỏ'
                                : 'Thêm vào giỏ hàng'
                            "
                            :class="{
                              disabled: item.quantityInCart == item.quantity,
                            }"
                            class="qtybtn"
                            role="button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            ><BaseIconCartPlus size="24"
                          /></span>
                        </div>
                      </div>
                    </td>
                    <td class="cart__price">
                      VNĐ
                      {{
                        (item.quantityInCart * item.price)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                      }}
                    </td>
                    <td class="cart__close">
                      <span
                        @click="removeProductFromCart(item)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Xóa sản phẩm khỏi giỏ hàng"
                        role="button"
                      >
                        <IconXCircle size="24" />
                      </span>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
            <div class="row">
              <div class="col-lg-12 text-center py-5">
                <router-link to="/san-pham" class="btn-florist"
                  >Tiếp tục mua sắm</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="cart__coupon">
            <p>Nhập mã phiếu giảm giá để được dùng khi thanh toán.</p>
            <form action="#">
              <input
                v-model="couponCode"
                type="text"
                class="form-control"
                placeholder="Mã giảm giá"
              />
              <button @click="checkCouponCode" type="button">Áp dụng</button>
            </form>
          </div>
          <div class="cart__total">
            <h4>Tổng hợp đơn hàng</h4>
            <ul>
              <li>
                Số lượng sản phẩm:
                <span>{{ this.$root.$data.selectedProductsCount }}</span>
              </li>
              <li>
                Tổng giá trị:
                <span
                  >VNĐ
                  {{
                    this.$root.$data.priceTotal
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  }}</span
                >
              </li>
              <li>
                Giảm giá:
                <span
                  >VNĐ
                  {{
                    discount == 0
                      ? "000"
                      : discount
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  }}</span
                >
              </li>
              <li>
                Tổng thanh toán
                <span>VNĐ {{ payment }}</span>
              </li>
            </ul>
            <a href="#">THANH TOÁN</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconXCircle from "@/components/base/BaseIconXCircle";
import axios from "axios";

export default {
  name: "TheShoppingCart",
  components: {
    IconXCircle,
  },
  data: function () {
    return {
      couponCode: "",
      discount: 0,
    };
  },
  computed: {
    productsList: function () {
      return this.$root.$data.allProducts.newProductItems.concat(
        this.$root.$data.allProducts.oldProductItems
      );
    },

    selectedProductsList: function () {
      return [...this.productsList].filter((item) => item.quantityInCart >= 0);
    },

    payment: function () {
      if (this.$root.$data.priceTotal > this.discount) {
        return (this.$root.$data.priceTotal - this.discount)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      } else {
        return "000";
      }
    },
  },

  methods: {
    getFilterNameById: function (id) {
      for (let item of this.$root.$data.filterSet) {
        if (item.id == id) {
          return item.filterName;
        }
      }
      return this.filterSet[0].filterName;
    },

    addToCard: function (item) {
      if (item.quantityInCart == -1) {
        item.quantityInCart = 0;
      }
      if (item.quantityInCart < item.quantity) {
        item.quantityInCart++;
        this.$root.$data.selectedProductsCount++;
        this.$root.$data.priceTotal += item.price;
      }
    },

    removeOneFromCart: function (item) {
      if (item.quantityInCart > 0) {
        item.quantityInCart--;
        this.$root.$data.selectedProductsCount--;
        this.$root.$data.priceTotal -= item.price;
      }
    },

    removeProductFromCart: function (item) {
      this.$root.$data.selectedProductsCount -= item.quantityInCart;
      this.$root.$data.priceTotal -= item.quantityInCart * item.price;
      item.quantityInCart = -1;
    },

    checkCouponCode: function () {
      if (this.couponCode) {
        // API endpoint name: coupon-code
        axios
          .get(
            `${process.env.VUE_APP_ROOT_API}/6154293c4a82881d6c57951e/latest`
          )
          .then((response) => {
            for (let item of response.data.record) {
              if (item.couponCode == this.couponCode) {
                this.discount = item.discount;
                break;
              }
            }

            if (this.discount > 0) {
              alert(
                "Mã giảm giá hợp lệ. Bạn được giảm VNĐ" +
                  this.discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
              );
            } else {
              alert("Mã giảm giá không hợp lệ");
            }
          })
          .catch((error) => console.log(error));
      } else {
        alert("Mã giảm giá không hợp lệ");
      }
    },
  },
};
</script>
