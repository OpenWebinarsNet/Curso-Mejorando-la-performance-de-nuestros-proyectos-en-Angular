import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { ReplaySubject, takeUntil } from 'rxjs';

import { ToDo } from './models';
import { TodoService, TodoListService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  private destructor: ReplaySubject<void>;

  constructor(private toDoService: TodoService, private toDoListService: TodoListService) {
    this.destructor = new ReplaySubject<void>();
  }

  ngOnInit() {
    this.fillTodoList();
  }

  private fillTodoList(): void {
    this.toDoService.getTodoList().pipe(takeUntil(this.destructor)).subscribe(
      {
        next: (todoList: ToDo[]) => {
          this.toDoListService.addToDo(todoList);
        }
      }
    );
  }

  async ngOnDestroy(): Promise<void> {
    this.destructor.next();
    this.destructor.complete();
  }
}
