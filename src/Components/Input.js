import React from 'react';
import { connect } from 'react-redux';

function Input(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2 className="my-4">Redux Sample: <strong>Input</strong></h2>
        <input className="form-control" onChange={props.inputChanged} />
        <br />
        <p className="lead">You typed: {props.inputValue}</p>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    inputValue: state.inputValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputChanged: (e) => {
      console.log('mapDispatchToProps', e.target.value)
      const action = { type: 'INPUT_CHANGE', text: e.target.value};
      dispatch(action);
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
