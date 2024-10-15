import { Component } from "@angular/core";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { RouterModule } from "@angular/router";
// import { fadeAnimation } from "../animation/fade.animation";

@Component({
    selector: 'profile',
    // imports: [RouterModule, BrowserAnimationsModule],
    standalone: true,
    // animations: [fadeAnimation],
    template: `
      <!-- Profile -->
        <div class="animate-pulse  flex flex-col items-center justify-center w-full h-full rounded-2xl p-16 shadow-lg animate-floating transition backdrop-blur bg-gunsmoke-50 bg-opacity-60 dark:bg-gunsmoke-400 dark:bg-opacity-60">
            <div class="grid grid-cols-4 grid-rows-4 gap-1 h-[200px]">

                <div class="row-span-2 mr-4 flex items-center"><img class="bg-transparent rounded-full shadow-[inset_1px_5px_6px_rgba(0,0,0,0.3)]" src="images/profile.png" alt="profile"></div>

                <div class="flex justify-start items-end col-span-3"><h1 class="text-black text-3xl font-medium">ASHLEY SAN PEDRO</h1></div>

                <div class="flex justify-start items-start col-span-3 col-start-2 row-start-2"><h2 class="text-xl font-light"><i class="fa-solid fa-location-dot mx-1 text-red-600"></i>Philippines</h2></div>

                <div class="col-span-4 row-span-2 row-start-3 mt-2 text-gunsmoke-800 dark:text-gunsmoke-50">I am passionate about building beautiful and functional user interfaces. Dedicated to continuous learning.</div>
            </div>
            <div class="flex w-full h-full border border-white">
                <button class=" w-[25px] border border-black">Resume</button>
            </div>
        </div>
    `,
    styles: `
    
    @keyframes floating {
        0%, 100% {
        transform: translateY(0);
        }
        50% {
        transform: translateY(-7px);
        }
    }
  
    .animate-floating {
        animation: floating 3s ease-in-out infinite;
    }
    
    `
})
export class Profile {
    
}
