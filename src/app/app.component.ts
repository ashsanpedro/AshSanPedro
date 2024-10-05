import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar';
import { Footer } from './layout/footer';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorksComponent } from './pages/works/works.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, HomeComponent, AboutComponent, WorksComponent],
  template: `
  
  <div class="flex flex-col min-h-screen bg-[url('/images/bg.jpg')] bg-cover bg-center">
    <navbar class="flex justify-center"></navbar>

    <!-- Main content area -->
    <main class="flex-grow text-white mx-10">
     <router-outlet></router-outlet>
    </main>

    <!-- Footer -->

  </div>
  `,

})
export class AppComponent {
  title = 'AshSanPedro';
}
