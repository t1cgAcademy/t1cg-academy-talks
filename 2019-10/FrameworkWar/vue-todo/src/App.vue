<template>
  <div id="app">
    <h1>Vue TODO App</h1>
    <input type="text" placeholder="Add a TODO" v-model="input" />
    <button v-on:click="handleAdd">Add TODO</button>
    <div
      v-for="todo in todoList"
      v-bind:key="todo.id"
      v-bind:class="[todo.completed ? 'completed' : '']"
    >
      <input
        type="checkbox"
        v-bind:id="todo.id"
        v-bind:checked="todo.completed"
        v-on:change="handleUpdate"
      />
      {{todo.description}}
      <button v-on:click="handleDelete" v-bind:id="todo.id">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      input: "",
      todoList: [
        {
          id: "1",
          description: "Go to the store",
          completed: false
        },
        {
          id: "2",
          description: "Write Code",
          completed: false
        },
        {
          id: "3",
          description: "Read emails",
          completed: false
        }
      ]
    };
  },
  methods: {
    handleAdd: function() {
      this.todoList = [
        ...this.todoList,
        { id: String(this.todoList.length + 1), description: this.input }
      ];
      this.input = "";
    },
    handleUpdate: function(e) {
      this.todoList = this.todoList.map(todo => {
        if (todo.id === e.target.id) {
          return { ...todo, completed: !todo.completed };
        } else return todo;
      });
    },
    handleDelete: function(e) {
      const todoList = this.todoList.filter(todo => {
        return todo.id !== e.target.id;
      });
      this.todoList = todoList;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.completed {
  text-decoration: line-through;
}
</style>
