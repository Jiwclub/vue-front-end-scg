<template>
  <div>
    <topbar />
    <bodyc />
    <footertest />

    <router-view></router-view>
  </div>
</template>

<script>
import topbar from "./topbar/topbarComponent";
import bodyc from "./body/bodyComponent";
import footertest from "./footer/footerComponent";
export default {
  name: "pageAll",
  components: {
    topbar,
    bodyc,
    footertest,
  },
};
</script>

<style></style>
