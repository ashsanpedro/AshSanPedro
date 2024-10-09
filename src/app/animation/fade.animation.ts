import { trigger, transition, style, animate } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    style({ opacity: 0 }),  // Start with opacity 0
    animate('500ms ease-in', style({ opacity: 1 }))  // Fade in over 500ms
  ])
]);
