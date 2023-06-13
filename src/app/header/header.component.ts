import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import jwtDecode from 'jwt-decode';
import { BeforeRegisterComponent } from '../before-register/before-register.component';
import { FreelancerValueService } from '../Services/freelancer-value.service';
import { FreelancerGuard } from '../freelancer.guard';
import { Router } from '@angular/router';
// import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private free:FreelancerGuard,public _route:Router,private auth:AuthService,private toast:ToastrService,private isFreelance:FreelancerValueService){}//,private jwtHelper:JwtHelperService){}
  isLogin:boolean=false;
  isfree:boolean=false;

  // public jwtHelper: JwtHelperService = new JwtHelperService();

   
  ngOnInit(): void {
    this.auth.userdata.subscribe(()=>{
      if(this.auth.userdata.getValue()!=null){
        this.isLogin=true;
      }
      else{
        this.isLogin=false;
      }

      if(this.free.canActivate()){
          this.isfree=true;
        }
        else{
          this.isfree=false;
        }
    })  

  }

  logOut(){
    this.auth.logout();
    this._route.navigate(['/Landing'])
  }

  message(){
    this.toast.info("If you want to create Profile go to Create Profile, If not ... continue :) ")
  }
  

}
