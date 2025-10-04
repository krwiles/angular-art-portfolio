import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterLink, Router, NavigationEnd, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header implements OnInit {
    private router = inject(Router);
    headerClass = signal(['center-screen', 'left-screen']);

    ngOnInit(): void {
        // Subscribe to router events to update header class based on current route
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event) => {
                this.headerClass.set(
                    event.urlAfterRedirects === '/' ? ['center-screen'] : ['left-screen'],
                );
            });
    }
}
