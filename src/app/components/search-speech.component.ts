import {Component, OnInit} from '@angular/core';
import {SpeechService} from './speech.service';
import { Subject } from 'rxjs/Subject'
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-speeches',
  template: `

    <md-card class="mat-elevation-z0">
      <md-card-title>Search Speeches</md-card-title>
      <md-card-content>
        <md-input-container>
          <input mdInput placeholder="Search for a speeches" (keyup)="search($event)" class="input">
        </md-input-container>
          <div *ngIf="speeches?.length < 1">
            <p>Not found!</p>
          </div>
       </md-card-content>
    </md-card>


      <div *ngFor="let speech of speeches">
         <md-card class="grd-harmonic">
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
      <br>



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

export class SearchSpeechesComponent implements OnInit {

  startWith = new Subject()
  endWith = new Subject()
  speeches: any[]

  constructor(private speechService: SpeechService) {}

  ngOnInit() {
    this.speechService.findSpeeches(this.startWith, this.endWith)
                        .subscribe(speeches => this.speeches = speeches)
  }

  search($event) {
      const queryText = $event.target.value
      this.startWith.next(queryText)
      this.endWith.next(queryText + '\uf8ff')
  }

}
