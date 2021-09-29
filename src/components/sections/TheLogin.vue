<template>
  <div class="fl-login">
    <div class="container">
      <div class="noticed">
        <div class="main-part">
          <div class="method-account">
            <h2 class="login">Đăng nhập</h2>
            <form>
              <input
                v-model="usernameOrEmail"
                type="text"
                name="username_email"
                placeholder="Tên tài khoản | Địa chỉ email"
                required
              />
              <input
                v-model="password"
                type="password"
                name="password"
                placeholder="Mật khẩu"
                required
              />
              <button @click="login" type="button" class="btn-florist">
                Đăng nhập
              </button>
              <div class="last-password">
                <p>
                  Bạn chưa đăng ký?
                  <router-link to="/dang-ky"
                    >Tạo ngay một tài khoản</router-link
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TheLogin",

  data: function () {
    return {
      usernameOrEmail: "",
      password: "",
    };
  },

  methods: {
    login: function () {
      if (this.usernameOrEmail != "" && this.password != "") {
        // API endpoint name: login
        axios
          .get(
            `${process.env.VUE_APP_ROOT_API}/61549ead9548541c29bad6ae/latest`
          )
          .then((response) => {
            for (let item of response.data.record) {
              if (
                item.username == this.usernameOrEmail ||
                item.email == this.usernameOrEmail
              ) {
                if (item.password == this.password) {
                  this.$root.$data.isSignedIn = true;
                  alert("Đăng nhập thành công");
                  break;
                }
              }
            }

            if (this.$root.$data.isSignedIn) {
              this.$router.push("/");
            } else {
              alert(
                "Đăng nhập không thành công. Sai tên tài khoản và/ hoặc mật khẩu"
              );
            }
          })
          .catch((error) => console.log(error));
      } else {
        alert("Tên tài khoản và mật khẩu không được để trống");
      }
    },
  },
};
</script>
