<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="row">
          <div class="col-md-3">
            <div class="footer__logo">
              <a class="d-inline-block" href="/">
                <BaseLogo />
              </a>
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
            <div class="footer__widget">
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
            <div class="footer__widget">
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
                <li>68, Tôn Thất Thuyết, Cầu Giấy, Hà Nội</li>
                <li>+84 24 3312 0103</li>
                <li>info@florist.com</li>
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
  </footer>
</template>

<script>
import BaseIconFacebook from "@/components/base/BaseIconFacebook";
import BaseIconTwitter from "@/components/base/BaseIconTwitter";
import BaseIconInstagram from "@/components/base/BaseIconInstagram";
import BaseIconLinkedin from "@/components/base/BaseIconLinkedin";

export default {
  name: "TheFooter",
  components: {
    BaseIconFacebook,
    BaseIconTwitter,
    BaseIconInstagram,
    BaseIconLinkedin,
  },
};
</script>
