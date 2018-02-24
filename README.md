# Redux Todo App

Trello-like todo app based on redux, made with Angular, tailored for a workshop.

This repository contains a simple application that was written without usage of Redux.
The trainees task is to gradually rewrite it to use `ngrx` implementation of Redux, learning
step by step how to set up the project and how to benefit from the architecture.

There are consecutive branches named `step1`, `step2` etc. that contain code adjusted during
any given step. For clarity, `README.md` file is updated with new instructions and `changes.patch`
file contains diff after last step.

*For development instructions and environment setup look below* 

## Step 4
The goal of this step is to ensure that cards 
do not *own* tasks, but merely keep a list of tasks' ids they refer to. Moreover,
we will provide means of selecting tasks for given card and ensure that tasks are 
now rendered out of the actual state.

1. Refactor `CardModel` so that it keeps track of tasks ids instead of owning them.
   (It will no longer handle adding a task.)
   
2. Handle `CreateTask` action in cards reducer.

3. Create a selector that for given card will return its tasks.
   HINT: This actually may require you to make a function that takes a card
   and returns actual selector.

4. Connect Card component to the Store:
   * Temporarily comment out bodies of `moveTaskUp`, `moveTaskDown` and `markTaskDone`
     methods within Card component - their logic will be soon moved to reducer
   * Create `tasks$` observable within Card component. Initialize it in `ngOnInit`
     with `store.select(yourSelector(this.card))`.
   * Ensure that Card template renders tasks from `tasks$` - utilise `| async`.
   * At this point you no longer need `cards.service` - remove it.

## Development and environment setup

In order to develop the application you need to have [NodeJS](https://nodejs.org/en/download/) 
installed on your machine, preferably latest LTS version.
It is also recommended that you install globally [Angular CLI](https://github.com/angular/angular-cli)
e.g. with `npm i -g @angular/cli`.

In order to run development server issue `ng serve` command and navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.
