# List Maker Curruculum

## General Idea
Build a bunch of JS apps to get good at JS and all things web (since JS is at the heart of all things web). The idea is that this progression starts with raw (vanilla) JS and adds layers of abstractions, frameworks and libraries. The idea is to learn in concrete terms how these different elements combine and how each element solves a problem you had in the step before.
For example the first unit is strictly vanilla JS, which illustrates JS's native ability to build and manipulate DOM elements. But the app has no back end and no frameworks so data persistence and state management are challenges. Subsequent units introduce persisting data to files and data bases and API's as well as state management tools such as Redux and React hooks.

## Core Concepts
- Learning needs to be _incremental_. This progression seeks to introduce concepts and methods in such a way that they make sense at each stage in the development of our apps.
- Coding is a muscle and needs to be _practiced_. Each unit is meant to be drilled as an exercise untill you are able to build similar functionality on your own. This doesn't mean you need to memorize lines of code, but remembering _patterns_ is important. In programming, just as in math, _doing comes before understanding_. This means that code that initially makes no sense will start to make sense after spending some time tapping your keyboard and trying to solve the same problem as the module does.
- In these modules I try to _stay close to the native abilities of JavaScript_. The goal is not simply to build things but to build a deep mastery of JavaScript, and to do this, we explore the limits of what can be done with JS ( rewrite?)

## Styling
I think manytutorials throw too much at you at once, and the idea here is to break things down to a granular level and really learn the individual pieces. Styling is an example. None of these tutorials will be styled except for basic positioning and responsivness. In other words styling, design, UX and accessability are de-emphasized, and addressed in a late module.

### Takeaway: Don't spend a lot of time styling these exercises.

## Units
Each unit is intended as a tutorial and includes

- a motivation for the key concepts and methods introduced (what and why)
- a live (hosted) demo (or sandbox)
- a video component (youtube?)
- (maybe) a text component explaining the steps taken in the unit
- (extension) an assesment of some sort
  - quizz?
  - anki cards?
  - async group review through chat?
  - async code review with a mentor?
  - real time code review with a mentor?
  - a platform where people who complete a tutorial can then have it reviewed by a community (redundant?)

At each stage the progression introduces a new concept or technology.

The series is enclosed in a web page that can have an authentication layer (or not). The idea has revenue potential, either through tutorial purchases or subscriptions.
There is also news letter or blogging potential.

## Prerequisites
Before starting a tutorial a user will need familiarity with the following (we can recommend resources)

- html
- IDE
- git
- basics of CSS
  Note on styling: all apps in this series are **positioned**, and **responsive**, but **unstyled**.
- single page
- each sequence is hosted

## Unit Catalog
- 01 FOUNDATION: Full CRUD apps built with vanilla JS, vanilla CSS through a single, unstyled, responsive, html file
- 01-00 Setup 
- 01-01 Gather input and render list
- 01-02 Add data structure and delete functionality
- 01-03 Add edit functionality
- 01-04 Add strike through functionality.
- 01-05 Add persistence through session storage
- 01-06 Add persistence through local storage

- 02 QUERYING API's: Full CRUD apps built with vanilla JS.
  - fetch API
  - Axios

- 03 NODE: Full CRUD apps built with node JS.
  - persist data to a file
  - query an API
  - persist data to a database
    - SQL
    - no SQL
  - build an api

- 04 REACT: Full CRUD apps built with React, a mix of create-react-app and create-next-app, and a variety of state managment
  frameworks including redux react hooks for state management. - query API - fetch - axios - react query - database - mongo - sql

- 05 EXPRESS
- 06 TYPESCRIPT
- 07 AUTH
- 08 MOBILE
- 09 ACCESSABILITY
- 10 PERFORMANCE MEASURES
- 11 FIREBASE
- 12 DESIGN UI/UX
