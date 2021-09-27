<template>
  <div>
    <AppBreadcrumb>
      Cửa hàng
      <template #links><router-link to="/">Trang chủ</router-link></template>
      <template #endpoint>Sản phẩm</template>
    </AppBreadcrumb>
    <TheProducts />
  </div>
</template>

<script>
import AppBreadcrumb from "../components/sections/AppBreadcrumb.vue";
import TheProducts from "../components/sections/TheProducts.vue";

export default {
  name: "Products",
  pageTitle: "Florist | Sản phẩm",
  components: {
    AppBreadcrumb,
    TheProducts,
  },
};
</script>
