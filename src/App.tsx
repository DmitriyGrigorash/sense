import React, { useEffect } from "react";
import './App.css';
import { connect } from "./app-state-api/connect";
import Page from "./components/page";

function App(props: any) {
  console.log('### App props: ', props);

  useEffect(() => {
    props.updateCount(30);
    props.updateUserName();
  }, []);

  return (
    <div className="App">
      <main>
        <section>
          <p>Data: {props.data}</p>
          <p>Count: {props.count}</p>
          <p>Name: {props.name}</p>
          <button onClick={props.updateData}>Update main data</button>
        </section>
        <section>
          <Page propsOther='propsOther' />
        </section>
      </main>
    </div>
  );
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    updateData: () => dispatch({type: 'DATA', payload: 'field_updated'}),
    updateCount: (count: number) => dispatch({type: 'COUNT', payload: count}),
    updateUserName: () => dispatch({type: 'NAME', payload: 'New name Dima!!!'})
  }
};

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    data: state.main.data,
    count: state.main.count,
    name: state.user.name,
  }
};

export default connect(mapStateToProps, mapDispatchToProps, App);
