import React from 'react';
import { Avatar } from '../avatar';

export const BalanceSheet = (props) =>(
  <div>
    <Avatar image={props.users.imgUrl}/>
    <br/>
    <h2>Welcome to Balance Sheet Section.</h2>
  </div>
);