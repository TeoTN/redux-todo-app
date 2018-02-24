import {Component, Input, OnInit} from '@angular/core';
import {CardModel, TaskModel} from '../../models';
import {FormBuilder, FormGroup} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { tasksForCard, TasksState } from '../../store/tasks.reducer';
import { CreateTask, MoveTaskDown, MoveTaskUp, TaskDone } from '../../store/tasks.actions';
import { Observable } from 'rxjs/Observable';
import { CardsState } from '../../store/cards.reducer';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public card: CardModel;
  public form: FormGroup;
  public tasks$: Observable<TaskModel[]>;

  constructor(
    private fb: FormBuilder,
    private store: Store<{tasks: TasksState, cards: CardsState}>
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: '',
    });
    const tasksSelector = tasksForCard(this.card);
    this.tasks$ = this.store.pipe(
      select(tasksSelector),
      tap(state => {console.log('new tasks', state)}),
    );
  }

  onSubmit() {
    const {value} = this.form;
    const task = new TaskModel(value.title);
    this.store.dispatch(new CreateTask(this.card.id, task));
    this.form.reset();
  }

  moveTaskUp(id: number) {
    this.store.dispatch(new MoveTaskUp(this.card.id, id));
  }

  moveTaskDown(id: number) {
    this.store.dispatch(new MoveTaskDown(this.card.id, id));
  }

  markTaskDone(id: number) {
    this.store.dispatch(new TaskDone(id));
  }
}
