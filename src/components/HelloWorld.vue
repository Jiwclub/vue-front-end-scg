<template>
  <div class="hello">
    <h1>
      <router-link to="/page">Page</router-link>
    </h1>
    <h1>
      <router-link to="/cv">Cv</router-link>
    </h1>
    <h1>
      <router-link to="/scgTest">scg</router-link>
    </h1>
  </div>
</template>

<script>
import page from "./page";
import cv from "./cv";
import scg from "../components/scgComponent";
export default {
  name: "HelloWorld",
  components: {
    page,
    cv,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
