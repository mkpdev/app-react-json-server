import React from 'react';
import { Link } from 'react-router-dom';

export class Login extends React.Component {
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const isLoggedIn = true;
    this.props.login({ email, password, isLoggedIn })
  }

  render(){
    return(
      <div className="form-group">
        <h2>Login to your account to continue.</h2>
        <input type="email" className="form-control" ref="email" placeholder="Email Address" />
        <br/>
        <input type="password" className="form-control" ref="password" placeholder="Password" />
        <br/>
        <button className="btn btn-info btn-lg" onClick={this.handleLogin}>Log In</button>
        <br/>
        <h4>Don't have an account <Link to='/signup'>SignUp</Link></h4>
      </div>
    );
  }
}