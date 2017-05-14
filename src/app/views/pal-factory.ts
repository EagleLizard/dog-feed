import { Pal } from './pal';

const PAL_NAMES = [
  'Rex',
  'Kodee',
  'Lilah',
  'Kenzie',
  'Milo',
  'Roofus',
  'Milly',
  'Willow'
];

export default function makePals():Pal[]{
  return PAL_NAMES.map(name=>{
    let newPal = new Pal(name);
    if(name === 'Rex'){
      newPal.age = 29;
      newPal.bio = 'THREE WORDS: FETCH, FETCH & FETCH. I LOVE TO PLAY ALL DAY AND ENJOY STEALING SNACKS FROM THE BIN WHEN DAD’S NOT HOME ;) BARK ME A MESSAGE!';
    }
    return newPal;
  });
}
