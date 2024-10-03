import { Component } from '@angular/core';

  
  @Component({
    selector: 'navbar',
    imports: [],
    standalone: true,
    template: `
      <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <!-- Logo or Brand Name -->
          <a href="#" class="text-white text-lg font-semibold">{{ logo }}</a>

          <!-- Hamburger Icon for Mobile -->
          <button class="block md:hidden text-white" id="nav-toggle">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          <!-- Links for larger screens -->
          <div class="hidden md:flex space-x-4" id="nav-links">
            <a href="#" class="text-gray-300 hover:text-white">Home</a>
            <a href="#" class="text-gray-300 hover:text-white">About</a>
            <a href="#" class="text-gray-300 hover:text-white">Services</a>
            <a href="#" class="text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden hidden" id="mobile-menu">
          <a
            href="#"
            class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >Home</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >About</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >Services</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >Contact</a
          >
        </div>
      </nav>
    `,
  })
  export class Navbar {
    logo: string = '{ A }';
  }
  