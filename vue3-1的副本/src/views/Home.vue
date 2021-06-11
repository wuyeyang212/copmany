<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>欢迎光临洗浴中心</h2>
    <div>请选择一位人为你服务</div>
    <button v-for=" (item,index) in gils" :key='index' @click="selectGirlFun(index)">
      {{index}}:{{item}}
    </button>
    <div>你选了哪个服务员给你服务{{selectgirl}}</div>
    <div>
      <button @click="cauir">点餐</button>
    </div>
   
    <div>
      {{overText}}
    </div>
  </div>
</template>

<script lang="ts">
//reactive()
//import { defineComponent,ref,reactive} from 'vue';
import { reactive,toRefs,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onRenderTracked,onRenderTriggered,ref,getCurrentInstance} from 'vue';
 interface Dsta{
   gils:string[];
   selectgirl:string;
   selectGirlFun:(index:number)=>void;
 }

export default {
  name: 'Home',
  setup(){
    // const gils = ref(["大叫","柳荫","小红"])
    // const selectgirl = ref("");
    // const selectGirlFun = (index:number)=>{
    //   selectgirl.value = gils.value[index]
    // };
    console.log("1--开始创建组建--setup")
   
    const data:Dsta= reactive({
      gils:["大叫","柳荫","小红"],
      selectgirl:'',
      selectGirlFun:(index:number) => {
       data.selectgirl = data.gils[index]
      }
    })
    onBeforeMount(()=>{
      console.log('2-组见挂载到页面之前执行--onBeforeMount() ')
    })
    onMounted(()=>{
      console.log('3-组见挂载到页面之后执行--onMounted() ')
    })
    onBeforeUpdate(()=>{
       console.log('4-组见更新之前执行--onBeforeUpdate() ')
    })
    onUpdated(()=>{
      console.log('5-组见更新之后执行--onUpdated() ')
    })
    // onRenderTracked((event) => {
    //   console.log('跟踪状态-------->')
    //   console.log(event)
    // })
    const overText = ref("红浪漫")
     onRenderTriggered((event) => {
      console.log('跟踪状态-------->')
      console.log(event)
    })
    const refData = toRefs(data)
    const cauir = ()=>{
      overText.value = '你已经点餐完毕'+ overText.value
    }
    
    return {
      // gils,
      // selectgirl,
      // selectGirlFun
      // data
      ...refData,
      overText,
      cauir,
    }
  }
};
//生命周期
//钩子函数
//setup()
//beforeCreate created
//onBeforeUnmount在组件卸载之前执行,

//onActivated()《keep-alive></keep-alive>保持组件的状态 
</script>


