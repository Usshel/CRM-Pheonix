import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthRegisterComponent {
  readonly register: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      this._validatorsService.hasACapitalLetter,
      this._validatorsService.hasASmallLetter,
      Validators.minLength(8),
      this._validatorsService.hasANumber,
      this._validatorsService.hasASpecialSign,
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
    ])
  },
    [this._validatorsService.samePassword]
  );

  constructor(private _validatorsService: ValidatorsService, private _authService: AuthService) {
  }

  onRegisterSubmitted(register: FormGroup): void {

  }
}
