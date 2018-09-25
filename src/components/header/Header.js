import React from 'react';
import { Avatar } from "../avatar";
import './Header.css';

const Header = (props) => (
  <header className="avatar">
    <span>{props.users.email}</span>
    <Avatar  image={ props.users.imgUrl } click={props.Logout} mode="Header"/>
  </header>
);

export default Header;