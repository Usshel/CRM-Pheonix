import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { VerifyComponent } from './components/verify/verify.component';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { LeadsComponent } from './components/leads/leads.component';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';
import { AuthLoginComponentModule } from './components/auth-login/auth-login.component-module';
import { VerifyComponentModule } from './components/verify/verify.component-module';
import { CompleteProfileComponentModule } from './components/complete-profile/complete-profile.component-module';
import { LeadsComponentModule } from './components/leads/leads.component-module';
import { LoggedOutComponentModule } from './components/logged-out/logged-out.component-module';

const routes: Routes = [
  { path: 'auth/login', component: AuthLoginComponent }, 
  { path: 'auth/register', component: AuthLoginComponent }, 
  { path: 'verify', component: VerifyComponent }, 
  { path: 'complete-profile', component: CompleteProfileComponent }, 
  { path: 'leads', component: LeadsComponent }, 
  { path: 'logged-out', component: LoggedOutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthLoginComponentModule, VerifyComponentModule, CompleteProfileComponentModule, LeadsComponentModule, LoggedOutComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
