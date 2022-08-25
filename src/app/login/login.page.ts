import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: string = '';

  constructor(private router: Router) { }
  onLogin(){
    let navigationExtras: NavigationExtras = {
      state: {user: this.user}
      };
      this.router.navigate(['/home'],navigationExtras);
  }
  ngOnInit() {
  }

}
