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
        'Hiding in the pantry. My family tried to give a B-A-T-H. I smell fine!',
        26,
        2
      )
    );
    FEED_ITEMS.push(
      new DogFeedItem(
        palsService.getPalById(1),
        'Bark 😏',
        284,
        771
      )
    );
    FEED_ITEMS.push(
      new DogFeedItem(
        palsService.getPalById(6),
        'Bored...someone bark at me 👌🏼.',
        0,
        15
      )
    );
  }

  getDogFeedItems():DogFeedItem[]{
    return FEED_ITEMS;
  }

}
