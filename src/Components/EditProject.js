import React, { Component } from 'react';
import toastr from 'toastr';

class ProjectList extends Component {
  constructor(){
    super();

    toastr.options = {
      "closeButton": true,
    }

    this.state = {
      projectItem: {}
    }
  }

  componentWillMount = () => {

  }

  componentWillUnmount = () => {

  }

  componentDidMount = () => {

    this.setState({projectItem: this.props.projectItem}, function(){
      console.log(this.state.projectItem)
    })
  }

  handleTitleChange = (event) => {
    const item = this.state.projectItem;
    item.title = event.target.value;

    this.setState({projectItem: item}, function(){
      console.log(this.state)
    });

  }

  handleCategoryChange = (event) => {
    const item = this.state.projectItem;
    item.category = event.target.value;

    this.setState({projectItem: item}, function(){
      console.log(this.state)
    });
  }

  handleUpdate(e){
    e.preventDefault();

    console.log(this.state.projectItem)

    /*const { params } = this.props.match;
    const id = params.id;

    if(this.title.value === ''){
      toastr.warning('<span class="lead">Title is empty</span>', 'WARNING!');
    }
    else if(this.category.value === '') {
      toastr.warning('<span class="lead">Category is empty</span>', 'WARNING!');
    }
    else {


        var data = new FormData($('#form-update')[0]);

            $.ajax({
              url         : "http://localhost/api/projects/update/" + id,
              method      : "POST",
              dataType    : "json",
              data        : data,
              contentType : false,
              cache       : false,
              processData : false,
              success: function(result) {
                if(result.message === 'success'){
                  toastr.success("Update Success", "SUCCESS")
                  window.setTimeout(function() {
                    window.location.href = '/projects';
                  }, 2000);
                }
                else{
                  toastr.error("Unknown Error Occured", "ERROR");
                }
              },
              error: function(xhr, status, error) {
                console.log(error);
              }
            });


      this.setState({
        projectItem:{
          id: parseInt(this.props.match.params.id, 10),
          title: this.title.value,
          category: this.category.value,
          deleted_at: '0000-00-00 00:00:00'
        }
      }, function(){
        this.props.updateProject(this.state.projectItem);
      })
    }*/

  }

  render() {
    return (
        <div className="row">
          <div className="col-lg-12">
            <h1 className="my-4">Update Project</h1>
            <p className="lead">Updating Project</p>
            <hr />
            <form onSubmit={this.handleUpdate.bind(this)} className="lead" id="form-update">

              <div className="form-group row">
                <p className="col-sm-1 lead">Title:</p>
                <div className="col-sm-11">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Title..."
                    value={this.state.projectItem.title  || ''}
                    ref = {(input) => this.title = input }
                    onChange={this.handleTitleChange.bind(this)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <p className="col-sm-1 lead">Category:</p>
                <div className="col-sm-11">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category..."
                    value={this.state.projectItem.category  || ''}
                    ref = {(input) => this.category = input }
                    onChange={this.handleCategoryChange.bind(this)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <p className="col-sm-1 col-form-label lead"></p>
                <div className="col-sm-11">
                  <button type="submit" className="btn btn-primary btn-block"><span className="lead">Save Changes</span></button>
                </div>
              </div>

            </form>

          </div>
        </div>
    );
  }
}

export default ProjectList;
