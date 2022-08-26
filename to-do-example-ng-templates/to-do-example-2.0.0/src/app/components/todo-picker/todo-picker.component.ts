import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

import { TodoListService } from 'src/app/services/todo-list.service';
import { ToDo } from 'src/app/models';

@Component({
  selector: 'app-todo-picker',
  templateUrl: './todo-picker.component.html',
  styleUrls: ['./todo-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPickerComponent implements OnInit {

  private toDoList: ToDo[];

  constructor(private toDoListService: TodoListService) {
    this.toDoList = [];
  }

  ngOnInit(): void {
    this.fillTodoList();
  }

  public addToDo(value: string): void {
    this.toDoList = [
      ...this.toDoList,
      {
        id: uuidv4(),
        'title': value,
        completed: false
      }
    ];
    this.toDoListService.addToDo(
      this.toDoList
    )
  }

  private fillTodoList(): void {
    this.toDoListService.toDoList$.subscribe(
      {
        next: (todoList: ToDo[]) => {
          this.toDoList = [...todoList];
        }
      }
   );
  }

}
