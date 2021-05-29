import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { appReducer } from './reducers/appReducer';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const reducers = combineReducers({
    appState: appReducer
  });

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const store = createStore(
  reducers, composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof reducers>