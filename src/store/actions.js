export default {
  addTodo: ({ type }, data) => {
    type("ADD_TODO", data);
  },

  removeTodo: ({ type }, index) => {
    type("REMOVE_TODO", index);
  },
};
