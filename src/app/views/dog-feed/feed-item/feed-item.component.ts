import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { DogFeedItem } from '../dog-feed-item';

@Component({
  selector: 'dg-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {

  @Input() feedItem:DogFeedItem;

  constructor() { }

  ngOnInit() {
    console.log(this.feedItem);
  }

}
