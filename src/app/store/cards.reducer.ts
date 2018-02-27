import { CardModel } from '../models';
import { CREATE_TASK, MOVE_TASK_DOWN, MOVE_TASK_UP } from './tasks.actions';

export type CardsState = CardModel[];
const card1 = new CardModel('Todos');
const card2 = new CardModel('In progress');
const card3 = new CardModel('Done');
const card4 = new CardModel('Rejected');
card1.tasks = [0, 1, 2];

const initialState = [
  card1, card2, card3, card4,
];

export function cardsReducer(state: CardsState = initialState, action: any): CardsState {
  console.log('Cards state', state);
  console.log('Action', action);
  switch (action.type) {
    case CREATE_TASK: {
      const card = state.find(el => el.id === action.cardId);
      const updatedCard = Object.assign({}, card, {tasks: [...card.tasks, action.payload.id]});
      return state.map(el => el.id === card.id ? updatedCard : el);
    }
    case MOVE_TASK_UP: {
      const cardIdx = state.findIndex(el => el.id === action.cardId);
      const card = state[cardIdx];
      const taskIdx = card.tasks.findIndex(taskId => taskId === action.taskId);
      if (taskIdx < 1) {
        return state;
      }
      const tasks = [...card.tasks];
      [tasks[taskIdx - 1], tasks[taskIdx]] = [tasks[taskIdx], tasks[taskIdx - 1]]; // Swap tasks
      const updatedCard = Object.assign({}, card, {tasks});
      return state.map(el => el.id === updatedCard.id ? updatedCard : el);
    }
    case MOVE_TASK_DOWN: {
      const cardIdx = state.findIndex(el => el.id === action.cardId);
      const card = state[cardIdx];
      const taskIdx = card.tasks.findIndex(taskId => taskId === action.taskId);
      if (taskIdx >= card.tasks.length - 1) {
        return state;
      }
      const tasks = [...card.tasks];
      [tasks[taskIdx + 1], tasks[taskIdx]] = [tasks[taskIdx], tasks[taskIdx + 1]]; // Swap tasks
      const updatedCard = Object.assign({}, card, {tasks});
      return state.map(el => el.id === updatedCard.id ? updatedCard : el);
    }
    default:
      return state;
  }
}

export const getCardsState = state => state.cards;
