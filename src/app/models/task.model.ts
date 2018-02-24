let lastID = 0;
export class TaskModel {
  public id: number;
  public done: boolean;
  constructor(public title: string) {
    this.id = lastID++;
    this.done = false;
  }
}
