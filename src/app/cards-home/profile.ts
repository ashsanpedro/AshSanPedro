import { ChangeDetectionStrategy, Component, inject } from "@angular/core";

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CVDialogComponent } from "./cv-dialog";
import { CommonModule } from '@angular/common';
import {
    MAT_DIALOG_DATA,
    MatDialogTitle,
    MatDialogContent,
  } from '@angular/material/dialog';
  import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'profile',
    imports: [MatDialogModule, CommonModule, MatDialogContent, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    template: `
      <!-- Profile -->
        <div class="flex flex-col items-center justify-center w-full h-full rounded-2xl p-12 shadow-lg animate-floating transition backdrop-blur-md
        bg-gunsmoke-800 bg-opacity-30 
        dark:bg-gunsmoke-500 dark:bg-opacity-20">
            <div class="grid grid-cols-4 grid-rows-4 gap-1 h-[200px]">

                <div class="row-span-2 mr-4 flex items-center"><img class="bg-transparent rounded-full shadow-[inset_1px_5px_6px_rgba(0,0,0,0.3)]" src="images/profile.png" alt="profile"></div>

                <div class="flex justify-start items-end col-span-3"><h1 class="text-black text-3xl font-medium dark:text-white">ASHLEY SAN PEDRO</h1></div>

                <div class="flex justify-start items-start col-span-3 col-start-2 row-start-2"><h2 class="text-xl font-light"><i class="fa-solid fa-location-dot mx-1 text-red-600"></i>Philippines</h2></div>

                <div class="col-span-4 row-span-2 row-start-3 mt-2 text-gunsmoke-50 dark:text-gunsmoke-50">I am passionate about building beautiful and functional user interfaces. Dedicated to continuous learning.</div>
            </div>

            <div class="flex items-end w-full h-full">
                <a (click)="openAshCV()" class="flex justify-center items-center w-[100px] h-[40px] rounded-md bg-red-600 text-gunsmoke-50 hover:bg-opacity-80 transition-all duration-600">
                    <i class="fa-solid fa-file mr-1"
                    ></i> Resume
                </a>

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
    
    openPdf() {
        window.open('./assets/Ash_CV.pdf', '_blank');
      }
    
    readonly dialog = inject(MatDialog);

    openAshCV() {
      this.dialog.open(CVDialogComponent);
    }

  
}
