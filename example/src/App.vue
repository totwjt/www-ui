<template>
  <div class="site">
    <h1>组件库测试站点</h1>
    <p>测试站点主要用于开发过程中测试组件，即在开发过程中由业务驱动组件开发。</p>
    <p>{{ msg }}</p>
    <www-desensitization label="test：" type="idCard">1326046</www-desensitization>
    <www-desensitization type="phone" label="手机：">13260462433</www-desensitization>
    <www-foo></www-foo>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('hello world')
</script>

<style scoped lang="scss">
.site {
  padding: 20px;
}
</style>
