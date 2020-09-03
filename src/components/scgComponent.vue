<template>
  <div>
    <ul>
      <li v-for="todo of todos" :key="todo.id">{{ todo.name }}</li>
    </ul>
    <ul>
      X, Y, Z value
      <li v-for="resoult of resoults" :key="resoult.id">{{ resoult }}</li>
    </ul>
    <ul>
      B and C value
      <li v-for="val of valBC" :key="val.id">{{val}}</li>
    </ul>
    <p></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "scg",
  data() {
    return {
      todos: [],
      resoults: [],
      valBC: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3000/scg");
      const resul = await axios.get("http://localhost:3000/");
      const valbc = await axios.get("http://localhost:3000/valueBC");
      this.todos = res.data;
      this.resoults = resul.data;
      this.valBC = valbc.data;
      console.log("scg", res);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
li {
  list-style: none;
}
</style>
