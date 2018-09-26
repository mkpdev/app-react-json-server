import React from 'react';
import { Avatar } from '../avatar';
import './Contacts.css';

export class Contacts extends React.Component {

  constructor(props){
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.props.getUserList();
  }

  handleFilter(){
    const value = this.refs.filter.value;
    if(value){
      this.props.filterUser({ value });
    }
    else{
      this.props.getUserList();
    }
  }

  render(){
    return(
      <div className="filter">
        <Avatar image={this.props.users.imgUrl}/>
        <br/>
        <h2>Welcome to Contacts Section</h2>
        <input type="text" ref="filter" onChange={this.handleFilter} placeholder="Enter here to filter"/>
        {
          this.props.userList.map((value, index) => (
          <div className="well" key={index}>
            <span>{value.email}</span>
            <Avatar image={value.imgUrl} mode="Header"/>
          </div>))
        }
      </div>
    );
  }
}