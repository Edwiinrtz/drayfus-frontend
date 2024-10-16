import { Injectable } from '@angular/core';
import { Breed } from '../models/breed';
import { CatImage } from '../models/cat-image';

@Injectable({
  providedIn: 'root'
})
export class CatImageService{

  URI = 'http://localhost:8080/breeds'
  constructor() { }

  getBreeds():Promise<Breed[]>{
    // return "calling the function"
    return fetch(this.URI).then(response=> response.json())
  }

  getImagesByBreed(breed: string):Promise<CatImage[]>{
    return fetch(this.URI+'/'+breed).then(response=> response.json())
  }


}
