import { Component, HostListener, OnInit } from '@angular/core';
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

  constructor(
    private localDataService: LocalDataService
  ) { }

  ngOnInit(): void {
    this.vLocalLinks = this.localDataService.getLocalLinks();
  }

  // event onScroll
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.notInTop = (window.pageYOffset) > 50;
  }

}
