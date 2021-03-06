import React, { ReactElement, useContext } from "react";

import { StoreContext } from "../index";
import { ActionType } from "./state-api-types";


const connect = (
  mapStateToProps: null | ((state: object, stateOwnProps: object) => {}),
  mapDispatchToProps: null | ((dispatch: (action: ActionType) => void, dispatchOwnProps?: object
  ) => {}), Component: React.ComponentType) => {

  return function (props: any): ReactElement {
    const [, setReload] = React.useState<number>(0);
    const store = useContext(StoreContext)
    const s = store.getInitialState();
    const d = store.dispatch.bind(store);

    const dispatch = (action: any) => {
      d(action);
      setReload((prevState => prevState + 1));
    };

    const mdp = mapDispatchToProps ? mapDispatchToProps(dispatch, s) : {};
    const msp = mapStateToProps ? mapStateToProps(s, props) : s;

    const state = {...mdp, ...msp};

    return (
      <Component {...state} />
    )
  }
};


export { connect };
