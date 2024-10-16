import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatImage } from '../../models/cat-image';
import { CarouselModule } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { InfoModalComponent } from "../info-modal/info-modal.component";

@Component({
  selector: 'app-catimages',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterLink, InfoModalComponent],
  templateUrl: './catimages.component.html',
  styleUrl: './catimages.component.scss'
})
export class CatimagesComponent {
  @Input() images!: CatImage[];
  visible = false;
  constructor(){
  }

  showInfo(){
    this.visible = !this.visible
  }
}
