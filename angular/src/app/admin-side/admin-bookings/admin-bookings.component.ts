import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { adminBookings } from '../adminBookings';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent implements OnInit {

  details:adminBookings[];
  constructor(private http:HttpClient,private router:Router,private userdetails:UserdetailsService) {
    this.details=[];
    this.makeApiCall();
    // this.details=[
    //   {
    //     name:'some name',
    //     bikemodel:'bike mode',
    //     rent:'rent',
    //     days:'12',
    //     price:'12313$'
    //   },
    //   {
    //     name:'some name 2',
    //     bikemodel:'bike mode',
    //     rent:'rent',
    //     days:'12',
    //     price:'12313$'
    //   }
    //   ,{
    //     name:'some name 3',
    //     bikemodel:'bike mode',
    //     rent:'rent',
    //     days:'12',
    //     price:'12313$'
    //   },
    //   {
    //     name:'some name  4',
    //     bikemodel:'bike mode',
    //     rent:'rent',
    //     days:'12',
    //     price:'12313$'
    //   },
    //   {
    //     name:'some name 5',
    //     bikemodel:'bike mode',
    //     rent:'rent',
    //     days:'12',
    //     price:'12313$'
    //   }
    // ]
   }

  ngOnInit(): void {
    this.makeApiCall();
    // this.details=[
    //   {
    //     name:'some name',
    //     bikemodel:'bike mode',
    //     rent:'rent',
    //     days:'12',
    //     price:'12313$'
    //   },
    //   {
    //     name:'some name 2',
    //     bikemodel:'bike mode',
    //     rent:'rent',
    //     days:'12',
    //     price:'12313$'
    //   }
    //   ,{
    //     name:'some name 3',
    //     bikemodel:'bike mode',
    //     rent:'rent',
    //     days:'12',
    //     price:'12313$'
    //   },
    //   {
    //     name:'some name  4',
    //     bikemodel:'bike mode',
    //     rent:'rent',
    //     days:'12',
    //     price:'12313$'
    //   },
    //   {
    //     name:'some name 5',
    //     bikemodel:'bike mode',
    //     rent:'rent',
    //     days:'12',
    //     price:'12313$'
    //   }
    // ]
  }
  makeApiCall(){
    this.http.post("http://localhost:8080/admin/bookings",{
      "adminId":this.userdetails.getUserId().toString()

    },{responseType:"json"}).subscribe(data=>{
      this.details=<adminBookings[]>data ;
      console.log(this.details);
    });
  }

}
