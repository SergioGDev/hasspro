import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_GOOGLE_ANALYTICS, COOKIE_GOOGLE_ANALYTICS_ACCEPTED } from 'src/app/interfaces/cookies-data.interface';
import { LocalLink } from 'src/app/interfaces/local-data.interface';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  vLinks: LocalLink[] = [];
  vLinksServicios: LocalLink[] = [];
  vLegalLinks: LocalLink[] = [];

  @Output()
  cookiesAccepted = new EventEmitter<boolean>();

  constructor(
    private localDataService: LocalDataService,
    private cookieService: CookieService
  ) {
    // Constructor

  }

  ngOnInit() {
    // NgOnInit
    this.vLinks = this.localDataService.getLocalLinks();
    this.vLegalLinks = this.localDataService.getLegalLinks();
    this.vLinksServicios = this.localDataService.getServiciosLinks();
  }

  onClickAceptarCookies() {
    const expiresDate: Date = new Date();
    expiresDate.setFullYear(expiresDate.getFullYear() + 1);
    this.cookieService.set(COOKIE_GOOGLE_ANALYTICS, COOKIE_GOOGLE_ANALYTICS_ACCEPTED, {expires: expiresDate});
    this.cookiesAccepted.emit(true);
  }

}
