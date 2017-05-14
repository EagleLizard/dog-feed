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

  avatarImageStyle:string;
  avatarImageSize:string = '40px';
  profileImageStyle:string;
  showFullCard:boolean = false;

  constructor() { }

  ngOnInit() {
    this.avatarImageStyle = `url(${this.pal.avatarImageUrl})`;
    this.profileImageStyle = this.pal.profileImageUrl;
  }

  toggleFullCard(){
    this.showFullCard = !this.showFullCard;
  }

}
