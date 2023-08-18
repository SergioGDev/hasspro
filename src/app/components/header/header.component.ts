import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_GOOGLE_ANALYTICS, COOKIE_GOOGLE_ANALYTICS_ACCEPTED } from 'src/app/interfaces/cookies-data.interface';
import { LocalLink } from 'src/app/interfaces/local-data.interface';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  vLocalLinks: LocalLink[] = [];
  menuMobileOpened: boolean = false;

  notInTop: boolean = false;

  @Output()
  cookiesAccepted = new EventEmitter<boolean>();

  constructor(
    private localDataService: LocalDataService,
    private cookieService: CookieService,
  ) { }

  ngOnInit(): void {
    this.vLocalLinks = this.localDataService.getLocalLinks();
  }

  // event onScroll
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.notInTop = (window.pageYOffset) > 50;
  }

  onClickAceptarCookies() {
    const expiresDate: Date = new Date();
    expiresDate.setFullYear(expiresDate.getFullYear() + 1);
    this.cookieService.set(COOKIE_GOOGLE_ANALYTICS, COOKIE_GOOGLE_ANALYTICS_ACCEPTED, {expires: expiresDate});
    this.cookiesAccepted.emit(true);
  }

}
