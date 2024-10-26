import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';


@Component({
  selector: 'app-cv-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  
  <div class="w-full h-full p-7 
  dark:bg-slate-950">
    <div class="flex items-center justify-between">
       <h2  class="text-black text-2xl">Resume</h2>
       <mat-icon class="cursor-pointer" (click)="closeDialog()">close</mat-icon>
    </div>
    
    <mat-dialog-content>This dialog showcases the title, close, content and actions elements.</mat-dialog-content>

    <!-- <mat-dialog-actions></mat-dialog-actions> -->
  </div>
  
  
  `,
  styles: ''
})
export class CVDialogComponent {

  constructor(public dialogRef: MatDialogRef<CVDialogComponent>) {}
  
  closeDialog(): void {
    this.dialogRef.close();
  }
}
