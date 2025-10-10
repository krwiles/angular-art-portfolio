import { Component, inject, input, signal } from '@angular/core';
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
    selectedImage = signal<GalleryImage | null>(null);
    showLightBox = signal(false);
    
    readonly showGalleryContent = input<boolean>();

    private scrollY = 0;

    ngOnInit() {
      const images = this.galleryImageService.galleryImages.slice();
      this.shuffle(images);
      this.galleryImages.set(images);
    }

    shuffle(array: any[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // Math.floor never returns 1.0, hence the i + 1
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    showImage(image: GalleryImage) {
      this.selectedImage.set(image);
      this.showLightBox.set(true);

      // Lock scroll
      this.scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.scrollY}px`;
      document.body.style.width = '100%';
    }
    
    closeImage() {
      this.showLightBox.set(false);
      this.selectedImage.set(null);

      // Unlock scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, this.scrollY); // Restore scroll position
    }
}
