<template>
  <div>
    <AppBreadcrumb>
      Dịch vụ của chúng tôi
      <template #links><router-link to="/">Trang chủ</router-link></template>
      <template #endpoint>Dịch vụ</template>
    </AppBreadcrumb>
    <section class="services-page spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <ServicesSidebarTab />
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-12">
                <ServicesTabContent />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <ServicesForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppBreadcrumb from "../components/sections/AppBreadcrumb.vue";
import ServicesSidebarTab from "../components/sections/TheServicesSidebarTab.vue";
import ServicesTabContent from "../components/sections/TheServicesTabContent.vue";
import ServicesForm from "../components/sections/TheServicesForm.vue";

export default {
  name: "Services",
  pageTitle: "Florist | Dịch vụ",
  components: {
    AppBreadcrumb,
    ServicesSidebarTab,
    ServicesTabContent,
    ServicesForm,
  },
};
</script>
