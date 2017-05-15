import { Component, OnInit } from '@angular/core';

import { DogFeedService } from './dog-feed.service';
import { DogFeedItem } from './dog-feed-item';

@Component({
  selector: 'dg-dog-feed',
  templateUrl: './dog-feed.component.html',
  styleUrls: ['./dog-feed.component.scss']
})
export class DogFeedComponent implements OnInit {

  feedItems:DogFeedItem[];

  constructor(
    private dogFeedService:DogFeedService
  ) { }

  ngOnInit() {
    this.feedItems = this.dogFeedService.getDogFeedItems();
  }

}
