import { Component, OnInit } from '@angular/core';

const SITE_TITLE = 'DogBook';

@Component({
  selector: 'dg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string = SITE_TITLE;

  constructor() { }

  ngOnInit() {
  }

}
