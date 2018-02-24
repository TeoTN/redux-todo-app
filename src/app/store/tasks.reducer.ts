import { TaskModel } from '../models';
import { CREATE_TASK, TASK_DONE, TaskAction } from './tasks.actions';
import { createSelector } from '@ngrx/store';

export type TasksState = TaskModel[];

const initialState = [
  new TaskModel('Use Redux!'),
  new TaskModel('Learn TypeScript'),
  new TaskModel('Read Angular docs'),
];

export function tasksReducer(state: TasksState = initialState, action: TaskAction): TasksState {
  console.log('Tasks state: ', state);
  console.log('Action: ', action);
  switch (action.type) {
    case CREATE_TASK:
      return [
        ...state,
        action.payload,
      ];
    case TASK_DONE:
      const taskIdx = state.findIndex(el => el.id === action.id);
      const task = state[taskIdx];
      const newTask = Object.assign({}, state[taskIdx], {done: !task.done});
      return state.map((el, idx) => idx === taskIdx ? newTask : el);
    default:
      return state;
  }
}

export const getTasksState = state => state.tasks;
export function tasksForCard(card) {
  return createSelector(getTasksState, tasks => tasks.filter(task => card.tasks.includes(task.id)));
}