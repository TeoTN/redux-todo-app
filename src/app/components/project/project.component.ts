import {Component, OnInit} from '@angular/core';
import {CardsService} from '../../services/cards.service';
import {CardModel} from '../../models';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public cards$: Observable<CardModel[]>;

  constructor(private cardsSvc: CardsService) {
    this.cards$ = cardsSvc.cards$;
  }

  ngOnInit() {
  }

}
