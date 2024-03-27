import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from 'src/app/services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private loggerService: LoggerService) {}
  // Logger les todos
  /**
   * Permet de logger la liste des todos
   */
  logTodos(): void {
    this.loggerService.logger(this.todos);
  }
  // Ajouter un Todo
  /**
   *
   * @param todo Permet d'ajouter le todo passé en paramètre
   */
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  // Récupérer la liste des Todos
  /**
   * Récupérer la liste des Todos
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return this.todos;
  }
  // Supprimer un Todo
  /**
   * Supprimer un Todo
   * @param todo
   */
  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
