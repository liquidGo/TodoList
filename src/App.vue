<template>
  <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <input type="text" class="new-todo" v-model="newTodo" @keyup.enter="addTodo">
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
  name: "App",
  components: { TodoFooter, TodoItem },
  data() {
    return {
      newTodo: '',
      todoDatas: []
    }
  },
  methods: {
    addTodo() {
      if(this.newTodo==='')return
      let todo={}
      todo.id=Date.now();
      todo.value=this.newTodo.trim();
      todo.hasCompleted=false;
      this.todoDatas.push(todo);
      this.newTodo='';
      console.log(this.todoDatas,'this.todoDatas');
    }
  },
}
</script>

<style scoped>
</style>