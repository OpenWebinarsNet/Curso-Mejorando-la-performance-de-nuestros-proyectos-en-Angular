import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeMaterialModule } from './home-material.module';

import {
  MyCustomButtonComponent,
  TodoListComponent,
  TodoPickerComponent,
  MyCustomCardComponent
} from 'src/app/components';

@NgModule({
  declarations: [
    HomeComponent,
    TodoPickerComponent,
    TodoListComponent,
    MyCustomButtonComponent,
    MyCustomCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeMaterialModule
  ]
})
export class HomeModule { }
