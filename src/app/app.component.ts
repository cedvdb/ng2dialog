import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  open = false;
  style="red"
  code=`
  <button (click)="open = true">open dialog</button>

  <ng2-dialog [open]="open" (closed)="open = false">
    <div>This is the content of my dialog dialog</div>
  </ng2-dialog>`;
}
