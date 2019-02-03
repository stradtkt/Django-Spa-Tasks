import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './Task';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getAllTasks() {
    return this.http.get('/tasks');
  }
  createTask(task) {
    return this.http.post('/tasks', task);
  }
}
