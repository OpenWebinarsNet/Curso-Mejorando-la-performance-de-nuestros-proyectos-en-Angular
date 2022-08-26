import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { ToDo } from '../models/todo.interface';


@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private toDoList: BehaviorSubject<ToDo[]> = new BehaviorSubject<ToDo[]>([]);

  public toDoList$: Observable<ToDo[]> = this.toDoList.asObservable();

  public addToDo(toDoList: ToDo[]): void {
    this.toDoList.next(toDoList);
  }
}
