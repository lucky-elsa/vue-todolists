export default {
  ADD_TODO(state, data) {
    state.todos.push(data);
  },

  EDIT_TODO(state, data) {
    state.todos[data.index] = data.updatedTodo;
  },

  REMOVE_TODO(state, index) {
    state.todos.splice(index, 1);
  },
};
