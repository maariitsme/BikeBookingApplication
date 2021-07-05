import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from 'src/app/services/userdetails.service';
import { adminDetails } from '../adminDetails';
import { User } from '../shared/user.model';
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
 user: User = new User;
 image:string='https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg';
 passwordString:string=''; 
 details:adminDetails={
    adminId:" ",
    email:" ",
    password:" ",
    mobileNumber:" ",
    earnings:" ",
    sellerName:" ",
    userRole:" ",
    companyName:" ",
    companyImageURL:" ",
    companyAddress:" ",

  };
 li:any;
  lis:User[]=[];
  //lis!: [];
  Name:any;
  Email:any;
  Password:any;
  Age:any;
  MobileNumber:any;
  CompanyName:any;
  CompanyAddress:any;
  url:string="https://telanganatoday.com/wp-content/uploads/2021/02/Virtusa.jpg";

  constructor(private http : HttpClient,private userdetails:UserdetailsService,private router:Router){
    this.makeApiCall();
  
  } 
  
  ngOnInit(): void {
    // this.http.get('http://www.mocky.io/v2/5ea172973100002d001eeada')
    //    .subscribe(Response => {
    //      if(Response){  
    //        hideloader();
    //      }
    //      console.log(Response);
    //      //console.log(this.li);
    //      //console.log(this.lis);
    //      this.li=Response;
    //      this.lis=this.li.list;
    //      console.log(this.lis);
    //      this.Name=this.lis[0].Name;
    //      this.Email=this.lis[0].Email;
    //      this.Password=this.lis[0].Password;
    //      this.MobileNumber=this.lis[0].MobileNumber;
    //      this.CompanyName=this.lis[0].CompanyName;
    //      this.CompanyAddress=this.lis[0].CompanyAddress;
    //     //  this.user.Name=this.lis[0].Name;
    //     //  this.user.Email=this.lis[0].Email;
    //     //  this.user.Password=this.lis[0].Password;
    //     //  this.user.Age=this.lis[0].Age;
    //     //  this.user.MobileNumber=this.lis[0].MobileNumber;
      //  });
      //  function hideloader(){
      //    const res=document.getElementById('loading');
      //    if(res!=null)
      //    res.style.display = 'none';
      //   }
      this.makeApiCall();
     }
     makeApiCall(){

       this.http.post("http://localhost:8080/admin/profile",{
         "adminId":this.userdetails.getUserId().toString()

     },{responseType:'json'}).subscribe(data=>{
       console.log(data);
       this.details=<adminDetails>data;
       this.passwordString='*******'
     });
     }
     goToEdit(){
       this.router.navigateByUrl('admin/editProfile')
     }


  
}
