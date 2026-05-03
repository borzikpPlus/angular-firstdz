import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  images = ['1.jpg', '2.jpg', '3.jpg'];

  tasks = [
    { text: 'Задача 1', done: true, image: '1.jpg' },
    { text: 'Задача 2', done: false, image: '2.jpg' },
    { text: 'Задача 3', done: false, image: '3.jpg' }
  ];

  newTask = '';
  newImage = '1.jpg';

  addTask() {
    if (this.newTask.trim() === '') {
      return;
    }
    this.tasks.push({
      text: this.newTask,
      done: false,
      image: this.newImage
    });
    this.newTask = '';
  }

  removeTask(i: number) {
    this.tasks.splice(i, 1);
  }
}
