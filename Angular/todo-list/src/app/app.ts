import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'todo-list';
  tasks  = [
    "Visit Ann",
    "Call Dad",
    "Go to the Gym",
    "Wash the dishes",
    "Shop for the party"
  ]

  add(newTask:string){
    console.log('Adding task:', newTask);
    this.tasks.push(newTask)
  }

  remove(existingTask:string){
    var userConfirmed = confirm(`Are you sure that you want to remove the following task? \n "${existingTask}"`)

    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
    console.log("Removing Task:",existingTask)
}

markAsDone(task:string){
  console.log('Marking task as done:', task);
  alert('The task: "'+task+'" is done')
}

}

