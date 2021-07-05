import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { LoginService } from 'src/app/services/login.service';
import { companyInterface } from '../companyInterface';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  details:companyInterface[]=[];
  constructor(private router:Router,private company:CompanyService,private loggedInService:LoginService) { 
    // this.details=[
    //   {
    //     companyId:1,
    //     companyImage: "https://i.pinimg.com/originals/9f/38/53/9f385384cf86350110d2d0029a0dcc15.jpg",
    //   companyName:"one",
    //   companyAddress:"123-12-3-12313",
    //   mobileNumber:123123123
    // }
    // ,{
    //   companyId:2,
    //     companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/330px-User_icon_2.svg.png",

    //   companyName:"two",
    //   companyAddress:"hyd 231230",
    //   mobileNumber:9010824605

    // }
    // ,{
    //   companyId:3,
    //     companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/330px-User_icon_2.svg.png",

    //   companyName:"two",
    //   companyAddress:"hyd 231230",
    //   mobileNumber:9010824605

    // },
    // {
    //   companyId:4,
    //     companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/330px-User_icon_2.svg.png",

    //   companyName:"two",
    //   companyAddress:"hyd 231230",
    //   mobileNumber:9010824605

    // },
    // {
    //   companyId:1,
    //     companyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/330px-User_icon_2.svg.png",

    //   companyName:"two",
    //   companyAddress:"hyd 231230",
    //   mobileNumber:9010824605

    // },
    
    // "one","two","three"
  // ]
  }
  navigateToCompany(each:companyInterface){
    this.company.send(each);
    this.router.navigate(['/user/companyDetail/',each.companyId],{state:{company:each}});

  }
  ngOnInit(): void {
    // this.loggedInService.isLoggedIn();
    this.company.makeApiCall().subscribe(
      data=>{ this.details=data;
      console.log(this.details);}
    );
  }

}
