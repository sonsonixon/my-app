import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import swal from 'sweetalert';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      projectItem: []
    };

  }

  componentDidMount = () => {
    this.setState({projects: this.props.projects})
  }

  onUpdate = (id) => {
    this.setState({
      projectItem: this.state.projects.find(p => p.id === id)
    }, function(){
      this.props.editProject(this.state.projectItem);
      this.props.history.push('projects/update/'+id)
    })﻿
  }

  onDelete = (id) => {
    swal({
      closeOnClickOutside: false,
      text: "Are you sure you want to delete this project?",
      icon: "warning",
      buttons: ["Cancel", "Yes, Delete"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.setState({id: id})
        this.props.deleteProject(this.state.id);
        swal("Project has been deleted", {
          icon: "success",
          button: "Got it"
        });
      }
    });
  }

  render() {

    return (
      <div className="row">
        <div className="col-md-12">

          <h1 className="my-4">
            Project List
            <Link to="/projects/add" className="btn btn-primary float-right"><span className="lead"><i className="fa fa-fw fa-plus-circle"></i> Add Project</span></Link>
          </h1>
          <p className="lead">Fetching data from the API and insert to HTML table</p>
          <ReactTable
            style={{fontSize: '1.25rem', fontWeight: '300'}}
            data={this.state.projects}
            columns={[
              {
                Header: "Title",
                accessor: "title"
              },
              {
                Header: "Category",
                accessor: "category"
              },
              {
                Header: 'Action',
                id: 'id',
                accessor: d => (
                  <div className="text-center">
                    <Link className="btn btn-success" to={"/projects/list/" + d.id} ><i className="fa fa-fw fa-eye"></i></Link>
                    &nbsp;&nbsp;
                    <button className="btn btn-info"   onClick={this.onUpdate.bind(this, d.id)}><i className="fa fa-fw fa-pencil"></i></button>
                    &nbsp;&nbsp;
                    <button onClick={this.onDelete.bind(this, d.id)} className="btn btn-danger"><i className="fa fa-fw fa-trash"></i></button>
                  </div>
                )
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      </div>
    );
  }
}

export default Projects;
