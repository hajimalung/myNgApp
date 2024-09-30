import { createReducer, on } from "@ngrx/store"
import { initialCounterState } from "./counter.state"
import { decrement, increment, reset } from "./counter.actions"

const _counterReducer = createReducer(initialCounterState,
  on(increment, state=>{
    return {
      ...state,
      count : state.count + 1
    }
  }),
  on(decrement, state=>{
    return {
      ...state,
      count : state.count - 1
    }
  }),
  on(reset,state=>{
    return {
      ...state,
      count : 0
    }
  })
)

export function counterReducer(state : any, action:any){
  return _counterReducer(state, action)
}
