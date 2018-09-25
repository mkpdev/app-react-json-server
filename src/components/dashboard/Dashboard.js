import React from 'react';
import { Avatar } from '../avatar';
import './Dashboard.css';

export const Dashboard = (props) =>(
  <div className="listUser">
    <h2>Welcome to Dashboard Section</h2>
    {
      props.userList.map( value => (
        <div className="well">
          <span>{value.email}</span>
          <Avatar image={value.imgUrl} mode="Header"/>
        </div>))
    }
  </div>
);