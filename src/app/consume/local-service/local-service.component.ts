import { Component, OnInit } from '@angular/core';
import { FriendServiceService } from 'src/app/services/friend-service.service';

@Component({
  selector: 'app-local-service',
  templateUrl: './local-service.component.html',
  styleUrls: ['./local-service.component.css']
})
export class LocalServiceComponent implements OnInit {

  welcomeMessage=""

  cabServiceName=""

  vendors = []
  constructor(private ls:FriendServiceService) { }

  ngOnInit() {
    this.welcomeMessage=this.ls.sayHello()
    console.log(this.ls.cabService)
    this.vendors = this.ls.cabService
    this.ls.welcome()
  }

  addCabService= function(){
    this.ls.cabService.push(this.addCabService)
    this.vendors = this.ls.cabService
  }

  

}
