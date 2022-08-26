import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { ToDo } from 'src/app/models';
import { TodoListService } from 'src/app/services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  toDoList: ToDo[];

  constructor(
    private toDoListService: TodoListService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.toDoList = [];
  }

  ngOnInit(): void {
    this.fillTodoList();
  }

  public completeToDo(toDo: ToDo): void {
    this.toDoList = this.toDoList.map(
      (item: ToDo) => {
        if (item.id === toDo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      }
    );

    this.toDoListService.addToDo(this.toDoList);
  }

  private fillTodoList(): void {
    this.toDoListService.toDoList$.subscribe(
      {
        next: (todoList: ToDo[]) => {
          this.toDoList = [...todoList];
          this.changeDetectorRef.detectChanges();
        }
      }
   );
  }

}
