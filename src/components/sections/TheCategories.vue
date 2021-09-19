<template>
  <div class="categories">
    <div class="container">
      <div class="row">
        <div
          v-for="item in categoriesItems"
          :key="item.id"
          class="col-md-6 col-lg-3"
        >
          <div
            :style="{
              'background-image':
                'url(img/categories/categories-' + item.id + '.jpg)',
            }"
            class="categories__item set-bg"
          >
            <div class="categories__item__text">
              <h4>
                <a :href="item.link">{{ item.name }}</a>
              </h4>
              <span>( SL: {{ item.quantity }} )</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCategories",

  data: function () {
    return {
      categoriesItems: [
        {
          id: 1,
          name: "Hoa tươi",
          quantity: 25,
          link: "#",
        },
        {
          id: 2,
          name: "Cây mọng nước",
          quantity: 162,
          link: "#",
        },
        {
          id: 3,
          name: "Cây xương rồng",
          quantity: 58,
          link: "#",
        },
        {
          id: 4,
          name: "Cây nội thất",
          quantity: 25,
          link: "#",
        },
      ],
    };
  },
};
</script>
