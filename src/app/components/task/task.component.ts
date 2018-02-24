import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskModel} from '../../models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: TaskModel;
  @Output() done: EventEmitter<number> = new EventEmitter();
  @Output() up: EventEmitter<number> = new EventEmitter();
  @Output() down: EventEmitter<number> = new EventEmitter();

  moveUp() {
    this.up.emit(this.task.id);
  }

  moveDown() {
    this.down.emit(this.task.id);
  }

  markAsDone() {
    this.done.emit(this.task.id);
  }
}
