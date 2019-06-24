import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user = {};

  constructor(private router: Router, private cookieService: CookieService, private authService: AuthService) { }
  
  isLoggedIn: boolean = this.cookieService.check('isLoggedIn')

  

  

  ngOnInit() {
    this.authService.getUser()
    .subscribe(data => this.user = data);
  }

  logout() {
    this.isLoggedIn = false;
    this.authService.logout();
    this.cookieService.deleteAll()
    this.router.navigateByUrl('/')
  }

}
