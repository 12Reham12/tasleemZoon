import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { ChatComponent } from './chat/chat.component';
import { BeforeRegisterComponent } from './before-register/before-register.component';
import { DataProfileComponent } from './data-profile/data-profile.component';
import { JobesComponent } from './jobes/jobes.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';
import { ClientJobsComponent } from './client-jobs/client-jobs.component';
import { ProposalsForJobComponent } from './proposals-for-job/proposals-for-job.component';
import { ProposalsDetailsComponent } from './proposals-details/proposals-details.component';
import { JobsComponent } from './jobs/jobs.component';
import { NotifyHireComponent } from './notify-hire/notify-hire.component';
import { FormuploadComponent } from './formupload/formupload.component';
import { FormuploadprotfiloComponent } from './formuploadprotfilo/formuploadprotfilo.component';
import { FreelancerGuard } from './freelancer.guard';
import { ApplyJopComponent } from './apply-jop/apply-jop.component';
import { ProposalComponent } from './proposal/proposal.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FilterationComponent } from './filteration/filteration.component';

const routes: Routes = [
  {path:'',redirectTo:'Landing',pathMatch:'full'},
  {path:'Landing',component:LandingpageComponent},
  {path:'Home',component:HomeComponent},
  {path:"Jobs",canActivate:[AuthGuard],component:JobesComponent},
  {path:"ApplyJob/:id",canActivate:[AuthGuard],component:ApplyJopComponent},
  {path:"proposal/:id",canActivate:[AuthGuard],component:ProposalComponent},
  {path:"savedJobs",component:SavedJobsComponent},
  {path:"clientJobs",canActivate:[AuthGuard],component:ClientJobsComponent},
  {path:'proposals/:id',canActivate:[AuthGuard],component:ProposalsForJobComponent},
  {path:'proposalsDetails/:id',canActivate:[AuthGuard],component:ProposalsDetailsComponent},
  {path:'notifyHire',canActivate:[AuthGuard,FreelancerGuard],component:NotifyHireComponent},
 /*  {path:'ProposalDetails',component:RegisterComponent}, */
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'BeforeRegister',component:BeforeRegisterComponent},
  {path:'DataProfile',canActivate:[AuthGuard],component:DataProfileComponent},
  {path:'Profile',canActivate:[AuthGuard],component:ProfileComponent},
  {path:'uploading',canActivate:[AuthGuard],component:FormuploadComponent},
  {path:'uploadingProtofilo',canActivate:[AuthGuard],component:FormuploadprotfiloComponent},
  {path:'Chat',canActivate:[AuthGuard],component:ChatComponent},
  {path:'addjob',canActivate:[AuthGuard],component:JobsComponent},
  {path:'contact',canActivate:[AuthGuard],component:ContactComponent},
  {path:'pricing',canActivate:[AuthGuard],component:PricingComponent},
  {path:'ourservice',canActivate:[AuthGuard],component:OurserviceComponent},
  {path:'Filteration',canActivate:[AuthGuard],component:FilterationComponent},

  {path:'about',canActivate:[AuthGuard],component:AboutComponent},

  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
