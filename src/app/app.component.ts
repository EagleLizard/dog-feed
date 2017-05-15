import { Component, OnInit } from '@angular/core';

import { PalsService } from './views/pals.service';
import { Pal } from './views/pal';

@Component({
  selector: 'dg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSidenavOpen:boolean = false;
  pals:Pal[];

  constructor(
    private palsService:PalsService
  ){
    this.onSidenavClick.bind(this);
  }

  ngOnInit(){
    this.pals = this.palsService.getPals();
  }

  onSidenavClick(sidenav){
    this.isSidenavOpen = !this.isSidenavOpen;
    sidenav.toggle();
  }

  onPalsViewInit(sidenav){
    setTimeout(()=>{
      this.isSidenavOpen = !this.isSidenavOpen;
    })

    sidenav.open().then(()=>{
      // debugger;
    })
  }
}
