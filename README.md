# Redux Todo App

Trello-like todo app based on redux, made with Angular, tailored for a workshop.

This repository contains a simple application that was written without usage of Redux.
The trainees task is to gradually rewrite it to use `ngrx` implementation of Redux, learning
step by step how to set up the project and how to benefit from the architecture.

There are consecutive branches named `step1`, `step2` etc. that contain code adjusted during
any given step. For clarity, `README.md` file is updated with new instructions and `changes.patch`
file contains diff after last step.

*For development instructions and environment setup look below* 

## Step 5
In this step you will be implementing remaining features that were present in the
initial application:

1. Create `MoveTaskUp` and `MoveTaskDown` actions
2. Handle those actions in cards reducer
3. Handle `TaskDone` action in tasks reducer
4. Dispatch those actions in Card component
5. Ensure that your tasks selector cares about card tasks' ids order

This step is the last one required to migrate the logic to Redux architecture.

## Development and environment setup

In order to develop the application you need to have [NodeJS](https://nodejs.org/en/download/) 
installed on your machine, preferably latest LTS version.
It is also recommended that you install globally [Angular CLI](https://github.com/angular/angular-cli)
e.g. with `npm i -g @angular/cli`.

In order to run development server issue `ng serve` command and navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.
