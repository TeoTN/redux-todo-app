import { tasksReducer } from './tasks.reducer';
import { TaskModel } from '../models';
import { CreateTask, TaskDone } from './tasks.actions';
import * as deepFreeze from 'deepfreeze';

describe('Reducer', function () {
  it('should provide initial state', function () {
    const stateAfter = tasksReducer(undefined, {type: 'DEFAULT'});
    expect(stateAfter.length).toEqual(3);
  });

  it('should append new task', function () {
    const task = new TaskModel('New task');
    const stateBefore = [];
    const action = new CreateTask(task);
    const stateAfter = [task];
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(tasksReducer(stateBefore, action)).toEqual(stateAfter);
  });

  it('should mark task as done', function () {
    const task = new TaskModel('New task');
    const stateBefore = [task];
    const action = new TaskDone(task.id);
    const stateAfter = [Object.assign({}, task, {done: true})];
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(tasksReducer(stateBefore, action)).toEqual(stateAfter);
  });
});
