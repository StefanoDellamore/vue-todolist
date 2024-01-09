const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                { text: 'Giocare a Europa Universalis IV', done: false },
                { text: 'Studiare Vue.js', done: true },
                ],                
                newTodoText: '',
        };
    },
    methods: {
      removeTodo(index) {
        this.todos.splice(index, 1);
      },

      addTodo() {
        if (this.newTodoText.trim() !== '') {
          this.todos.push({ text: this.newTodoText, done: false });
          this.newTodoText = '';
        }
      },
    },

  }).mount('#app');
  