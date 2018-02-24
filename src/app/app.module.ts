import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { CardComponent } from './components/card/card.component';
import { ProjectComponent } from './components/project/project.component';
import {CardsService} from './services/cards.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


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
  ],
  providers: [
    CardsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
