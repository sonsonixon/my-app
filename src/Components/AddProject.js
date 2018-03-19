import React, { Component } from 'react';
import $ from 'jquery';
import toastr from 'toastr';
import swal from 'sweetalert';

class AddProject extends Component {

    constructor(){
      super();

      toastr.options = {
        "closeButton": true,
      }

      this.state = {
        newProject: {}
      }

    }

    handleSubmit(e){
      e.preventDefault();

      if(this.title.value === ''){
        toastr.warning('<span class="lead">Title is required</span>', 'WARNING!');
      }
      else if(this.category.value === '') {
        toastr.warning('<span class="lead">Category is required</span>', 'WARNING!');
      }
      else {

        var title = this.title.value;
        var category = this.category.value;

        $.ajax({
          url: "http://localhost/api/projects/add",
          method: "GET",
          dataType: "json",
          data: {
                  title : title,
                  category : category
                },
          success: function(result) {
            this.setState({newProject: result}, function(){
              this.props.addProject(this.state.newProject);
              swal("Success", "Project has been added", "success", {
                closeOnClickOutside: false,
                buttons: {
                  close: "Stay",
                  proceed: "Proceed",
                },
              })
              .then((value) => {
                switch (value) {

                  case "proceed":
                    window.location.href = '/projects';
                    break;
                  default:
                    //swal("Got away safely!");
                }
              });
            });

          }.bind(this),
          error: function(xhr, status, error) {
            console.log(error);
          }
        });

      }
    }

    render() {
      return (
        <div className="row">
          <div className="col-lg-12">
            <h1 className="my-4">Add Project</h1>
            <p className="lead">Adding Project</p>
            <hr />
            <form onSubmit={this.handleSubmit.bind(this)} className="lead">

              <div className="form-group row">
                <p className="col-sm-1 col-form-label lead">Title:</p>
                <div className="col-sm-11">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter Title..."
                    ref = {(input) => this.title = input }
                  />
                </div>
              </div>

              <div className="form-group row">
                <p className="col-sm-1 col-form-label lead">Category:</p>
                <div className="col-sm-11">
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    placeholder="Enter Category..."
                    ref = {(input) => this.category = input }
                  />
                </div>
              </div>
              <div className="form-group row">
                <p className="col-sm-1 col-form-label lead"></p>
                <div className="col-sm-11">
                  <button type="submit" className="btn btn-primary btn-block"><span className="lead">Submit</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
}

export default AddProject;
