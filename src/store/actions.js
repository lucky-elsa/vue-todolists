export default {
  addTodostore: ({ commit }, data) => {
    commit("ADD_TODO", data);
  },

  editTodostore: ({ commit }, data) => {
    commit("EDIT_TODO", data);
  },

  removeTodostore: ({ commit }, index) => {
    commit("REMOVE_TODO", index);
  },
};