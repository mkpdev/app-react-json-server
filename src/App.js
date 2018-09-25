import React, { Component } from 'react';
import { Router } from 'react-router-dom';

import { Header } from './components/header';
import { Sidenav } from './Sidenav';
import { Routes } from './routes'; 
import history from './history';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    if(this.state.authenticated){
      const id = window.localStorage.getItem("id");
      this.props.getUser({ id });
      this.props.getUserList();
    }
  }

  handleLogout(){
    window.localStorage.clear();
    this.setState({
      authenticated: ""
    });
  }

  render() {

    this.state ={
      authenticated: window.localStorage.getItem('LoggedIn') 
    }

    return (
      <Router history={ history }>
        <div className="container App">
          { this.state.authenticated ?
            <div>
              <Header users={this.props.users} Logout={this.handleLogout}/><hr/><Sidenav />
            </div> : ""}
          <Routes authenticated={ this.state.authenticated } />
        </div>
      </Router>
    );
  }
}

export default App;
