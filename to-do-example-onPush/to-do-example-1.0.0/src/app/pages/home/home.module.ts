import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeMaterialModule } from './home-material.module';

import { TodoPickerComponent } from '../../components/todo-picker/todo-picker.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    TodoPickerComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeMaterialModule
  ]
})
export class HomeModule { }
