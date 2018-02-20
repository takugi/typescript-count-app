import { Action } from 'redux'

export enum AppActionNames {
  INCREMENT = 'countApp/increment',
  DECREMENT = 'countApp/decrement',
  PLUS = 'countApp/plus',
  MINUS = 'countApp/minus'
}

interface IncrementAction extends Action {
  type: AppActionNames.INCREMENT
}

interface DecrementAction extends Action {
  type: AppActionNames.DECREMENT
}

interface PlusAction extends Action {
  type: AppActionNames.PLUS,
  plusCount: number
}

interface MinusAction extends Action {
  type: AppActionNames.MINUS,
  minusCount: number
}

export const incrementAction = (): IncrementAction => ({
  type: AppActionNames.INCREMENT
})

export const decrementAction = (): DecrementAction => ({
  type: AppActionNames.DECREMENT
})

export const plusAction = (count: number): PlusAction => ({
  type: AppActionNames.PLUS,
  plusCount: count
})

export const minusAction = (count: number): MinusAction => ({
  type: AppActionNames.MINUS,
  minusCount: count
})

export type AppActions =
  | IncrementAction
  | DecrementAction
  | PlusAction
  | MinusAction

export interface AppState {
  count: number
}

const initialState: AppState = {
  count: 0
}

export default function reducer(state: AppState = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionNames.INCREMENT:
      return { ...state, count: state.count + 1 }
    case AppActionNames.DECREMENT:
      return { ...state, count: state.count - 1 }
    case AppActionNames.PLUS:
      return { ...state, count: state.count + action.plusCount }
    case AppActionNames.MINUS:
      return { ...state, count: state.count - action.minusCount   }
    default:
      return state
  }
}
