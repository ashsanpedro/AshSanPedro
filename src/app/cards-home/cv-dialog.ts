import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
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
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  
  
  <h2 mat-dialog-title>Dialog with elements</h2>
<mat-dialog-content>This dialog showcases the title, close, content and actions elements.</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button mat-dialog-close>Close</button>
</mat-dialog-actions>
  
  `,
  styles: ''
})
export class CVDialogComponent {


  

}
