import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remote-api',
  templateUrl: './remote-api.component.html',
  styleUrls: ['./remote-api.component.css']
})
export class RemoteApiComponent implements OnInit {

  allUsers:any

  searchText
 
  constructor(private rest:RestapiService,private router:Router) { }

  ngOnInit() {
    this.rest.getRemoteData().subscribe((res)=>{
      this.allUsers = res
    })
  }

  viewUser = function(index){
    console.log("user at" + index)
    console.log(this.allUsers[index])
    //navigate new router  http://localhost:4200/viewUser/2
    this.router.navigate(["/viewuser"], [index])
  }

}
