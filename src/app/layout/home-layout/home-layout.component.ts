import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';
import { LocalLink } from 'src/app/interfaces/local-data.interface';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  vLocalLinks: LocalLink[] = [];
  menuMobileOpened: boolean = false;

  constructor(
    private localDataService: LocalDataService
  ) { }

  ngOnInit(): void {
    this.vLocalLinks = this.localDataService.getLocalLinks();
  }

}
