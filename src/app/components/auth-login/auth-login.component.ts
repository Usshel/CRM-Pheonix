import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLoginComponent {
  readonly login: FormGroup = new FormGroup({ email: new FormControl('',[Validators.required, Validators.email]), password: new FormControl('', Validators.required) });

  constructor(private _loginService: LoginService, private _router: Router, private _cd: ChangeDetectorRef) {
  }

  onLoginSubmitted(login: FormGroup): void {
    this._loginService.userLogin(login.value.email, login.value.password).subscribe(
      {
        error: (err) => {
          this.login.setErrors({
            beValid: err.error.message
          })
        },
        complete: () => this._router.navigate(['leads'])
        
      },
    );
    this._cd.markForCheck();
  }
}
