import { ActionType, Reducer } from "./state-api-types";

const userInitialState = {
  name: 'NO',
  age: 0,
};

const userReducer: Reducer = (action: ActionType, state = userInitialState) => {
  switch (action.type) {
    case 'NAME':
      return {...state, name: action.payload};
    case 'AGE':
      return {...state, age: action.payload};
    default:
      return state;
  }
}

export {
  userReducer,
  userInitialState
};
