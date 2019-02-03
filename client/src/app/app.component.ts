import { Component } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(private tasksService: TasksService) {}

  getTasks() {
    let observable = this.tasksService.getAllTasks()
      .subscribe(data => {
        console.log(data);
      });
  }

  create() {
    let task = {
      'task': 'Work on this project',
      'status': true
    };
    let observable = this.tasksService.createTask(task)
      .subscribe(data => {
        console.log(data);
      });
  }
}
