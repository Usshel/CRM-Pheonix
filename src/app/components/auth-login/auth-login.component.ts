import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLoginComponent {
  readonly login: FormGroup = new FormGroup({ email: new FormControl('',[Validators.required, Validators.email]), password: new FormControl('', Validators.required) });

  constructor(private _authService: AuthService, private _router: Router, private _cd: ChangeDetectorRef) {
  }

  onLoginSubmitted(login: FormGroup): void {
    this._authService.userLogin(login.value.email, login.value.password).subscribe(
      {
        error: (err) => {
          this.login.setErrors({
            beValid: err.error.message
          })
          this._cd.markForCheck();
        },
        complete: () => this._router.navigate(['leads'])

      },
    );
    this._cd.markForCheck();
  }
}
