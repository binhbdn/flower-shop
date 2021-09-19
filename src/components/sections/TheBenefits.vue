<template>
  <div class="benefits">
    <div class="container">
      <div class="row">
        <div
          v-for="item in benefitItems"
          :key="item.id"
          class="col-sm-6 col-md-6 col-lg-3"
        >
          <div class="benefits__item">
            <div class="benefits__item__icon">
              <img :src="`img/benefit/benefit-${item.id}.png`" />
            </div>
            <div class="benefits__item__text">
              <h4>{{ item.title }}</h4>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheBenefits",

  data: function () {
    return {
      benefitItems: [
        {
          id: 1,
          title: "Hoa tươi",
          content: "Đảm bảo chất lượng, cam kết dùng 100% hoa tươi.",
        },
        {
          id: 2,
          title: "Băng rôn",
          content: "Chúng tôi miễn phí thiệp, băng rôn kèm theo hoa.",
        },
        {
          id: 3,
          title: "Vận chuyển",
          content: "Chúng tôi miễn phí giao hoa nội thành Tp. Hà Nội.",
        },
        {
          id: 4,
          title: "Chụp hình",
          content: "Cam kết uy tín, có chụp hình gửi khách xem trước.",
        },
      ],
    };
  },
};
</script>
