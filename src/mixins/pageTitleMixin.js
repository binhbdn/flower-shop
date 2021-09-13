function getPageTitle(vm) {
  const { pageTitle } = vm.$options;
  if (pageTitle) {
    return typeof pageTitle === "function" ? pageTitle.call(vm) : pageTitle;
  }
}

export default {
  data: function () {
    return {
      get pageTitleStart() {
        return "Florist | ";
      },
    };
  },
  created: function () {
    const pageTitle = getPageTitle(this);
    if (pageTitle) {
      document.title = pageTitle;
    }
  },
};
