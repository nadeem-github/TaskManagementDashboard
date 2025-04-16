import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Task } from '../models/task/task.module';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Task {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
  status?: 'To Do' | 'In Progress' | 'Done'; // Custom field
}

@Injectable({ providedIn: 'root' })

export class TaskService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl).pipe(
      map(tasks => tasks.slice(0, 15)), // Limit tasks for UI
      map(tasks =>
        tasks.map(task => ({
          ...task,
          status: task.completed ? 'Done' : 'To Do'
        }))
      )
    );
  }

  addTask(task: Task): Observable<Task> {
    const newTask = {
      ...task,
      id: Math.floor(Math.random() * 1000),
      completed: task.status === 'Done'
    };
    return of(newTask); // simulate POST
  }

  updateTask(task: Task): Observable<Task> {
    return of(task); // simulate PUT
  }

}