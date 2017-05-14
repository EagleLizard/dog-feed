const AGE_RANGE = {
  min: 31, // 18 dog years
  max: 77 // 45 dog years
};
const BASE_IMAGE_URL = 'assets/';
const PROFILE_URL = id=> `${BASE_IMAGE_URL}${id}.png`;
const AVATAR_URL = id => `${BASE_IMAGE_URL}${id}a.png`;

let idIncrementer = 1;

export class Pal {
  id:number;
  name:string;
  age:number; // in months
  bio:string[] = null;
  profileImageUrl:string;
  avatarImageUrl:string;

  constructor(name:string){
    this.name = name;
    this.id = idIncrementer++;
    this.age = Math.floor(AGE_RANGE.min + (Math.random()*(AGE_RANGE.max-AGE_RANGE.min)));
    this.profileImageUrl = PROFILE_URL(this.id);
    this.avatarImageUrl = AVATAR_URL(this.id);
  }

}
