import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRegisterComponent } from './auth-register.component';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [AuthRegisterComponent],
  providers: [],
  exports: [AuthRegisterComponent]
})
export class AuthRegisterComponentModule {
}
