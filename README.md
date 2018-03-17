# React_Bootcamp-Week-2

Week 2 Curriculum for React Bootcamp.

## Understanding State

## Determine what should be stateful
- In order for our application to become interactive, we have to be able to modify… be mutable and therefore stateful.
- In order to bestow our app with interactivity, we must evolve it from its static existence to a mutable one. The first step is determining what, exactly, should be mutable.
- Collect all of the data that’s employed by each component in our static app. In our static app, data will be wherever we are defining or using props.
- Determine which of that data should be stateful.
  - Is it passed in from a parent via props? If so, it probably isn’t state.
  - Does it change over time? If not, it probably isn’t state.
    - This is a key criterion of stateful data: it changes
  - Can you compute it based on any other state or props in your component? If so, it’s not state.
    We want to strive to represent state with as few data points as possible.
- State data is represented in static app as props

## Determine the optimal component for each piece of state to live
- For each piece of state
  - Identify every component that renders something based on that state.
  - Find a common owner component (a single component above all the components that need the state in their hierarchy.)
  - Either the common owner or another component higher up in the hierarchy should own the state.
  - If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

## Hard-code initial states
- Define initial states within the components themselves
- Initialize state-owner’s state properties with hard coded values.
- After adding state to a parent component make sure props are properly established in its children.
- Have the data flow from parent to child

## Add inverse data flow
- Data flows from the top down through the component tree to leaf components. Leaf components communicate events to state managers by calling prop functions… Children communicate with parents by calling functions that are handed to them via props.
- Propagate events from child to parent
