import {CardModel, TaskModel} from '../models';

export type CardsState = CardModel[];

const initialState = [
  new CardModel('Todos'),
  new CardModel('In progress'),
  new CardModel('Done'),
  new CardModel('Rejected'),
];

['Use Redux!', 'Learn TypeScript', 'Read Angular docs']
  .forEach(function addTask(title) {
    initialState[0].addTask(new TaskModel(title));
  });

export function cardsReducer(state: CardsState = initialState, action: any): CardsState {
  return state;
}

export const getCardsState = state => state.cards;
