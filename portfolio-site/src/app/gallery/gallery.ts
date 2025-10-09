import { Component, signal } from '@angular/core';
import { GalleryContent } from '../components/gallery-content/gallery-content';
import { CanAnimateLeave } from '../guards/leave-animation.guard';

@Component({
    selector: 'app-gallery',
    imports: [GalleryContent],
    templateUrl: './gallery.html',
    styleUrl: './gallery.scss',
})
export class Gallery implements CanAnimateLeave {
  showGalleryContent = signal(false);

  // Show gallery content after a delay to allow header animation to complete
  ngOnInit() {
    setTimeout(() => {
      this.showGalleryContent.set(true);
    }, 1000); // 1 second delay to match header animation
  }

  // Guard method to handle leave animation
  animateLeave(): Promise<void> {
    this.showGalleryContent.set(false);
    return new Promise((resolve) => {
      setTimeout(() => {resolve();}, 500); // Match the CSS animation duration
    });
  }

}
