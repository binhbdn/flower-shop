<template>
  <section class="latest-post">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-6">
          <div class="section-title">
            <span>Blog mới nhất</span>
            <h2>Các bài viết về hoa</h2>
          </div>
        </div>
        <div class="col-lg-5 col-md-6">
          <div class="latest__btn">
            <router-link to="/blog" class="btn-florist btn-outline-florist"
              >Đọc thêm</router-link
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
              <h4>
                <router-link :to="'/blog/' + item.postId">{{
                  item.title
                }}</router-link>
              </h4>
              <p>
                {{ item.content }}
              </p>
              <span>{{ item.postDate }} {{ item.author }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "TheLatestPosts",
  data: function () {
    return {
      latestPostsItems: null,
    };
  },
  created: function () {
    axios
      .get(
        "https://api.jsonstorage.net/v1/json/f0e442b2-aa85-499d-903a-36f43954c027"
      )
      .then((response) => (this.latestPostsItems = response.data))
      .catch((error) => console.log(error));
  },
};
</script>
