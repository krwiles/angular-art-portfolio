import { Injectable } from '@angular/core';
import { GalleryImage } from '../model/gallery-image';

@Injectable({
    providedIn: 'root'
})
export class GalleryImageService {
    galleryImages: GalleryImage[] = [
    { src: 'assets/images/BibooSquished.png', alt: 'BibooSquished' },
    { src: 'assets/images/Card.png', alt: 'Card' },
    { src: 'assets/images/Doki.png', alt: 'Doki' },
    { src: 'assets/images/FaunyaHalloween.png', alt: 'FaunyaHalloween' },
    { src: 'assets/images/fonsi_yuki_full.png', alt: 'fonsi_yuki_full' },
    { src: 'assets/images/GhostieTruck.png', alt: 'GhostieTruck' },
    { src: 'assets/images/GigiHood.png', alt: 'GigiHood' },
    { src: 'assets/images/goomba_final.png', alt: 'goomba_final' },
    { src: 'assets/images/GremBox_.png', alt: 'GremBox_' },
    { src: 'assets/images/GremGyatt.png', alt: 'GremGyatt' },
    { src: 'assets/images/GremPlane.png', alt: 'GremPlane' },
    { src: 'assets/images/GuraGoodbye.png', alt: 'GuraGoodbye' },
    { src: 'assets/images/Illustration.png', alt: 'Illustration' },
    { src: 'assets/images/Illustration4.png', alt: 'Illustration4' },
    { src: 'assets/images/POVcompost.png', alt: 'POVcompost' },
    { src: 'assets/images/SoLongGawrGura.png', alt: 'SoLongGawrGura' }
    ];
}
