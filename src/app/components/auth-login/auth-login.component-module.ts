import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthLoginComponent } from './auth-login.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [AuthLoginComponent],
  providers: [],
  exports: [AuthLoginComponent]
})
export class AuthLoginComponentModule {
}
