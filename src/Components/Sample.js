import React, { Component } from 'react';
import { connect } from 'react-redux';


class Sample extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h2 className="my-4">Redux Sample: <strong>Projects</strong></h2>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

function mapDispatchToProps(dispatch) {
  return {
    receiveData: () => {
      const action = { type: 'INPUT_CHANGE'};
      dispatch(action);
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
