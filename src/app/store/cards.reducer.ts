import {CardModel, TaskModel} from '../models';

const initialState = [
  new CardModel('Todos'),
  new CardModel('In progress'),
  new CardModel('Todos'),
];

['Use Redux!', 'Learn TypeScript', 'Read Angular docs']
  .forEach(function addTask(title) {
    initialState[0].addTask(new TaskModel(title));
  });

export function cardsReducer(state: any = initialState, action: any) {
  return state;
}
