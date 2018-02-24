import {Component, Input, OnInit} from '@angular/core';
import {CardModel, TaskModel} from '../../models';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public card: CardModel;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: '',
    });
  }

  onSubmit() {
    const {value} = this.form;
    this.card.addTask(new TaskModel(value.title));
    this.form.reset();
  }

  moveTaskUp(id: number) {
    const {tasks} = this.card;
    const idx = tasks.findIndex(card => card.id === id);
    if (idx < 1) {
      return;
    }
    [tasks[idx - 1], tasks[idx]] = [tasks[idx], tasks[idx - 1]]; // Swap tasks
  }

  moveTaskDown(id: number) {
    const {tasks} = this.card;
    const idx = tasks.findIndex(card => card.id === id);
    if (idx >= tasks.length - 1) {
      return;
    }
    [tasks[idx + 1], tasks[idx]] = [tasks[idx], tasks[idx + 1]]; // Swap tasks
  }

  markTaskDone(id: number) {
    const {tasks} = this.card;
    const idx = tasks.findIndex(card => card.id === id);
    tasks[idx].done = !tasks[idx].done;
  }
}
