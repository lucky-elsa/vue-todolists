<template>
   <div>
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task..." />
      <ul>
         <li v-for="(todo, index) in todos" :key="index">
            {todo}
         </li>
         <button @click="removeTodo(index)">Remove</button>
      </ul>
   </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
   computed: {
      ...mapGetters(['todos']),
   },
   data() {
      return {
         newTodo: '',
      };
   },
   methods: {
      ...mapActions(['addTodo', 'removeTodo']),
      addTodo() {
         if (this.newTodo.trim() === '') return;
         this.addTodo(this.newTodo);
         this.newTodo = ''
      },
      removeTodo(index) {
         this.removeTodo(index)
      }
   }
}

</script>