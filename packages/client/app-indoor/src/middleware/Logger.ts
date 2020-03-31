import { Store, Middleware, MiddlewareAPI, Dispatch } from 'redux'
import { store } from "../store";
import { Actions } from '@share/action';

export const createLoggerMiddleware = (store: Store) => (next: (action: Actions) => Actions) => (action: Actions) => {
  if (action.meta && (<any>action.meta).remote) {
    console.log("sending", action);
    return next(action);
  }
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
}

// export const createLoggerMiddleware = (store: Store) => (next: (action: Actions) => Actions) => (action: Actions) => {
//   console.log('dispatching', action)
//   let result = next(action)
//   console.log('next state', store.getState())
//   return result
// }