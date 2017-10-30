import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SpeechDetailsComponent } from './speech-details.component'
import { SpeechesListComponent } from './speeches-list.component'
import { SpeechAuthorsComponent } from './speech-author'
import { LayoutComponent } from './layout';
import { SidenavComponent } from './sidenav';
import { NavItemComponent } from './nav-item';
import { ToolbarComponent } from './toolbar';

import { PipesModule } from '../pipes';

export const COMPONENTS = [
  LayoutComponent,
  SpeechAuthorsComponent,
  SidenavComponent,
  NavItemComponent,
  ToolbarComponent
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    PipesModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
