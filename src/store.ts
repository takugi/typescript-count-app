import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import countApp, { AppActions, AppState } from './reducer'

const store = createStore(
  combineReducers({
    countApp
  }),
  compose(
    applyMiddleware(logger)
  )
)

export default store;

export interface ReduxState {
  countApp: AppState
}

export type ReduxAction =
  | AppActions

export interface Dispatch {
  (action: ReduxAction): any
}
