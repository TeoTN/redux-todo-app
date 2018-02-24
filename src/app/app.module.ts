import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { CardComponent } from './components/card/card.component';
import { ProjectComponent } from './components/project/project.component';
import { CardsService } from './services/cards.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cardsReducer } from './store/cards.reducer';
import { tasksReducer } from './store/tasks.reducer';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CardComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      cards: cardsReducer,
      tasks: tasksReducer,
    })
  ],
  providers: [
    CardsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
