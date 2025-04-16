import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Task {
  userId?: number;
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  status?: 'To Do' | 'In Progress' | 'Done';
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
