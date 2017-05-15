import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Pal } from '../pal';

@Component({
  selector: 'dg-pals',
  templateUrl: './pals.component.html',
  styleUrls: ['./pals.component.scss']
})
export class PalsComponent implements OnInit, AfterViewInit {

  @Input() pals:Pal[];
  @Output() onViewInit = new EventEmitter<number>();

  constructor(

  ) { }

  ngOnInit() {
    console.log(this.pals);
  }

  ngAfterViewInit(){
    this.onViewInit.emit(0);
  }

}
