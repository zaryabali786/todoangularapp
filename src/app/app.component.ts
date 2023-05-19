import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  newTodo: string = '';
  todos: string[] = [];
  editingIndex: number | null = null;
  editedTodo: string = '';

  addTodo(): void {
    if (this.newTodo === '') {
      alert('Input is empty.');
    } else {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  startEditing(index: number): void {
    this.editingIndex = index;
    this.editedTodo = this.todos[index];
  }

  saveEditing(index: number): void {
    this.todos[index] = this.editedTodo;
    this.editingIndex = null;
  }
}
