import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {

  currentTask="";
  @ViewChild('inputTask') itt:ElementRef
  tasks=[
    "plan the weekend!",
    "plan the weekday break!"
  ]

  addTask = function(){
    console.log(this.currentTask)
    this.tasks.push(this.currentTask)
    this.currentTask=""
    this.itt.nativeElement.focus()
  }

  changeTaskStatus = function(ct){
    console.log("changing the task status")
    this.tasks.splice(ct,1)
  }
  constructor() { }

  ngOnInit() {
  }

}
