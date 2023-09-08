<template>
   <div>
      <input class="todoInput" v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task..." />
      <div class="todo_style">
         <ul>
            <li v-for="(todo, index) in todos" :key="index">
               <div class="no_style">{{ index + 1 }}</div>
               <div class="content_style">{{ todo }}</div>
               <div class="button_style">
                  <button @click="removeTodo(index)">Remove</button>
               </div>
            </li>
         </ul>
      </div>
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
      ...mapActions(['addTodostore', 'removeTodostore']),
      addTodo() {
         if (this.newTodo.trim() === '') return;
         this.addTodostore(this.newTodo);
         this.newTodo = ''
      },
      removeTodo(index) {
         this.removeTodostore(index)
      }
   }
}
</script>

<style>
.todo_style {
   display: flex;
   width: 80%;
   justify-content: center;
   margin: 20px auto 20px auto
}

.todoInput {
   width: 200px;
   height: 40px;
   font-size: 15px;
   padding-left: 8px;
}
ul {
   width: 400px;
}

ul li {
   height: 30px;
   display: flex;
   list-style: none;
}

.no_style {
   width: 10%;
}

.content_style {
   width: 60%;
}

.button_style {
   width: 30%;
}
</style>
