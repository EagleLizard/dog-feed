const AGE_RANGE = {
  min: 31, // 18 dog years
  max: 77 // 45 dog years
}

let idIncrementer = 1;

export class Pal {
  id:number;
  name:string;
  age:number; // in months
  bio:string = '';

  constructor(name:string){
    this.name = name;
    this.id = idIncrementer++;
    this.age = Math.floor(AGE_RANGE.min + (Math.random()*(AGE_RANGE.max-AGE_RANGE.min)));
  }

}
