<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="iconSize"
    :height="iconSize"
    fill="currentColor"
    :viewBox="'0 0 ' + defaultWidthHeight + ' ' + defaultWidthHeight"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  name: "BaseIconSvgTemplate",
  data: function () {
    return {
      defaultWidthHeight: 18,
    };
  },
  props: {
    iconSize: {
      type: [String, Number],
      default: 18,
    },
  },
};
</script>
