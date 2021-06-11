<template>
  <div class="about">
    <h1>欢迎光临红浪漫洗浴中心啊</h1>
    <div>随机选择一位美女为你服务</div>
    <!-- <div v-if='loading'>
        loading
      </div> 
    <img :src="result.imgUrl" v-if='loaded' alt="">-->
    <div>{{ rior }}</div>
    <div>
      {{ kNAEM == "Shen" ? "1" : "2" }}
    </div>
    <div @click="pageto">点击跳转</div>
  </div>
</template>
<script>
//import userUrlAxios from "../uiro/userUrlAxios"
import { ref, getCurrentInstance } from "vue";
import { Book, getQueryString } from "../uiro/book.js";
// console.log(ctx.$router.options.routes);这个h是整个router
export default {
  name: "shen",
  setup() {
    var opt = window.location.href.split("=")[1];
    console.log(opt);
    const { ctx } = getCurrentInstance();
    const Bookop = new Book();
    console.log(ctx.$route.name);
    const kNAEM = ctx.$route.name;
    const rior = ref(null);
    const sior = () => {
      Bookop.getrelrlir().then((res) => {
        rior.value = res.imgUrl;
      });
    };
    const pageto = () => {
      ctx.$router.push("/");
    };
    // const {result,loading,loaded} = userUrlAxios('https://apiblog.jspang.com/default/getGirl')
    // return {result,loading,loaded}
    sior();
    return {
      rior,
      sior,
      kNAEM,
      pageto,
    };
  },
};
</script>
