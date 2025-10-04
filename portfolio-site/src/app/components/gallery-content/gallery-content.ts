import { Component, inject, signal } from '@angular/core';
import { GalleryImageService } from '../../services/gallery-image.service';
import { GalleryImage } from '../../model/gallery-image';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-gallery-content',
  imports: [NgOptimizedImage],
  templateUrl: './gallery-content.html',
  styleUrl: './gallery-content.scss'
})
export class GalleryContent {
    galleryImageService = inject(GalleryImageService);
    galleryImages = signal<GalleryImage[]>([]);
    
    ngOnInit() {
        this.galleryImages.set(this.galleryImageService.galleryImages);
    }
}
