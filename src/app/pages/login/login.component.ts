import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loging: boolean = false;
  errorLogin: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  formularioLogin: FormGroup = this.fb.group({
    email: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ]
  })

  ngOnInit(): void {

  }

  onSubmit() {

    if ( this.formularioLogin.invalid ) {
      this.formularioLogin.markAllAsTouched();
      return;
    }

    this.loging = true;
    const { email, password } = this.formularioLogin.value;

    this.authService.login( email, password )
      .then( resp => {
        localStorage.setItem('hasspro_internal_token', resp.user!.uid);
        this.loging = false;
        this.router.navigateByUrl('/private/email-list');
      },
      error => {
        console.log(error);

        this.loging = false;
        this.errorLogin = true;
      }
    )
  }

}
