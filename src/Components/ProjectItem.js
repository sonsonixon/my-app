import React, { Component } from 'react';

class ProjectItem extends Component {
  constructor(props) {
    super();

    this.state = {
      projectItem: []
    };
  }

  handleBack(){
    this.props.history.goBack();
  }

  componentDidMount(){

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1 className="my-4">
              {this.state.projectItem.title}
              <button type="button" className="btn btn-primary float-right" onClick={this.handleBack.bind(this)}>
                <span className="lead">
                  <i className="fa fa-fw fa-chevron-circle-left"></i>&nbsp;
                  Back
                </span>
              </button>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="lead">{this.state.projectItem.category}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
