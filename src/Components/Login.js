import React, { Component } from 'react';

class Login extends Component {

    constructor(){
      super();

    }

    render() {
        return (
          <div className="row">
            <div className="col-md-12">
              <h4 className="my-4 text-center">Welcome to</h4>
              <h2 className="my-4 text-center">React Project</h2>
              <div className="col-lg-8 offset-md-2">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="form-group row">
                        <label className="col-sm-2">Username: </label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" placeholder="Username..." />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2">Password: </label>
                        <div className="col-sm-10">
                          <input type="password" className="form-control" id="inputPassword" placeholder="Password..." />
                        </div>
                      </div>
                      <hr />
                      <button type="button" className="btn btn-primary">Login</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Login;
