import { Injectable } from '@angular/core';

import { Pal } from './pal';
import makePals from './pal-factory';

const PALS:Pal[] = makePals();

@Injectable()
export class PalsService {

  constructor() { }

  getPals():Pal[]{
    return PALS;
  }

  getPalById(id:number):Pal | undefined{
    return PALS.find(pal=>{
      return pal.id === id;
    });
  }

}
