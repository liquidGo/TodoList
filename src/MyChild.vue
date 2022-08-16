<template>
   <div>
     <h3>my-child组件</h3>
     <hr>
    <div :class="{hide:!show}">
      <slot><h1>子组件匿名插槽默认内容h1</h1></slot>
      <slot name="one"></slot>
      <slot name="two"></slot>
      <button @click="closeDialog">关闭对话框</button>
    </div>
   </div>
</template>

<script>
export default {
  name: "MyChild",
  props:['show'],
  methods:{
    closeDialog(){
      this.$parent.show=false;
    }
  }
}
</script>

<style scoped>

  .hide{
    display: none;
  }

</style>