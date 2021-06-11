<template>
  <div class="about">
    <h1>This is an about pageone</h1>
    <div>
      {{ nowtime }}
    </div>
    <div>
      <button @click="xianshi">显示时间</button>
    </div>
  </div>
</template>
<script lang="ts">
import { nowtime, xianshi } from "../uiro/one";
export default {
  name: "aie",
  setup() {
    // xianshi()

    return {
      nowtime,
      xianshi,
    };
  },
};
</script>
