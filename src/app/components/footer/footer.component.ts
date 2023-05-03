import { Component, OnInit } from '@angular/core';
import { LocalLink } from 'src/app/interfaces/local-data.interface';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  vLinks: LocalLink[] = [];
  vLegalLinks: LocalLink[] = [];

  constructor(
    private localDataService: LocalDataService
  ) {
    // Constructor

  }


  ngOnInit() {
    // NgOnInit
    this.vLinks = this.localDataService.getLocalLinks();
    this.vLegalLinks = this.localDataService.getLegalLinks();
  }

}
