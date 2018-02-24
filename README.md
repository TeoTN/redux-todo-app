# Redux Todo App

Trello-like todo app based on redux, made with Angular, tailored for a workshop.

This repository contains a simple application that was written without usage of Redux.
The trainees task is to gradually rewrite it to use `ngrx` implementation of Redux, learning
step by step how to set up the project and how to benefit from the architecture.

There are consecutive branches named `step1`, `step2` etc. that contain code adjusted during
any given step. For clarity, `README.md` file is updated with new instructions and `changes.patch`
file contains diff after last step.

*For development instructions and environment setup look below* 

## Step 2 
The previous step was quite a tedious one but it is actually performed only once per
major feature. We have built our initial cards reducer but we can't really verify 
if it suits our needs without connecting it to the component. In this step, we will
ensure that cards are rendered out of the component.

1. Refactor: Define a type for the cards state shape that will be used by the reducer.
2. Render Cards out of the state: replace Cards Service within Project component
   with the cards store (HINT: Inject `Store<...>`).
3. Within the cards component, expose the list of cards to the template using 
   `select` method. Notice that the method returns an `Observable`.
  

## Development and environment setup

In order to develop the application you need to have [NodeJS](https://nodejs.org/en/download/) 
installed on your machine, preferably latest LTS version.
It is also recommended that you install globally [Angular CLI](https://github.com/angular/angular-cli)
e.g. with `npm i -g @angular/cli`.

In order to run development server issue `ng serve` command and navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.
