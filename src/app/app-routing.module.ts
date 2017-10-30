import {CreateSpeechComponent} from './components/create-speech.component';
import {SpeechesListComponent} from './components/speeches-list.component';
import {SearchSpeechesComponent} from './components/search-speech.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'speeches', pathMatch: 'full'},
  {path: 'speeches', component: SpeechesListComponent},
  {path: 'add', component: CreateSpeechComponent},
  {path: 'findbyname', component: SearchSpeechesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
