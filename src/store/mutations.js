export default {
  ADD_TODO(state, data) {
    state.todos.psuh(data);
  },

  REMOVE_TODO(state, index) {
    state.todos.splice(index, 1);
  },
};
