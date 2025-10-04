import { Component } from '@angular/core';
import { GalleryContent } from '../components/gallery-content/gallery-content';

@Component({
    selector: 'app-gallery',
    imports: [GalleryContent],
    templateUrl: './gallery.html',
    styleUrl: './gallery.scss',
})
export class Gallery {

}
