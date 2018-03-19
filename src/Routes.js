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
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  sortByKey(array, key) {
    return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  getData(){
    fetch('http://localhost/api/projects/get')
      .then(response => response.json())
      .then(json => {
        this.setState({projects: json});
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

  handleupdateProject(project){
    this.setState({
      projects:this.state.projects.filter(p => p.id !== project.id)
    }, function(){
      this.state.projects.push(project);
      this.sortByKey(this.state.projects, 'id');
      console.log(this.state);
    })﻿
  }

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
        updateProject={this.handleupdateProject.bind(this)}
      />
    );

    const project = (props) => (
      <Projects
        {...props}
        projects={this.state.projects}
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
                <Route exact path="/projects/update/:id" component={editProject} />
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
