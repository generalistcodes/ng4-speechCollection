import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {environment} from '../environments/environment';
import { AppComponent } from './containers/app.component';

import {SpeechesListComponent} from './components/speeches-list.component';
import {SpeechDetailsComponent} from './components/speech-details.component';
import {CreateSpeechComponent} from './components/create-speech.component';

import {SpeechService} from './components/speech.service';
import {SearchSpeechesComponent} from './components/search-speech.component';
import { MaterialModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components';
import { PipesModule } from './pipes';
@NgModule({
  declarations: [
    AppComponent,
    SpeechesListComponent,
    SpeechDetailsComponent,
    CreateSpeechComponent,
    SearchSpeechesComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ComponentsModule,
    PipesModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    MaterialModule,
    NgbModule.forRoot()

  ],
  providers: [SpeechService],
  bootstrap: [AppComponent]
})

export class AppModule {}
