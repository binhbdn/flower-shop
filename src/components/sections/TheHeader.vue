<template>
  <header class="py-2">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top border-bottom">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="navbar-brand mx-auto d-none" to="/">
          <BaseLogo class="mx-auto" />
        </router-link>
        <div class="navbar-icons d-flex pt-2">
          <router-link
            to="/san-pham/tim-kiem"
            class="nav-link px-2"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Tìm kiếm sản phẩm"
          >
            <BaseIconSearch size="20" />
          </router-link>
          <router-link
            to="/san-pham/yeu-thich"
            class="nav-link px-2"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Sản phẩm yêu thích"
          >
            <div class="position-relative">
              <BaseIconHeart size="20" />
              <span
                v-if="this.$root.$data.favoriteProductsCount > 0"
                class="
                  position-absolute
                  top-0
                  start-100
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                "
              >
                {{ this.$root.$data.favoriteProductsCount }}
              </span>
            </div>
          </router-link>
          <router-link
            to="/san-pham/gio-hang"
            class="nav-link px-2"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Sản phẩm đã chọn"
          >
            <div class="position-relative">
              <BaseIconCart size="20" />
              <span
                v-if="this.$root.$data.selectedProductsCount > 0"
                class="
                  position-absolute
                  top-0
                  start-100
                  translate-middle
                  badge
                  rounded-pill
                  bg-danger
                "
              >
                {{ this.$root.$data.selectedProductsCount }}
              </span>
            </div>
          </router-link>
          <div class="dropdown text-end">
            <span
              :class="[isLoggedIn ? 'sign-in-icon' : 'sign-out-icon']"
              class="nav-link dropdown-toggle d-block"
              id="dropdownUser"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
              role="button"
              title="Tài khoản"
            >
              <BaseIconSignIn
                v-if="isLoggedIn"
                class="rounded-circle"
                size="20"
              />
              <BaseIconSignOut v-else class="rounded-circle" size="20" />
            </span>
            <ul
              class="dropdown-menu dropdown-menu-end text-small"
              aria-labelledby="dropdownUser"
            >
              <li class="nav-item">
                <router-link
                  to="/dang-ky"
                  :class="{ disabled: isLoggedIn }"
                  class="dropdown-item"
                >
                  Đăng ký
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/dang-nhap"
                  :class="{ disabled: isLoggedIn }"
                  class="dropdown-item"
                >
                  Đăng nhập
                </router-link>
              </li>
              <li class="nav-item">
                <span
                  @click="isLoggedIn = false"
                  :class="{ disabled: !isLoggedIn }"
                  class="dropdown-item"
                >
                  Đăng xuất
                </span>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li class="nav-item">
                <router-link
                  to="/dashboard"
                  :class="{ disabled: !isLoggedIn }"
                  class="dropdown-item"
                >
                  Bảng điều khiển
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div id="navbarToggler" class="collapse navbar-collapse">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item nav-item--logo pt-3">
              <router-link to="/"> <BaseLogo /> </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link"> TRANG CHỦ </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gioi-thieu" class="nav-link"
                >GIỚI THIỆU</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/dich-vu" class="nav-link">DỊCH VỤ</router-link>
            </li>
            <li class="nav-item dropdown">
              <span
                :class="{
                  'router-link-exact-active': $route.path == '/san-pham',
                }"
                class="nav-link dropdown-toggle"
                id="dropdown01"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
                @click="showAllProducts"
              >
                SẢN PHẨM
              </span>

              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdown01"
              >
                <li class="d-block d-lg-none">
                  <router-link to="/san-pham" class="dropdown-item"
                    >Tất cả sản phẩm</router-link
                  >
                </li>
                <li>
                  <router-link to="/san-pham/dat-hang" class="dropdown-item"
                    >Đặt hàng sản phẩm</router-link
                  >
                </li>
                <li>
                  <router-link to="/san-pham/gio-hang" class="dropdown-item"
                    >Sản phẩm đã chọn</router-link
                  >
                </li>
                <li>
                  <router-link to="/san-pham/thanh-toan" class="dropdown-item"
                    >Thanh toán</router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link to="/san-pham/yeu-thich" class="dropdown-item"
                    >Sản phẩm yêu thích</router-link
                  >
                </li>
                <li>
                  <router-link to="/san-pham/tim-kiem" class="dropdown-item"
                    >Tìm kiếm sản phẩm</router-link
                  >
                </li>

                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link to="/san-pham/deco" class="dropdown-item"
                    >Góc deco sản phẩm</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="nav-link">BLOG</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/lien-he" class="nav-link">LIÊN HỆ</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import BaseIconSignIn from "@/components/base/BaseIconSignIn";
import BaseIconSignOut from "@/components/base/BaseIconSignOut";

export default {
  name: "TheHeader",
  components: {
    BaseIconSignIn,
    BaseIconSignOut,
  },
  computed: {
    isLoggedIn: {
      // getter
      get: function () {
        return this.$root.$data.isSignedIn;
      },
      // setter
      set: function (newValue) {
        this.$root.$data.isSignedIn = newValue;
      },
    },
  },
  mounted() {
    this.isLoggedIn = this.$root.$data.isSignedIn;
  },
  methods: {
    signOut: function () {
      this.isLoggedIn = false;
    },
    showAllProducts: function () {
      if (window.innerWidth > 992) {
        this.$router.push("/san-pham");
      }
    },
  },
};
</script>
