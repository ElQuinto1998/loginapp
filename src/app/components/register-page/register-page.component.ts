import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  addUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/private']);
      }).catch((err) => {
        console.log(err);
      })
  }

}
