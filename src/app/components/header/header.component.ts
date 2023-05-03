import { Component, OnInit } from '@angular/core';
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

  constructor(
    private localDataService: LocalDataService
  ) { }

  ngOnInit(): void {
    this.vLocalLinks = this.localDataService.getLocalLinks();
  }

}
