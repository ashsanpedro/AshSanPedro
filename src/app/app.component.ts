import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar';
import { Footer } from './layout/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  template: `
  
  <div class="flex flex-col min-h-screen">
  <navbar></navbar>

  <!-- Main content area -->
  <main class="flex-grow">
    <router-outlet></router-outlet>
  </main>

  <!-- Footer -->

</div>
  `,

})
export class AppComponent {
  title = 'AshSanPedro';
}
