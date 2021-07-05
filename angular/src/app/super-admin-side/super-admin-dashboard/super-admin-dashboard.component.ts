import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminModel } from 'src/app/models/adminModel';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {
  allUsers:adminModel[]=[];
  constructor(private router:Router,private http:HttpClient) { 
  //   this.allUsers=[
  //     {
  //         id:1,
  //         image:"https://i.pinimg.com/originals/9f/38/53/9f385384cf86350110d2d0029a0dcc15.jpg",
  //         name:'admin name',
  //         companyName:"one",
  //       companyAddress:"123-12-3-12313",
  //       mobileNumber:123123123
  //     },{
  //       id:1,
  //       image:"https://i.pinimg.com/originals/9f/38/53/9f385384cf86350110d2d0029a0dcc15.jpg",
  //       name:'admin name',
  //       companyName:"one",
  //     companyAddress:"123-12-3-12313",
  //     mobileNumber:123123123
  //   },{
  //     id:1,
  //     image:"https://i.pinimg.com/originals/9f/38/53/9f385384cf86350110d2d0029a0dcc15.jpg",
  //     name:'admin name',
  //     companyName:"one",
  //   companyAddress:"123-12-3-12313",
  //   mobileNumber:123123123
  // },
  //   ]

  }
  ngOnInit(): void {
    this.makeApiCall();
  }
  makeApiCall(){
    this.http.get("http://localhost:8080/super/dashboard").subscribe(data=>{
      console.log(data);
        this.allUsers=<adminModel[]>data;
    });
    
  }
  delete(each:adminModel){
    this.http.post("http://localhost:8080/super/deleteAdmin",{
      "emailId":each.email.toString()
    },{responseType:'text'}).subscribe(data=>{
      console.log(data);
        if(data=="Admin Deleted") {
            alert("Admin Deleted succesfully");
            location.reload();
        }

    });
  }
}
