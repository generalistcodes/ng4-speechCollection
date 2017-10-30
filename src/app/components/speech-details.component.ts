import {Component, OnInit, Input} from '@angular/core';

import {SpeechService} from './speech.service';
import { Speech } from '../models/speech';

@Component({
  selector: 'speech-details',
  template: `

      <div *ngIf="speech">
      <md-card class="grd-orange" style="width: 350px;margin-right: 10px;">
      <md-card-title-group>
         <md-card-title> {{speech.author| bcEllipsis:35}} </md-card-title>
        <md-card-subtitle>{{ speech.active }}</md-card-subtitle>
        <md-card-subtitle>Date Created: {{speech.dateCreated.day}}-{{speech.dateCreated.month}}-{{speech.dateCreated.year}}</md-card-subtitle>
      </md-card-title-group>
      <md-card-content>
        <p>{{ speech.content | bcEllipsis }}</p>
      </md-card-content>
      <md-card-footer>
        <sc-speech-authors [speech]="speech"></sc-speech-authors>
        <!--<span class="button is-small btn-primary" *ngIf='speech.active' (click)='updateActive(false)'>Inactive</span>-->
        <!--<span class="button is-small btn-primary" *ngIf='!speech.active' (click)='updateActive(true)'>Active</span>-->
           <br>
        <button md-raised-button color="primary" (click)="deleteSpeech()">
          Remove
        </button>
      </md-card-footer></md-card>
      </div>

  `,
  styles: [`

:host {
  display: flex;
  justify-content: center;
  margin: 75px 0;
}
md-card {
  max-width: 600px;
}
md-card-title-group {
  margin-left: 0;
}
img {
  width: 60px;
  min-width: 60px;
  margin-left: 5px;
}
md-card-content {
  margin: 15px 0 50px;
}
md-card-actions {
  margin: 25px 0 0 !important;
}
md-card-footer {
  padding: 0 25px 25px;
  position: relative;
}

  `]
})
export class SpeechDetailsComponent implements OnInit {

  @Input() speech:Speech;

  constructor(private speechService:SpeechService) {
  }

  ngOnInit() {
  }

  updateActive(isActive:boolean) {
    this.speechService.updateSpeech(this.speech.$key, {active: isActive})
  }

  deleteSpeech() {
    this.speechService.deleteSpeech(this.speech.$key)
  }

}
