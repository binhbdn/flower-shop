<template>
  <div class="instagram">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="instagram__post">
            <div
              v-for="index in 5"
              :key="index"
              class="instagram__post__item set-bg"
              :style="{
                'background-image':
                  'url(/img/instagram/insta-' + index + '.jpg)',
              }"
            >
              <div class="instagram__post__item__hover">
                <BaseIconInstagram size="30" />
                <h6>Follow us <a href="#">@florist</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIconInstagram from "@/components/base/BaseIconInstagram";

export default {
  name: "TheInstagram",
  components: {
    BaseIconInstagram,
  },
};
</script>
