<template>
  <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <input type="text" class="new-todo">
    </header>
    <section class="main">
        <input type="checkbox" id="toggle-all" class="toggle-all">
        <label for="toggle-all"></label>
        <ul class="todo-list">
             <todo-item></todo-item>
             <todo-item></todo-item>
             <todo-item></todo-item>
        </ul>
      </section>
     <todo-footer></todo-footer>
  </section>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import TodoFooter from "@/components/TodoFooter";
export default {
  name:"App",
  components: {TodoFooter, TodoItem}
}
</script>

<style scoped>

</style>