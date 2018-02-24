# Redux Todo App

Trello-like todo app based on redux, made with Angular, tailored for a workshop.

This repository contains a simple application that was written without usage of Redux.
The trainees task is to gradually rewrite it to use `ngrx` implementation of Redux, learning
step by step how to set up the project and how to benefit from the architecture.

There are consecutive branches named `step1`, `step2` etc. that contain code adjusted during
any given step. For clarity, `README.md` file is updated with new instructions and `changes.patch`
file contains diff after last step.

*For development instructions and environment setup look below* 

## Step 3
Observe that until now tasks were tightly coupled with cards: for instance,
rearranging tasks requires mutating the cards state. In this step, your goal is to
start separating tasks from cards.

1. Prepare and wire up a `tasks` reducer that will default to all tasks 
   that appear in the project.
   
2. Create `tasks.action.ts` file in which you will define two actions: 
   one for creation of task and one for marking task as done. There are a few 
   good practices that you should incorporate:
   * An action should be a class implementing `@ngrx/store/Action` interface,
   * Action type should be marked as `readonly` and be defined as separate variable
     or enum value to avoid typo issues,
   * Action should accept payload,
   * There should be defined a general `TaskAction` type.
   
3. Handle those actions in the reducer. Remember about `TasksState` and 
   `TaskAction` types.

4. Dispatch an action whenever a new task is created. 

## Development and environment setup

In order to develop the application you need to have [NodeJS](https://nodejs.org/en/download/) 
installed on your machine, preferably latest LTS version.
It is also recommended that you install globally [Angular CLI](https://github.com/angular/angular-cli)
e.g. with `npm i -g @angular/cli`.

In order to run development server issue `ng serve` command and navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.
