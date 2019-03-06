import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  hobbyForm
  addHobby=function(hf){
    console.log("Hobby Captured")
    console.log(hf)
  }
  constructor() { }

  ngOnInit() {
  }

}
