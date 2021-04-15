
export interface ActionType {
  payload: object;
  type: string;
}

type AccessibleTypes = string | number | object | Date;
type StateTypes = AccessibleTypes[] | AccessibleTypes

type State = {
  [k: string]: StateTypes;
};

export type Reducer = (action: ActionType, state: State) => State;

export type Reducers<Type> = {
  [Property in keyof Type]: Reducer;
};
