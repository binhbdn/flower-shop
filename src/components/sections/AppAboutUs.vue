<template>
  <section class="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="section-title">
            <span>Giới thiệu</span>
            <h2>Chúng tôi cung cấp nhiều loại dịch vụ hoa tươi</h2>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1">
          <div class="about__top__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum eu facilisis sed odio morbi. Non sodales neque sodales
              ut etiam sit. Diam vulputate ut pharetra sit amet aliquam.
              Scelerisque purus semper eget duis. Fusce ut placerat orci nulla
              pellentesque enim.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-7">
          <div
            class="about__video set-bg"
            style="background-image: url('img/about/about-video.jpg')"
          >
            <a href="https://www.youtube.com">
              <IconPlayCircle />
            </a>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="about__text">
            <span>Sống chậm &amp; ngắm hoa</span>
            <h2>Sống chậm và hít thở cùng đóa hồng</h2>
            <p>
              Lorem ipsum dolor sit amet, ultrices dui sapien. Tellus orci ac
              auctor au auue neque. Maada fames ac pis egestas maeceas conlis
              posuere. Arcu risus quis vaius qu quis id diam.
            </p>
            <router-link to="/lien-he" class="btn-florist">Liên hệ</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconPlayCircle from "@/components/base/BaseIconPlayCircle";

export default {
  name: "AppAboutUs",
  components: {
    IconPlayCircle,
  },
};
</script>
