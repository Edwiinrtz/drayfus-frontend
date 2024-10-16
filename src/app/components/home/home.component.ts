import { Component, Inject } from '@angular/core';
import { CatImage } from '../../models/cat-image';
import { CatimagesComponent } from '../catimages/catimages.component';
import { CommonModule } from '@angular/common';
import { FormModule } from '@coreui/angular';
import { Breed } from '../../models/breed';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CatImageService } from '../../services/cat-image.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CatimagesComponent, FormModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  selectedBreed: string | null = "Breed";

  breeds: Breed[] = []

  images: CatImage[] = []

  showInfo:boolean = true

  constructor(private router: Router, private catImageService: CatImageService){
    this.catImageService.getBreeds().then(data => {
      this.breeds = data;
    })
  }
  
  getByBreed(breed: string):void{
    this.showInfo = false
    this.catImageService.getImagesByBreed(breed).then(data => {
      this.images = data
      setTimeout(() => {
        this.showInfo = this.images.length > 0;
      });
    })

  }

  goToProfile(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/profile']);
      return;
    }

    this.router.navigate(['/login'])
  }

}
