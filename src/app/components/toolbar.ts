import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'sc-toolbar',
  template: `
    <md-toolbar color="primary" class="mat-elevation-z6">
      <button md-icon-button (click)="openMenu.emit()">
        <md-icon>menu</md-icon>
      </button>
      <ng-content></ng-content>
    </md-toolbar>
  `
  ,
  styles: [`
    .mat-elevation-z6 {
      position: relative;
      z-index:2;
    }
  `]
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
