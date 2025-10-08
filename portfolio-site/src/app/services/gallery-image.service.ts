import { Injectable } from '@angular/core';
import { GalleryImage } from '../model/gallery-image';

@Injectable({
    providedIn: 'root'
})
export class GalleryImageService {
    galleryImages: GalleryImage[] = [
        new GalleryImage('assets/images/BibooSquished.png', 'BibooSquished', 4096, 4096),
        new GalleryImage('assets/images/Card.png', 'Card', 1700, 2200),
        new GalleryImage('assets/images/Doki.png', 'Doki', 4096, 4096),
        new GalleryImage('assets/images/FaunyaHalloween.png', 'FaunyaHalloween', 4961, 7016),
        new GalleryImage('assets/images/fonsi_yuki_full.png', 'fonsi_yuki_full', 5120, 2880),
        new GalleryImage('assets/images/GhostieTruck.png', 'GhostieTruck', 4096, 4096),
        new GalleryImage('assets/images/GigiHood.png', 'GigiHood', 4096, 4096),
        new GalleryImage('assets/images/goomba_final.png', 'goomba_final', 2048, 2048),
        new GalleryImage('assets/images/GremBox_.png', 'GremBox_', 4096, 4096),
        new GalleryImage('assets/images/GremGyatt.png', 'GremGyatt', 3508, 2480),
        new GalleryImage('assets/images/GremPlane.png', 'GremPlane', 3508, 2480),
        new GalleryImage('assets/images/GuraGoodbye.png', 'GuraGoodbye', 4096, 4096),
        new GalleryImage('assets/images/Illustration.png', 'Illustration', 3508, 2480),
        new GalleryImage('assets/images/Illustration4.png', 'Illustration4', 4096, 4096),
        new GalleryImage('assets/images/POVcompost.png', 'POVcompost', 2048, 2048),
        new GalleryImage('assets/images/SoLongGawrGura.png', 'SoLongGawrGura', 4096, 4096),
        new GalleryImage('assets/images/smolcalli.png', 'smolcalli', 4096, 4096),
    ];
}
