import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './Store/';
import Main from './Main';
import Header from './Common/Header';
import Projects from './Components/Projects';
import ProjectItem from './Components/ProjectItem';
import AddProject from './Components/AddProject';
import EditProject from './Components/EditProject';
import Home from './Components/Home';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Counter from './Components/Counter';
import Input from './Components/Input';

class Routes extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: [],
      projectItem: []
    }

  }

  sortByKey(array, key) {
    return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  getData(){
    fetch('http://localhost:8080/api/projects/get')
      .then(response => response.json())
      .then(json => {
        this.setState({projects: json}, function(){
          console.log(this.state.projects)
        });
      })
      .catch(function(err) {
        console.log('parsing failed', err)
      })
  }

  componentWillMount(){
    this.getData();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
  }

  handleupdateProject(projectItem){
    this.setState({projectItem: projectItem})﻿
  }

  handleDeleteProject(id){
    this.setState({
      projects: this.state.projects.filter(p => p.id !== id)
    })
  }

  /*handleupdateProject(project){
    this.setState({
      projects:this.state.projects.filter(p => p.id !== project.id)
    }, function(){
      this.state.projects.push(project);
      this.sortByKey(this.state.projects, 'id');
    })﻿
  }*/

  render() {

    const addProject = (props) => (
      <AddProject
        {...props}
        addProject={this.handleAddProject.bind(this)}
      />
    );

    const editProject = (props) => (
      <EditProject
        {...props}
        projectItem={this.state.projectItem}
      />
    );

    const project = (props) => (
      <Projects
        {...props}
        updateProject={this.handleupdateProject.bind(this)}
        projects={this.state.projects}
        deleteProject={this.handleDeleteProject.bind(this)}
      />
    );

    const counter = (props) => (
      <Counter
        {...props}
      />
    );

    const input = (props) => (
      <Input
        {...props}
      />
    );

    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Provider store={store}>
              <Main>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={project} />
                <Route exact path="/projects/list/:id" component={ProjectItem} />
                <Route exact path="/projects/add" component={addProject} />
                <Route exact path="/projects/update" component={editProject} />
                <Route path="/page1/:name" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/redux/counter" component={counter} />
                <Route path="/redux/input" component={input} />
              </Main>
            </Provider>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
