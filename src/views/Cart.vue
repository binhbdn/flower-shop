<template>
  <div>
    <AppBreadcrumb>
      Giỏ hàng
      <template #links>
        <router-link to="/">Trang chủ</router-link>
        <router-link to="/san-pham">Sản phẩm</router-link>
      </template>
      <template #endpoint>Giỏ hàng</template>
    </AppBreadcrumb>
    <ShoppingCart />
  </div>
</template>

<script>
import AppBreadcrumb from "../components/sections/AppBreadcrumb.vue";
import ShoppingCart from "../components/sections/TheShoppingCart.vue";

export default {
  name: "Cart",
  pageTitle: "Florist | Giỏ hàng",
  components: {
    AppBreadcrumb,
    ShoppingCart,
  },
};
</script>
