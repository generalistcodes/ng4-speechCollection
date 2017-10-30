import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { Speech } from '../models/speech';

@Injectable()
export class SpeechService {

  private dbPath: string = '/speeches';

  speech: FirebaseObjectObservable<Speech> = null;
  speeches: FirebaseListObservable<Speech[]> = null;

  constructor(private db: AngularFireDatabase) {}

  getSpeech(key: string): FirebaseObjectObservable<Speech> {
    this.speech = this.db.object(`${this.dbPath}/${key}`);
    return this.speech;
  }

  createSpeech(speech: Speech): void {
    this.speeches.push(speech).catch(error => this.handleError(error));
  }

  updateSpeech(key: string, value: any): void {
    this.speeches.update(key, value).catch(error => this.handleError(error));
  }

  deleteSpeech(key: string): void {
    this.speeches.remove(key).catch(error => this.handleError(error));
  }

  getSpeechesList(query = {}): FirebaseListObservable<Speech[]> {
    this.speeches = this.db.list(this.dbPath, {
      query: query
    });
    return this.speeches;
  }

  getSpeeches(numberItems, startKey?): FirebaseListObservable<Speech[]> {
    this.speeches = this.db.list(this.dbPath, {
      query: {
        orderByKey: true,
        startAt: startKey,
        limitToFirst: numberItems + 1
      }
    });

    return this.speeches;
  }

  findSpeeches(start, end): FirebaseListObservable<Speech[]> {
    return this.db.list(this.dbPath, {
      query: {
        orderByChild: 'author',
        limitToFirst: 12,
        startAt: start,
        endAt: end
      }
    });
  }

  deleteAll(): void {
    this.speeches.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
