import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(user: any) {
    let authorise = this.authService.login(user.username, user.password);
    // console.log(authorise)
    if (authorise) {
      return this.router.navigateByUrl('/home');
    }
    return this.router.navigateByUrl('/login');
  }

}
