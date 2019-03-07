import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myName = "Govindu"

  receivedUpdatedName = function(e){
    console.log("Back to Parent :")
    console.log(e)
    this.myName = e
  }

  constructor() { }

  ngOnInit() {
  }

}
