import { Action } from '@ngrx/store';
import { TaskModel } from '../models';

export const CREATE_TASK = 'TASKS::CREATE';
export const TASK_DONE = 'TASKS::MARK_AS_DONE';
export const DEFAULT = 'DEFAULT';

export class CreateTask implements Action {
  readonly type = CREATE_TASK;
  constructor(public cardId: number, public payload: TaskModel) {}
}

export class TaskDone implements Action {
  readonly type = TASK_DONE;
  constructor(public id: number) {}
}

export class TestAction implements Action {
  readonly type = DEFAULT;
}

export type TaskAction = CreateTask |
  TaskDone |
  TestAction;
