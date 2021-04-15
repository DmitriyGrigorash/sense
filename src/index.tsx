import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { mainReducer as main, mainInitialState } from './app-state-api/main-reducer';
import { userInitialState, userReducer as user } from "./app-state-api/user-reducer";
import Store from "./app-state-api/store";
import { Reducers } from "./app-state-api/state-api-types";


interface InitialState {
  main: typeof mainInitialState
  user: typeof userInitialState
}

export const reducers: Reducers<InitialState> = {
  main,
  user,
};
export const initialState: InitialState = {
  main: mainInitialState,
  user: userInitialState,
}

export const store = new Store<Reducers<InitialState>, InitialState>(reducers, initialState);
export const StoreContext = React.createContext(store);

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App/>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
