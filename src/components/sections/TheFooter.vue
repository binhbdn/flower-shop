<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="row">
          <div class="col-md-3">
            <div class="footer__logo">
              <router-link class="d-inline-block" to="/">
                <BaseLogo />
              </router-link>
            </div>
          </div>
          <div class="col-md-6">
            <div class="footer__top__text">
              <p class="mb-0">
                Chúng tôi giao hoa gần như hoàn toàn Miễn Phí đến các Quận nội
                thành Hà Nội và có hỗ trợ phí giao hàng tới các địa điểm xa
                khác.
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="footer__top__social">
              <a
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Facebook"
                ><BaseIconFacebook size="24"
              /></a>
              <a
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Twitter"
                ><BaseIconTwitter size="24"
              /></a>
              <a
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Instagram"
                ><BaseIconInstagram size="24"
              /></a>
              <a
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Linkedin"
                ><BaseIconLinkedin size="24"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__options">
        <div class="row">
          <div class="col-lg-2 col-md-3">
            <div class="footer__widget footer__widget--info">
              <h4>Thông tin</h4>
              <ul>
                <li>
                  <router-link to="/gioi-thieu">Giới thiệu</router-link>
                </li>
                <li>
                  <router-link to="/dich-vu">Dịch vụ</router-link>
                </li>
                <li>
                  <router-link to="/lien-he">Liên hệ</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-3">
            <div class="footer__widget footer__widget--guide">
              <h4>Hướng dẫn</h4>
              <ul>
                <li>
                  <router-link to="/huong-dan-mua-hang">Mua hàng</router-link>
                </li>
                <li>
                  <router-link to="/huong-dan-doi-hang">Đổi hàng</router-link>
                </li>
                <li>
                  <router-link to="/huong-dan-thanh-toan"
                    >Thanh toán</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="footer__newslatter">
              <h4>Tin tức</h4>
              <p>
                Đăng ký nhận các bài viết của chúng tôi về các mẹo và thủ thuật
                cắm hoa, chăm sóc hoa ...
              </p>
              <form action="#">
                <input type="text" placeholder="Email" />
                <button type="submit">Đăng ký</button>
              </form>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="footer__widget footer__widget--address">
              <h4>Liên hệ</h4>
              <ul>
                <li>
                  <a
                    href="https://www.google.com/maps/place/VMODEV/@21.0302135,105.781921,18.25z/data=!4m5!3m4!1s0x313454b354936a69:0xe0059369a89d3969!8m2!3d21.031066!4d105.781948"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BaseIconLocation /> 68, Tôn Thất Thuyết, Cầu Giấy, Hà Nội
                  </a>
                </li>
                <li>
                  <a href="tel:+842433120103"
                    ><BaseIconTelephone /> +84 24 3312 0103</a
                  >
                </li>
                <li>
                  <a href="mailto:info@florist.com"
                    ><BaseIconEnvelope /> info@florist.com</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__copyright">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p>Copyright ©2021 Florist. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>

    <button
      id="back-to-top"
      class="text-white p-0 border-0 rounded-circle"
      @click="backToTop"
      title="Lên đầu trang"
      type="button"
    >
      <BaseIconArrowUp />
    </button>
  </footer>
</template>

<script>
import BaseIconFacebook from "@/components/base/BaseIconFacebook";
import BaseIconTwitter from "@/components/base/BaseIconTwitter";
import BaseIconInstagram from "@/components/base/BaseIconInstagram";
import BaseIconLinkedin from "@/components/base/BaseIconLinkedin";
import BaseIconLocation from "@/components/base/BaseIconLocation";
import BaseIconTelephone from "@/components/base/BaseIconTelephone";
import BaseIconEnvelope from "@/components/base/BaseIconEnvelope";
import BaseIconArrowUp from "@/components/base/BaseIconArrowUp";

export default {
  name: "TheFooter",
  components: {
    BaseIconFacebook,
    BaseIconTwitter,
    BaseIconInstagram,
    BaseIconLinkedin,
    BaseIconLocation,
    BaseIconTelephone,
    BaseIconEnvelope,
    BaseIconArrowUp,
  },

  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered

      //Get the button:
      var myButton = document.getElementById("back-to-top");

      // When the user scrolls down 100px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.documentElement.scrollTop > 100 ||
          document.body.scrollTop > 100
        ) {
          myButton.style.display = "block";
        } else {
          myButton.style.display = "none";
        }
      }
    });
  },

  methods: {
    // When the user clicks on the button, scroll to the top of the document
    backToTop: function () {
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      document.body.scrollTop = 0; // For Safari
    },
  },
};
</script>
