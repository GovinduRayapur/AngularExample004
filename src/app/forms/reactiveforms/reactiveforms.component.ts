import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  rHobbyForm
  constructor() { }

  ngOnInit() {
    this.rHobbyForm=new FormGroup({
      fName:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3)])),
      lName:new FormControl("",this.lastNameValidator),
      hobby:new FormControl(),
    })
  }

  lastNameValidator = function(control){
    if(control.value.length<4){
      return {'lName':true}
    }
  }

  addHobby=function(hf){
    console.log(hf)
  }

}
