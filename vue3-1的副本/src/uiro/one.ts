import {ref} from 'vue'
const nowtime = ref('00:00:00')
const xianshi = ()=>{
  const now =  new Date();
  const hour = now.getHours()<10?"0"+now.getHours():now.getHours()
  const minu = now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes()
  const sec = now.getSeconds()<10?"0"+now.getSeconds():now.getSeconds()
  nowtime.value = hour+":"+minu+":"+sec
  setTimeout(xianshi,1000)
}
export {nowtime,xianshi}