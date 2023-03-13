import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthLoginComponent } from './auth-login.component';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [AuthLoginComponent],
  providers: [],
  exports: [AuthLoginComponent]
})
export class AuthLoginComponentModule {
}
