import { createAction } from "@ngrx/store";

// createActions takes a unique ID for action
// passing data to action is optional

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
