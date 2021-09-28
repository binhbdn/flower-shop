<template>
  <div class="breadcrumb set-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="breadcrumb__text">
            <h2>
              <slot />
            </h2>
            <div class="breadcrumb__links">
              <slot name="links"></slot>
              <span>
                <slot name="endpoint"></slot>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBreadcrumb",
};
</script>
