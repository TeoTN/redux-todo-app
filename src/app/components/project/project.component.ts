import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../models';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { CardsState } from '../../store/cards.reducer';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public cards$: Observable<CardModel[]>;

  constructor(private store: Store<CardsState>) {
  }

  ngOnInit() {
    this.cards$ = this.store
      .pipe(
        select('cards'),
      );
  }

}
