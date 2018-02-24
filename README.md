# Redux Todo App

Trello-like todo app based on redux, made with Angular, tailored for a workshop.

This repository contains a simple application that was written without usage of Redux.
The trainees task is to gradually rewrite it to use `ngrx` implementation of Redux, learning
step by step how to set up the project and how to benefit from the architecture.

There are consecutive branches named `step1`, `step2` etc. that contain code adjusted during
any given step. For clarity, `README.md` file is updated with new instructions and `changes.patch`
file contains diff after last step.

*For development instructions and environment setup look below* 

## Step 1
The application you are presented, contains a few overly complicated solutions 
and risky parts that could be simplified and redesigned with usage of 
`@ngrx/store`.

We will begin with refactoring logic behind cards. In this step, your objective is 
to wire ngRx store up with the application and provide an initial reducer. 
It will not be used by any component yet.

1. Prepare a directory within your module that will contain store-related files
2. Create a dummy cards reducer that will default to a initial state and won't
   react to any action. The initial state should be based on the cards we're 
   manually providing in `cards.service.ts`.  
3. Import `StoreModule` to your *application module* and ensure it uses your reducer.

## Development and environment setup

In order to develop the application you need to have [NodeJS](https://nodejs.org/en/download/) 
installed on your machine, preferably latest LTS version.
It is also recommended that you install globally [Angular CLI](https://github.com/angular/angular-cli)
e.g. with `npm i -g @angular/cli`.

In order to run development server issue `ng serve` command and navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.
