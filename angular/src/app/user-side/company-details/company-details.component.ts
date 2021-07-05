import { animate, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BikeService } from 'src/app/services/bike.service';
import { CompanyService } from 'src/app/services/company.service';
import { LoginService } from 'src/app/services/login.service';
import { bikeInterface } from '../bikeInterface';
import { companyInterface } from '../companyInterface';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
 
})
export class CompanyDetailsComponent implements OnInit {
  details: any;
  company!:companyInterface;
  constructor(private router:Router,private c:CompanyService,private bike:BikeService) {
    //   let x=localStorage.getItem('company');
    // // this.company=this.c.get();
    // // console.log("x object\n"+typeof(x));
    // this.company=(x!=null)?JSON.parse(x):null;
    // console.log("in constructor " +this.company);
    // this.details = [
    //   {
    //     id: 1,
    //     modelName: '1',
    //     price: 10000,
    //     type: 'bike type',
    //     booked: false,
    //     description:'sadadasdasdasdasda',
    //     image:'https://www.drivespark.com/images/2020-07/2020-bmw-s-1000-xr-30.jpg',
    //     sampleimages:[
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //     ]
    //   }, {
    //     id: 2,
    //     modelName: '2',
    //     price: 10000,
    //     type: 'bike type',
    //     booked: true,
    //     description:'sadadasdasdasdasda',
    //     image:'https://www.drivespark.com/images/2020-07/2020-bmw-s-1000-xr-30.jpg',
    //     sampleimages:[
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed'
    //     ]
    //   }, {
    //     id: 3,
    //     modelName: '3',
    //     price: 10000,
    //     type: 'bike type',
    //     booked: false,
    //     description:'sadadasdasdasdasda',
    //     image:'https://www.drivespark.com/images/2020-07/2020-bmw-s-1000-xr-30.jpg',
    //     sampleimages:[
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools'
    //     ]
    //   }, {
    //     id: 4,
    //     modelName: '4',
    //     price: 10000,
    //     type: 'bike type',
    //     booked: true,
    //     description:'sadadasdasdasdasda',
    //     image:'https://www.drivespark.com/images/2020-07/2020-bmw-s-1000-xr-30.jpg',
    //     sampleimages:[
    //       'speed',
    //       'tools',
    //       'speed',
    //       'tools',
    //       'speed',
          
    //     ]
    //   }
    // ];

  }

  ngOnInit(): void {
    this.company=this.c.get();
    this.bike.makeApiCall().subscribe(
      data=>{this.details=data;
        console.log(data);
      },
      (response: any) => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
      // console.log(this.details);
    // this.company=history.state.company;
    // let x=localStorage.getItem('company');
    // this.company=this.c.get();
    // this.company==JSON.parse(x!=null?x:'nothing');
    // this.route.queryParams.subscribe(params=>{
    //   console.log(params)
    //   this.companyName=params['companyId'];
    //   console.log(this.companyName);
    // });
    // this.route.queryParams.subscribe(params => {
    //   this.company = params['name'];
    //   // console.log(params.comapnyId);
    // });
    // let x=localStorage.getItem('company');
    // // this.company=this.c.get();
    // // console.log("x object\n"+typeof(x));
    // this.company=(x!=null)?JSON.parse(x):null;


    // this.company=JSON.parse((x!=null)?x:this.c.get());
    // console.log(this.company);
  }
  gotoBikeDetails(each: bikeInterface ){
    this.bike.send(each);
    this.router.navigate(['user/bikeDetail/'+each.bikeID]);

  }
}
