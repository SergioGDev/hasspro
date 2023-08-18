import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';
import { LocalLink } from 'src/app/interfaces/local-data.interface';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_GOOGLE_ANALYTICS, COOKIE_GOOGLE_ANALYTICS_ACCEPTED } from 'src/app/interfaces/cookies-data.interface';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  vLocalLinks: LocalLink[] = [];
  menuMobileOpened: boolean = false;
  googleAnalyticsCookieAccepted: boolean = false;

  constructor(
    private localDataService: LocalDataService,
    private cookieService: CookieService,
  ) { }

  ngOnInit(): void {
    this.vLocalLinks = this.localDataService.getLocalLinks();
    this.googleAnalyticsCookieAccepted = this.cookieService.get(COOKIE_GOOGLE_ANALYTICS) !== '';
  }
  
  onClickAceptarCookies() {
    const expiresDate: Date = new Date();
    expiresDate.setFullYear(expiresDate.getFullYear() + 1);
    this.cookieService.set(COOKIE_GOOGLE_ANALYTICS, COOKIE_GOOGLE_ANALYTICS_ACCEPTED, {expires: expiresDate});
    this.googleAnalyticsCookieAccepted = this.cookieService.get(COOKIE_GOOGLE_ANALYTICS) !== '';
  }
}
