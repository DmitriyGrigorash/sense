import { ActionType, Reducer } from "./state-api-types";

const mainInitialState = {
  data: 'empty',
  count: 0,
};

const mainReducer: Reducer = (action: ActionType, state = mainInitialState ) => {
  switch (action.type) {
    case 'DATA':
      return {...state, data: action.payload};
    case 'COUNT':
      return {...state, count: action.payload};
    default:
      return state;
  }
}

export {
  mainReducer,
  mainInitialState
};
