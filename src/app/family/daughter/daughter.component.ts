import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrls: ['./daughter.component.css']
})
export class DaughterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  helloFromGuest = function(){
    console.log("hello from random guest")
  }

}
