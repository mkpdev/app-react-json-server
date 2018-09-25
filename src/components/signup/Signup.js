import React from 'react';
import { Link } from 'react-router-dom';

export class Signup extends React.Component {
  constructor(props){
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(e){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const isLoggedIn = true;
    this.props.signup({ email, password, isLoggedIn })
  }

  render(){
    return(
      <div className="form-group">
        <h2>Create Account</h2>
        <input type="email" className="form-control" ref="email" placeholder="Email Address" />
        <br/>
        <input type="password" className="form-control" ref="password" placeholder="Password" />
        <br/>
        <button className="btn btn-info btn-lg" onClick={this.handleSignup}>Create Account</button>
        <br/>
        <h4>Already have an account <Link to='/'>Log In</Link></h4>
      </div>
    );
  }
}