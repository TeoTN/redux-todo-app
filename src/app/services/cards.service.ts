import {Injectable} from '@angular/core';
import {CardModel, TaskModel} from '../models';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

const card1 = new CardModel('Todos');
const card2 = new CardModel('In progress');
const card3 = new CardModel('Todos');
card1.addTask(new TaskModel('Use Redux!'));
card1.addTask(new TaskModel('Learn TypeScript'));
card1.addTask(new TaskModel('Read Angular docs'));

@Injectable()
export class CardsService {
  private cards = new BehaviorSubject<CardModel[]>([card1, card2, card3]);
  public cards$ = this.cards.asObservable();

  constructor() {
  }
}
