import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ToDo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  public getTodoList(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>('assets/json/toDoList.json');
  }
}
