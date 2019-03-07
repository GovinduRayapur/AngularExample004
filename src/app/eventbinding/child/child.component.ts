import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() sendName

  @Output() sendNameToParent = new EventEmitter()

  updateName = function(){
    console.log(this.sendName)
    this.sendNameToParent.emit(this.sendName)
  }

  constructor() { }

  ngOnInit() {
  }

}
