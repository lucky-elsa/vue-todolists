<template>
   <div>
      <input class="todoInput" v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task..." />
      <div class="todo_style">
         <ul>
            <li v-for="(todo, index) in todos" :key="index">
               <div class="no_style">{{ index + 1 }}</div>
               <div v-if="isVisual !== index" class="content_style">{{ todo }}</div>
               <input v-else v-model="editValue" class="content_style" @keyup.enter="saveEdit(index)" />
               <div class="button_style">
                  <button v-if="isVisual === index" @click="saveEdit(index)">Save</button>
                  <button v-else @click="editTodo(index)">Edit</button>
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
         isVisual: -1,
         editValue: '',
      };
   },
   methods: {
      ...mapActions(['addTodostore', 'editTodostore', 'removeTodostore']),
      addTodo() {
         if (this.newTodo.trim() === '') return;
         this.addTodostore(this.newTodo);
         this.newTodo = ''
      },
      removeTodo(index) {
         this.removeTodostore(index)
      },
      editTodo(index) {
         this.isVisual = index;
         this.editValue = this.todos[index];
      },
      saveEdit(index) {
         this.isVisual = -1;
         const updatedTodo = this.editValue;

         this.editTodostore({ updatedTodo, index });
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
   width: 500px;
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
