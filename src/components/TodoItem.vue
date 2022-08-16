<template>
  <li>
    <div class="view">
      <input type="checkbox" class="toggle">
      <label>Content</label>
      <button class="destroy"></button>
    </div>
    <input type="text" class="edit">
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  mounted() {
    console.log("this", this);
  }
}
</script>

<style scoped>
</style>