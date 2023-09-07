<template>
   <div>
      <h1>ToDoList-Vue 3</h1>
      <TodoList />
   </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';

export default {
   components: {
      TodoList,
   }
}
</script>