import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-hasspro',
  templateUrl: './sobre-hasspro.component.html',
  styleUrls: ['./sobre-hasspro.component.scss']
})
export class SobreHassproComponent implements OnInit {

  constructor() {}
  
  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
    });
  }
}
