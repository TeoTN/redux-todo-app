let lastID = 0;

export class CardModel {
  public tasks: number[] = [];
  public id: number;
  constructor(public title: string) {
    this.id = lastID++;
  }
}
