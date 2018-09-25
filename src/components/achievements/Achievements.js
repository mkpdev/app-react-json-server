import React from 'react';
import { Avatar }  from '../avatar';

export const Achievements = (props) =>(
  <div>
    <Avatar image={props.users.imgUrl}/>
    <br/>
    <h2>
      Welcome to Achievements Section.
    </h2>
  </div>
);