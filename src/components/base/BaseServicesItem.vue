<template>
  <div class="services__item">
    <div class="services__item__icon">
      <img :src="serviceItemData.imgUrl" />
    </div>
    <h4>{{ serviceItemData.title }}</h4>
    <p>{{ serviceItemData.content }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseServicesItem",
  props: {
    serviceItemData: { type: Object, default: null },
  },
};
</script>
