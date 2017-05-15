import { Injectable } from '@angular/core';

import { DogFeedItem } from './dog-feed-item';
import { PalsService } from '../pals.service';

const FEED_ITEMS:DogFeedItem[] = [
  //milo is pal id 5
];

@Injectable()
export class DogFeedService {

  constructor(
    private palsService:PalsService
  ) {
    FEED_ITEMS.push(
      new DogFeedItem(
        palsService.getPalById(5),
        'Neighbors just got a cat. Advice?',
        5
      )
    );
    FEED_ITEMS.push(
      new DogFeedItem(
        palsService.getPalById(3),
        'Currently hiding while my family tried to give a B-A-T-H. I smell fine! Bored...someone bark at me 👌🏼.',
        2,
        15
      )
    );
  }

  getDogFeedItems():DogFeedItem[]{
    return FEED_ITEMS;
  }

}
