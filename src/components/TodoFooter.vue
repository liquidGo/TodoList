<template>
   <footer class="footer">
     <span class="todo-count">
       <span>0 </span>
       <span> item left</span>
     </span>
     <ul class="filters">
       <li><a href="#/all" class="selected">All</a></li>
       <li><a href="#/active">Active</a></li>
       <li><a href="#/completed">Completed</a></li>
     </ul>
     <button class="clear-completed">Clear Completed</button>
   </footer>
</template>

<script>
export default {
  name: "TodoFooter"
}
</script>

<style scoped>

</style>