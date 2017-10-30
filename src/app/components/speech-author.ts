import { Component, Input } from '@angular/core';

import { Speech } from '../models/speech';


@Component({
  selector: 'sc-speech-authors',
  template: `
    <h5 md-subheader>Author:</h5>
    <span>
      {{ speech.author }}
    </span>
  `,
  styles: [`
    h5 {
      margin-bottom: 5px;
    }
  `]
})
export class SpeechAuthorsComponent {
  @Input() speech: Speech;

  get authors() {
    return this.speech.author;
  }
}
