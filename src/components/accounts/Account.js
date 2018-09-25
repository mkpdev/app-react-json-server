import React from 'react';
import { Avatar } from '../avatar';
import './Account.css';

export class Account extends React.Component {

  constructor(props){
    super(props);
    this.handleAccount = this.handleAccount.bind(this);
  }

  handleAccount(e){
    const firstName = this.refs.fname.value;
    const lastName = this.refs.lname.value;
    const email = this.refs.email.value;
    const imgUrl = this.props.users.imgUrl;
    const password = this.props.users.password;
    const isLoggedIn = this.props.users.isLoggedIn;
    this.props.updateUser({ firstName, lastName, email, imgUrl, password, isLoggedIn });
  }

  render(){
    return(
      <div className="form-group updateUser">
        <h2>Update Account</h2>
        <Avatar image={this.props.users.imgUrl}/>
        <input type="text" className="form-control" ref="fname" placeholder="First Name" />
        <br/>
        <input type="text" className="form-control" ref="lname" placeholder="Last Name" />
        <br/>
        <input type="email" className="form-control" ref="email" placeholder="email" defaultValue={this.props.users.email}/>
        <br/>
        <button className="btn btn-info btn-lg" onClick={this.handleAccount}>Save</button>
      </div>
    );
  }
}