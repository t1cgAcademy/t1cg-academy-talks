import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "angular-todo";
  todoList: Todo[];
  input: string;

  constructor() {}

  handleAdd(): void {
    this.todoList = [
      ...this.todoList,
      {
        id: String(this.todoList.length + 1),
        description: this.input,
        completed: false
      }
    ];
    this.input = "";
  }

  handleUpdate(e): void {
    this.todoList = this.todoList.map(todo => {
      if (todo.id === e.target.id) {
        return { ...todo, completed: !todo.completed };
      } else return todo;
    });
  }

  handleDelete(e): void {
    const todoList = this.todoList.filter(todo => {
      return todo.id !== e.target.id;
    });
    this.todoList = todoList;
  }

  ngOnInit() {
    this.input = "";
    this.todoList = [
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
    ];
  }
}

interface Todo {
  id: string;
  description: string;
  completed: boolean;
}
