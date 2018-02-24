import {TaskModel} from './task.model';

let lastID = 0;

export class CardModel {
  public tasks: TaskModel[] = [];
  public id: number;
  constructor(public title: string) {
    this.id = lastID++;
  }

  addTask(task: TaskModel) {
    this.tasks.push(task);
  }
}
