import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, CommonModule } from '@angular/common';

import { Navbar } from './layout/navbar';
import { Footer } from './layout/footer';
import { DarkMode } from './layout/darkMode/darkMode';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorksComponent } from './pages/works/works.component';

import { DarkModeService } from './layout/darkMode/darkMode.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    DarkMode,
    HomeComponent,
    AboutComponent,
    WorksComponent,
    NgClass,
    CommonModule,
  ],
  template: `
     
    <!-- <div *ngIf="isLoading" class="flex justify-center items-center h-screen">
      <div
        class="border-4 border-black dark:border-gray-300 rounded-lg w-12 h-12 animate-spin"
      ></div>
    </div> -->
    <!-- *ngIf="!isLoading" -->
    <div 
      [ngClass]="{
        'bg-[url(/background/dark.png)]  opacity-100':
          (darkModeService.isDarkMode$ | async),
        'bg-[url(/background/light.png)]  opacity-100': !(
          darkModeService.isDarkMode$ | async
        )
      }"
      class="flex flex-col min-h-screen bg-cover bg-center transition-all duration-800 ease-in-out "
    >
      <!-- Dark Mode -->
      <div
        class="fixed flex justify-end items-center bottom-5 right-6 h-[45px] w-[100px]"
      >
        <darkMode></darkMode>
      </div>

      <!-- Navbar -->
      <navbar class="flex justify-center"></navbar>

      <!-- Main content area -->
      <main class=" w-[1200px] text-white mx-auto mt-32">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
       
    </div>
  `,
})
export class AppComponent {
  title = 'AshSanPedro';
  isLoading = true;

  constructor(public darkModeService: DarkModeService) {
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2500); 
  }

}
