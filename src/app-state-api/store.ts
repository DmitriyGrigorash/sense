import { ActionType } from "./state-api-types";

class Store<R, S> {
  private readonly _store: R | {} = {};
  private _initialState: S | {} = {};

  constructor(reducers: R, initialState: S) {
    this._store = reducers;
    this._initialState = initialState;
  }

  getInitialState (key?: string) {
    if (key) {
      // @ts-ignore
      return this._initialState[key];
    }
    return this._initialState;
  }

  private getStore () {
    return this._store;
  }

  private setInitialState (state: {}) {
    this._initialState = state;
  }

  dispatch(action: ActionType) {

    console.log('### Dispatch', action);

    const res = Object.entries(this.getStore()).reduce(((previousValue: any, currentValue: any) => {
      const key = currentValue[0];
      const act = currentValue[1](action, this.getInitialState(key));

      if (this.getInitialState(key) === act) {
        return {...previousValue};
      }

      return {...previousValue, [key]: act};
    }), this.getInitialState());

    this.setInitialState(res);
  }
}

export default Store;
