import { Pal } from '../pal';

const TIME_RANGE_MS = {
  min:6e5/2, //5 minutes
  max:1.8e6
}

const ONE_MINUTE_MS:number = 6e4;
const ONE_HOUR_MS:number = 3.6e6;

let startTime:number = new Date().getTime();
let totalTimeDifferance = 0;

export class DogFeedItem {

  poster:Pal;
  status:string;
  timeAgo:number;
  timeAgoString:string;
  numPaws:number = 0;
  numBarks:number = 0;
  imageUrls:string[] = [];

  constructor(poster:Pal, status:string, numPaws?:number, numBarks?:number, imageUrls?:string[]){
    this.poster = poster;
    this.status = status;
    if(imageUrls !== undefined){
      this.imageUrls = imageUrls;
    }
    if(numPaws !== undefined){
      this.numPaws = numPaws;
    }
    if(numBarks){
      this.numBarks = numBarks;
    }
    this.timeAgo = Math.floor(totalTimeDifferance + TIME_RANGE_MS.min + (Math.random()*(TIME_RANGE_MS.max - TIME_RANGE_MS.min)));
    this.timeAgoString = getTimeAgoString(this.timeAgo);
    console.log(this.timeAgoString);
    totalTimeDifferance = this.timeAgo;
  }

}

function getTimeAgoString(ms:number):string{
  let result:number;
  if(ms < ONE_HOUR_MS){
    return Math.floor(ms/ONE_MINUTE_MS)+' minutes ago';
  }else{
    result = Math.floor(ms/ONE_HOUR_MS);
    return result+` hour${result === 1 ? '':'s'} ago`;
  }
}
