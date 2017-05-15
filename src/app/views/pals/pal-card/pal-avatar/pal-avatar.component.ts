import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Pal } from '../../../pal';

@Component({
  selector: 'dg-pal-avatar',
  templateUrl: './pal-avatar.component.html',
  styleUrls: ['./pal-avatar.component.scss']
})
export class PalAvatarComponent implements OnInit {

  @Input() pal:Pal;
  @Input() doHide:boolean;
  @Input() avatarStyle:string;
  avatarSize:string = '40px';

  constructor() { }

  ngOnInit() {
    this.avatarStyle = `url(${this.pal.avatarImageUrl})`;
  }

}
