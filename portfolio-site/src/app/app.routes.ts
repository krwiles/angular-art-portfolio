import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Gallery } from './gallery/gallery';

export const routes: Routes = [
    {
        path: '',
        title: 'Home', 
        component: Home
    },
    {
        path: 'gallery',
        title: 'Gallery',
        component: Gallery
    },
];
