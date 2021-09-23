<template>
  <section class="custom-flower">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="custom-flower__text px-4">
            <span>Hoa thiết kế theo yêu cầu</span>
            <h2>Hoa thay bạn nói lời yêu thương.</h2>
            <router-link to="/san-pham/dat-hang" class="btn-florist"
              >Đặt hàng</router-link
            >
            <router-link
              to="/gioi-thieu"
              class="btn-florist btn-outline-florist"
              >Giới thiệu</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheCustomFlower",
};
</script>
