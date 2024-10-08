import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'footer',
    imports: [],
    standalone: true,
    template: `
    <footer class="bg-gray-800 text-white text-center py-4 mt-auto">
    <div class="container mx-auto">
    <p>&copy; 2024 Ashley</p>
    <p>{{ currentTime }}</p>
  </div>
</footer>

  `,
})

export class Footer implements OnInit {

    currentTime!: string;

    constructor() { }
  
    ngOnInit(): void {
      this.updateTime();
      setInterval(() => this.updateTime(), 1000);  // Update time every second
    }
  
    updateTime(): void {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      this.currentTime = `Current Time: ${hours}:${minutes}:${seconds}`;
    }

}








