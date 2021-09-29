<template>
  <section class="register-section">
    <div class="container">
      <div class="register-box">
        <div class="sec-title text-center">
          <h2 class="title">Tạo tài khoản mới</h2>
        </div>
        <div class="styled-form">
          <div id="form-messages"></div>
          <form id="contact-form">
            <div class="row clearfix">
              <div class="form-group col-lg-12 mb-3">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  required="required"
                />
                <span class="placeholder"> Tên <span></span></span>
              </div>
              <div class="form-group col-lg-12 mb-3">
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  required="required"
                />
                <span class="placeholder"> Họ <span></span></span>
              </div>
              <div class="form-group col-lg-12 mb-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required="required"
                />
                <span class="placeholder"> Địa chỉ email <span></span></span>
              </div>
              <div class="form-group col-lg-12 mb-3">
                <input
                  type="text"
                  id="username"
                  name="username"
                  required="required"
                />
                <span class="placeholder"> Tên tài khoản <span></span></span>
              </div>
              <div class="form-group col-lg-12 mb-3" :title="passwordTitle">
                <input
                  v-model="password"
                  type="password"
                  id="password"
                  name="password"
                  required="required"
                />
                <span class="placeholder"> Mật khẩu <span></span></span>
              </div>
              <div class="form-group col-lg-12 mb-4">
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  required="required"
                />
                <span class="placeholder">
                  Xác nhận Mật khẩu <span></span
                ></span>
              </div>
              <div class="form-group col-lg-12 col-md-12 col-sm-12 text-center">
                <button
                  @click="registerFormSubmit"
                  type="button"
                  class="btn-florist border-0 mb-3"
                >
                  Đăng ký
                </button>
              </div>
              <div class="form-group col-lg-12 col-md-12 col-sm-12">
                <div class="users">
                  Bạn đã có một tài khoản?
                  <router-link to="/dang-nhap">Đăng nhập</router-link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheRegister",

  data: function () {
    return {
      password: "",
      passwordTitle: "",
    };
  },

  created: function () {
    this.passwordTitle =
      'không được chứa các ký tự: " ' + " ' ? & / < > hoặc khoảng trắng";
  },

  methods: {
    registerFormSubmit: function () {
      let mustContainTheseChars = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
      let containsRequiredChars = mustContainTheseChars.test(this.password);
      //let notTheseChars = /["'?&/<>\s]/;
      //let containsForbiddenChars = notTheseChars.test(this.password);

      if (containsRequiredChars) {
        alert("Password hợp lệ");
        //return true;
      } else {
        alert("Password không hợp lệ");
        //return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
input[required="required"]:valid + .placeholder,
input[required="required"]:focus + .placeholder {
  display: none;
}

input#fname:hover + .placeholder span::after {
  content: "(*) = không được bỏ trống";
}

input#password:hover + .placeholder span::after {
  content: "(*) >= 8 ký tự, 1 ký tự in thường, 1 số";
}
.placeholder {
  position: absolute;
  top: 12px;
  left: 46px;
  color: #6c757d;
  font-size: 16px;
  line-height: inherit;
}

.placeholder span::after {
  color: red;
  content: "(*)";
}
</style>
