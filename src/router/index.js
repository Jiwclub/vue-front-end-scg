import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Scg from "@/components/scgComponent";
import bodycomponent from "@/components/body/bodyComponent";
import page from "@/components/page";
import topbarComponent from "@/components/topbar/topbarComponent";
import footerComponent from "@/components/footer/footerComponent";
import cv from "@/components/cv.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/scgTest",
      name: "scg",
      component: Scg
    },
    {
      path: "/bodycomponent",
      name: "bodyc",
      component: bodycomponent
    },
    {
      path: "/page",
      name: "pageAll",
      component: page
    },
    {
      path: "/topbar",
      name: "topbartest",
      component: topbarComponent
    },
    {
      path: "/footertest",
      name: "footercomponent",
      component: footerComponent
    },
    {
      path: "/cv",
      name: "cv",
      component: cv
    }
  ]
});
