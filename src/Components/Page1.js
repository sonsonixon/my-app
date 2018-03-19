import React, { Component } from 'react';

class Page extends Component {
    render() {
        return (
          <div className="row">
            <div className="col-lg-12">
              <p className="my-4 lead">{this.props.match.params.name}</p>
            </div>
          </div>
        );
    }
}

export default Page;
