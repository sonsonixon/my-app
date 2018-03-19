import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h2 className="my-4">Redux Sample: <strong>Counter</strong></h2>
          <h3>{props.count}</h3>
          <p className="lead">Total Count</p>
          <button className="btn" onClick={props.onIncrementClick}>+</button> <button className="btn" onClick={props.onDecrementClick}>-</button>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      const action = { type: 'INCREMENT'};
      dispatch(action);
    },
    onDecrementClick: () => {
      const action = { type: 'DECREMENT'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
