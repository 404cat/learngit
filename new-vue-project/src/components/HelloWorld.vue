<template>
 <div>
   测试
   {{msg}}
 </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop()
  private msg!: string;
  /* prop 可以接受父级传进来的数据 
  如果使用ts的话，所有的声明出来的class就是组件吗？所有组件都继承与 Vue？
  方法都是/ 组件方法也可以直接声明为实例的方法/ 初始数据可以直接声明为实例的属性*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
