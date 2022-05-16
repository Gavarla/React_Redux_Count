import React from 'react';
import { connect } from 'react-redux';
const Counter = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Counter:{props.count}</h1>
      <button
        onClick={() => {
          props.dispatch({ type: 'Inc' });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: 'Dec' });
        }}
      >
        Increment
      </button>
    </div> 
  );
};
export default connect((store) => {
  return store;
})(Counter);
