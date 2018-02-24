import { Action } from '@ngrx/store';
import { TaskModel } from '../models';

export const CREATE_TASK = 'TASKS::CREATE';
export const MOVE_TASK_UP = 'TASKS::MOVE_UP';
export const MOVE_TASK_DOWN = 'TASKS::MOVE_DOWN';
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

export class MoveTaskUp implements Action {
  readonly type = MOVE_TASK_UP;
  constructor(public cardId: number, public taskId: number) {}
}

export class MoveTaskDown implements Action {
  readonly type = MOVE_TASK_DOWN;
  constructor(public cardId: number, public taskId: number) {}
}

export class TestAction implements Action {
  readonly type = DEFAULT;
}

export type TaskAction = CreateTask |
  TaskDone |
  MoveTaskUp |
  MoveTaskDown |
  TestAction;
