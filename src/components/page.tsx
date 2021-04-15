import React, { FC, ReactElement, useEffect } from "react";
import { connect } from "../app-state-api/connect";

const Page: FC = (props: any): ReactElement => {
  console.log('### Page props', props);
  useEffect(() => {
    props.updateUserAge();
  }, []);

  return (
    <>
      <h3>Page data: </h3>
      <p>Age: {props.age}</p>
      <p>Own props: {props.mapPropsOther}</p>
    </>
  );
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    updateUserAge: () => dispatch({type: 'AGE', payload: 35})
  }
};
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    age: state.user.age,
    mapPropsOther: ownProps.propsOther
  }
};

export default connect(mapStateToProps, mapDispatchToProps, Page);
