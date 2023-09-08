export default {
  addTodostore: ({ commit }, data) => {
    commit("ADD_TODO", data);
  },

  removeTodostore: ({ commit }, index) => {
    commit("REMOVE_TODO", index);
  },
};
