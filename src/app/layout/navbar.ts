import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

  
  @Component({
    selector: 'navbar',
    imports: [RouterModule, CommonModule],
    standalone: true,
    template: `
      <nav class="fixed bg-transparent py-10">
        <ul
          class="relative flex space-x-3 bg-gunsmoke-400 bg-opacity-60 text-white font-light w-[281px] px-1 py-1 border-none rounded-full"
        >
          <!-- Sliding background effect -->
          <div
            class="absolute top-1 bottom-0 left-1 right-1 w-[87px] h-[24px] bg-gunsmoke-900 bg-opacity-90 border-solid border border-gunsmoke-500 rounded-full transition-all duration-500 ease-in-out"
            [ngStyle]="{ transform: (activeLinkTransform) }"
          ></div>

          <li class="relative z-10">
            <a
              routerLink="/home"
              class="py-1 px-3 rounded-full transition duration-800 ease-in-out"
              (click)="setActiveLink('/home')"
              [ngClass]="{ 'text-white': isActive('/home') }"
              >Home</a
            >
          </li>
          <li class="relative z-10">
            <a
              routerLink="/about"
              class="py-1 px-3 rounded-full transition duration-800 ease-in-out"
              (click)="setActiveLink('/about')"
              [ngClass]="{ 'text-white': isActive('/about') }"
              >About me</a
            >
          </li>
          <li class="relative z-10">
            <a
              routerLink="/works"
              class="py-1 px-3 rounded-full transition duration-800 ease-in-out"
              (click)="setActiveLink('/works')"
              [ngClass]="{ 'text-white': isActive('/works') }"
              >Works</a
            >
          </li>
        </ul>
      </nav>
    `,
  })
  export class Navbar {
    logo: string = '{ A }';

    activeLinkTransform = 'translateX(20)';

    constructor(private router: Router) {}

    // Track the active route
    isActive(route: string): boolean {
      return this.router.url === route;
    }

    // Set the transform property to move the sliding background
    setActiveLink(route: string): void {
      const index = ['/home', '/about', '/works'].indexOf(route);
      this.activeLinkTransform = `translateX(${index * 93}px)`; // 
    }
  }





// <nav class="flex justify-center bg-transparent shadow-lg py-10">
//         <ul class="flex justify-center bg-white bg-opacity-30 text-white w-{270px} px-2 py-2 border-none rounded-full space-x-3">
//             <li>
//                 <a routerLink="/home" routerLinkActive="active" class="py-1 px-3 rounded-full transition duration-200 ease-in-out" [ngClass]="{'bg-blue-500 text-white transition duration-700 ease-in-out': isActive('/home')}">Home</a>
//             </li>
//             <li>
//                 <a routerLink="/about" routerLinkActive="active" class="py-1 px-3 rounded-full transition duration-200 ease-in-out" [ngClass]="{'bg-blue-500 text-white transition duration-700 ease-in-out': isActive('/about')}">About me</a>
//             </li>
//             <li>
//                 <a routerLink="/works" routerLinkActive="active" class="py-1 px-3 rounded-full transition duration-200 ease-in-out" [ngClass]="{'bg-blue-500 text-white transition duration-700 ease-in-out': isActive('/works')}">Works</a>
//             </li>
//         </ul>
//     </nav>