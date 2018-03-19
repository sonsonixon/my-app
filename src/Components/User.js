import React, { Component } from 'react';

class User extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-8">

          <h1 className="my-4">Page Heading
            <small> Secondary Text</small>
          </h1>

          <div className="card mb-4">
            <img className="card-img-top" src="http://placehold.it/750x300" alt="Card cap" />
            <div className="card-body">
              <h2 className="card-title">Post Title</h2>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
              <button className="btn btn-primary">Read More &rarr;</button>
            </div>
            <div className="card-footer text-muted">
              Posted on January 1, 2017 by
              <a href="/"> Start Bootstrap</a>
            </div>
          </div>

          <ul className="pagination justify-content-center mb-4">
            <li className="page-item">
              <a className="page-link" href="/">&larr; Older</a>
            </li>
            <li className="page-item disabled">
              <a className="page-link" href="/">Newer &rarr;</a>
            </li>
          </ul>

        </div>

        <div className="col-md-4">

          <div className="card my-4">
            <h5 className="card-header">Search</h5>
            <div className="card-body">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">Go!</button>
                </span>
              </div>
            </div>
          </div>

          <div className="card my-4">
            <h5 className="card-header">Categories</h5>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="/">Web Design</a>
                    </li>
                    <li>
                      <a href="/">HTML</a>
                    </li>
                    <li>
                      <a href="/">Freebies</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="/">JavaScript</a>
                    </li>
                    <li>
                      <a href="/">CSS</a>
                    </li>
                    <li>
                      <a href="/">Tutorials</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card my-4">
            <h5 className="card-header">Side Widget</h5>
            <div className="card-body">
              You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default User;
