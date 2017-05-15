import { Component } from '@angular/core';

@Component({
  selector: 'dg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSidenavOpen:boolean = false;

  constructor(){
    this.onSidenavClick.bind(this);
  }

  onSidenavClick(sidenav){
    this.isSidenavOpen = !this.isSidenavOpen;
    sidenav.toggle();
  }
}
