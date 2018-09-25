import React from 'react';
import { Avatar } from '../avatar';

export const Portfolio = (props) =>
  (
    <div>
      <Avatar image={props.users.imgUrl}/>
      <br/>
      <h2>Welcome to Portfolio Section</h2>
    </div>
  );