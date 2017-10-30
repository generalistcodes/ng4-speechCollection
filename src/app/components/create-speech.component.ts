import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { Speech } from '../models/speech';
import {SpeechService} from './speech.service';
import {NgbDateStruct, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
const now = new Date();
@Component({
  selector: 'create-speech',
  template: `


 <md-card style="width: 300px;margin: 0 auto;" class="grd-pinky">
   <h3>New Speech</h3>
<div [hidden]="submitted" >
  <form (ngSubmit)="onSubmit()">

    <div class="form-group">
      <label for="name">Speech Name</label>
      <input type="text" class="form-control"
             id="name" required [(ngModel)]="speech.name"
             name="name">
    </div>

    <div class="form-group">
      <label for="name">Author</label>
      <input type="text" class="form-control"
             id="author" required [(ngModel)]="speech.author"
             name="author">
    </div>

    <div class="form-group">
      <label for="name">Keyword</label>
      <input type="text" class="form-control"
             id="keyword" required [(ngModel)]="speech.keyword"
             name="keyword">
    </div>

    <!-- Textarea -->
    <div class="form-group">
      <label for="textarea">Speech Content</label>

          <textarea class="form-control" id="textarea" name="textarea"
                    [(ngModel)]="speech.content"
                    name="content"
          >speech content</textarea>

    </div>

    <div class="input-group">
      <input class="form-control" placeholder="yyyy-mm-dd"
             name="dateCreated" [(ngModel)]="speech.dateCreated" ngbDatepicker #d="ngbDatepicker">
      <button class="input-group-addon" (click)="d.toggle()" type="button">
        <img src="../../../assets/calendar-icon.svg" style="width: 1.2rem; height: 1rem; cursor: pointer;"/>
      </button>
    </div>

  <br>
    <button type="submit" md-raised-button>Submit</button>
  </form>
</div>

<div [hidden]="!submitted">
  <h4>You submitted successfully!</h4>
  <button md-raised-button (click)="newSpeech()">Add</button>
</div>

 </md-card>

  `,
  styles: [``]
})
export class CreateSpeechComponent implements OnInit {

  speech: Speech = new Speech();
  submitted = false;

  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  constructor(private speechService: SpeechService) {}

  ngOnInit() {
  }

  newSpeech(): void {
    this.submitted = false;
    this.speech = new Speech();
  }

  save() {
    this.speechService.createSpeech(this.speech);
    this.speech = new Speech();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
