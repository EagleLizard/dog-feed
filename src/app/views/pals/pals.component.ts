import { Component, OnInit } from '@angular/core';
import { PalsService } from '../pals.service';
import { Pal } from '../pal';

@Component({
  selector: 'dg-pals',
  templateUrl: './pals.component.html',
  styleUrls: ['./pals.component.scss']
})
export class PalsComponent implements OnInit {

  pals:Pal[];

  constructor(
    private palsService:PalsService
  ) { }

  ngOnInit() {
    this.pals = this.palsService.getPals();
  }

}
