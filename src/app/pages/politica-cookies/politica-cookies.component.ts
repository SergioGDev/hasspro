import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-cookies',
  templateUrl: './politica-cookies.component.html',
  styleUrls: ['./politica-cookies.component.scss']
})
export class PoliticaCookiesComponent implements OnInit {

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

}
