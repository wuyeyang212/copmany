<template>
  <div class="about">
    <h1>欢迎光临红浪漫洗浴中心啊</h1>
    <div>
      随机选择一位美女为你服务
       
      </div>
      <!-- <div v-if='loading'>
        loading
      </div> 
      <img :src="result.imgUrl" v-if='loaded' alt="">  -->
        <div>
          {{rior}}
        </div>
  </div>
</template>
<script >
//import userUrlAxios from "../uiro/userUrlAxios"
import {ref} from 'vue'
import {Book} from '../uiro/book'
 

export default {
  
  name:'shen',
  setup(){
    const Bookop = new Book

    const rior = ref('789789')
    Bookop.getrelrlir().then(res=>{
      console.log(res)
      rior.value = res.imgUrl
    })
    // const {result,loading,loaded} = userUrlAxios('https://apiblog.jspang.com/default/getGirl')
    // return {result,loading,loaded}
    return {
      rior
    }
  }
}
</script>