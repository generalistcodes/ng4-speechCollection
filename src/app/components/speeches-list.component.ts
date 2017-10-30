import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';

import {SpeechService} from './speech.service';
import { Speech } from '../models/speech';

import * as ARR from 'lodash';

@Component({
  selector: 'speeches-list',  //  selector: 'speeches-list',
  template: `
      <div class="actions">
          <button md-raised-button (click)="onPrev()" *ngIf='prevKeys?.length'>Prev</button>
          <button md-raised-button (click)="onNext()" *ngIf='nextKey'>Next</button>
          <button md-raised-button (click)="deleteSpeeches()">
            Remove All
          </button>
       </div>

    <div *ngFor="let speech of speeches" style="width: 350px;margin-right: 10px;">
     <speech-details [speech]='speech'></speech-details>
    </div>




  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `]
})
export class SpeechesListComponent implements OnInit {

  speeches: any;
  numberItems = 5;
  nextKey: any;
  prevKeys: any[] = [];
  subscription: any;

  constructor(private speechService: SpeechService) {}

  ngOnInit() {
    this.getSpeechesList();
  }

  getSpeechesList(key?) {
    if (this.subscription) this.subscription.unsubscribe()

    this.subscription = this.speechService.getSpeeches(this.numberItems, key)
                          .subscribe(speeches => {
                              this.speeches = ARR.slice(speeches, 0, this.numberItems)
                              this.nextKey = ARR.get(speeches[this.numberItems], '$key')
                          })
  }

  onNext() {
    this.prevKeys.push(ARR.first(this.speeches)['$key'])
    this.getSpeechesList(this.nextKey)
  }

  onPrev() {
    const prevKey = ARR.last(this.prevKeys) // get last key
    this.prevKeys = ARR.dropRight(this.prevKeys) // delete last key

    this.getSpeechesList(prevKey)
  }

  deleteSpeeches() {
    this.speechService.deleteAll()
  }
}
