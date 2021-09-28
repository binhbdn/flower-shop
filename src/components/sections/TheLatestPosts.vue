<template>
  <section class="latest-post" id="latest-post">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-6">
          <div class="section-title">
            <span>Bài viết mới đăng</span>
            <h2>Các blog chúng tôi chia sẻ</h2>
          </div>
        </div>
        <div class="col-lg-5 col-md-6">
          <div class="latest__btn">
            <router-link to="/blog" class="btn-florist btn-outline-florist"
              >Xem tất cả blog</router-link
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="item in latestPostsItems"
          :key="item.id"
          class="col-lg-4 col-md-6"
        >
          <div class="blog__item">
            <div class="blog__item__pic">
              <img :src="item.imgUrl" />
            </div>
            <div class="blog__item__text">
              <div class="label">
                <span>{{ item.category }}</span>
              </div>
              <h4 class="text-center">
                <router-link :to="'/blog/' + item.postId">{{
                  item.title
                }}</router-link>
              </h4>
              <p>
                {{ item.content }}
              </p>
              <p class="text-end">
                <BaseIconCalendar />{{ item.postDate }} <BaseIconAuthor />{{
                  item.author
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseIconCalendar from "@/components/base/BaseIconCalendar";
import BaseIconAuthor from "@/components/base/BaseIconAuthor";

import axios from "axios";

export default {
  name: "TheLatestPosts",
  components: {
    BaseIconCalendar,
    BaseIconAuthor,
  },
  data: function () {
    return {
      latestPostsItems: null,
      /*
      item data:
      {
          "id": 1,
          "postId": 56,
          "imgUrl": "https://binhbdn.github.io/flower-shop/img/blog/*.jpg",
          "category": "",
          "title": "",
          "content": "",
          "author": "Admin",
          "postDate": ""
      }
      */
    };
  },
  created: function () {
    // API endpoint name: latest-posts-items
    axios
      .get(
        `${process.env.VUE_APP_ROOT_API}/614f4bd89548541c29b84aee/latest`
      )
      .then((response) => (this.latestPostsItems = response.data.record))
      .catch((error) => console.log(error));
  },
};
</script>
