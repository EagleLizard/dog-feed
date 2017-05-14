import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Pal } from '../../pal';

@Component({
  selector: 'dg-pal-card',
  templateUrl: './pal-card.component.html',
  styleUrls: ['./pal-card.component.scss']
})
export class PalCardComponent implements OnInit {

  @Input() pal:Pal;

  constructor() { }

  ngOnInit() {
  }

}
