import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

// Interface that components can implement to provide leave animation logic
export interface CanAnimateLeave {
  animateLeave: () => Promise<void>;
}

// Guard to handle leave animations on route deactivation
@Injectable({ providedIn: 'root' })
export class LeaveAnimationGuard implements CanDeactivate<CanAnimateLeave> {
  canDeactivate(component: CanAnimateLeave): Observable<boolean> | Promise<boolean> | boolean {
    // If the component has an animateLeave method, call it and wait for it to complete
    if (component.animateLeave) {
      return component.animateLeave().then(() => true);
    }
    return true;
  }
}