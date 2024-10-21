import { Component } from "@angular/core";

@Component({
    selector: 'searchbar',
    imports: [],
    standalone: true,
    template: `
      <div class="grid w-[410px] h-[40px] place-items-start place-content-center rounded-full 
      bg-opacity-10 bg-black
      dark:bg-gunsmoke-400 dark:bg-opacity-20">
        <div class="flex">
          <div class="flex items-center justify-center mr-4">
          <i class="fa-solid fa-magnifying-glass text-xl text-black dark:text-white"></i>
          </div>
          <p class="text-xl tracking-wider font-semibold font-sans text-gunsmoke-900 w-full uppercase border-r-4 border-gunsmoke-900 whitespace-nowrap overflow-hidden animate-typing dark:text-gunsmoke-100 dark:border-gunsmoke-100">
            Frontend Web Developer
          </p>
        </div>
      </div>
    `,
    styles: `
@keyframes cursor {
  50% { border-color: transparent; }
}

@keyframes typing {
  from { width: 0; }
}

.animate-typing {
  animation: typing 2.5s steps(19), cursor 0.5s step-end infinite;
}
    
    `
})
export class SearchBar {
    
}