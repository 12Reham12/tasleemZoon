import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { FreelancerGuard } from '../freelancer.guard';
import { ToastrService } from 'ngx-toastr';
import { FreelancerValueService } from '../Services/freelancer-value.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {

  constructor(private free:FreelancerGuard,private auth:AuthService,private isFreelance:FreelancerValueService){}//,private jwtHelper:JwtHelperService){}

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
  }
}
