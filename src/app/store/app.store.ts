import { counterReducer } from "../counter/state/counter.reducer";

// this is the store defination for the complete app
// key is a selector, value is a reducer for the selector
export const appStore = {
  counter : counterReducer
}
