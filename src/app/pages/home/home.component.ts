import { Component } from '@angular/core';

import { Profile } from '../../cards-home/profile';
import { TechStack } from '../../cards-home/techStack';
import { CommonModule } from '@angular/common';
import { SearchBar } from '../../cards-home/searchBar';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Profile, TechStack, SearchBar, CommonModule],
  template: `
  
  <div class="home flex justify-between h-[480px] w-full">
    <!-- Left Container -->
    <div class="flex flex-col justify-between w-[49%] h-full">
        <!-- Profile -->
        <profile class="w-full h-[80%] cursor-pointer"></profile>

        <!-- Search Bar -->
        <searchbar class="flex items-center justify-center w-full h-[17%] rounded-lg shadow-lg backdrop-blur  border-none cursor-pointer
        bg-opacity-70 bg-gunsmoke-50
        dark:bg-gunsmoke-900 dark:bg-opacity-60 dark:shadow-md"></searchbar>
    </div>

    <!-- Right Container -->
    <div class="grid grid-cols-5 grid-rows-7 gap-3 w-[49%] h-full">
        <div class="col-span-2 row-span-3 rounded-xl shadow-md backdrop-blur
        bg-gunsmoke-50 bg-opacity-70 
        dark:bg-gunsmoke-900 dark:bg-opacity-60 dark:shadow-md"></div>

        <div class="col-span-2 row-span-3 col-start-3 rounded-xl shadow-md backdrop-blur 
        bg-gunsmoke-50 bg-opacity-70 
        dark:bg-gunsmoke-900 dark:bg-opacity-60 dark:shadow-md"></div>

        <div class="row-span-7 col-start-5 rounded-xl backdrop-blur-lg bg-gunsmoke-900 bg-opacity-20 border border-gunsmoke-600"></div>

        <div class="col-span-2 col-start-3 row-start-4 rounded-lg shadow-md backdrop-blur 
        bg-gunsmoke-50 bg-opacity-70 
        dark:bg-gunsmoke-900 dark:bg-opacity-60 dark:shadow-md"></div>

        <div class="col-span-2 row-span-3 col-start-3 row-start-5 rounded-xl shadow-md backdrop-blur 
        bg-gunsmoke-50 bg-opacity-70 
        dark:bg-gunsmoke-900 dark:bg-opacity-60 dark:shadow-md"></div>

        <div class="col-span-2 row-span-2 col-start-1 row-start-6 rounded-xl shadow-md backdrop-blur
        bg-gunsmoke-50 bg-opacity-70 
        dark:bg-gunsmoke-900 dark:bg-opacity-60 dark:shadow-md"></div>

        <div class="col-start-1 row-start-4 rounded-lg shadow-md backdrop-blur
        bg-gunsmoke-50 bg-opacity-70
        dark:bg-gunsmoke-900 dark:bg-opacity-60 dark:shadow-md"></div>

        <div class="col-start-2 row-start-4 rounded-lg shadow-md backdrop-blur
        bg-gunsmoke-50 bg-opacity-70
        dark:bg-gunsmoke-900 dark:bg-opacity-60 dark:shadow-md"></div>

        <div class="col-start-1 row-start-5 rounded-lg shadow-md backdrop-blur
        bg-gunsmoke-50 bg-opacity-70 
        dark:bg-gunsmoke-900 dark:bg-opacity-60 dark:shadow-md"></div>
        
        <div class="col-start-2 row-start-5 rounded-lg shadow-md backdrop-blur
        bg-gunsmoke-50 bg-opacity-70 
        dark:bg-gunsmoke-900 dark:bg-opacity-60 dark:shadow-md"></div>
    </div>
  </div>

  <!-- Tech Stack -->
  <div class="h-[90px] w-full mt-4" >
      <techstack></techstack>
  </div>

  
  `,
  styles: `
  
  .home {
    font-family: "Poppins", sans-serif;
  }
`
})
export class HomeComponent {

  
  
}
