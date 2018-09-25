import React from 'react';
import { Link } from 'react-router-dom';
import './avatar.css';

export class Avatar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showDropdown: false
    }
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown(){
    this.setState({
      showDropdown: !this.state.showDropdown,
    });
  }

  render(){
    return(
      <span>
        {
          this.props.mode === "Header" ?
          <img src={this.props.image} className="img-circle" onClick={this.handleDropdown} alt="Image Url" width="40" height="40"/>
          :<img src={this.props.image} className="img-circle" alt="Image Url" width="100" height="100"/>
        }
        {
          this.state.showDropdown ?
            <ul className="list-group dropdown">
              <li className="list-group-item"><Link to='/account'>Account</Link></li>
              <li className="list-group-item">Security</li>
              <li className="list-group-item" onClick={this.props.click}><a href="#">Log Out</a></li>
            </ul>
            : ""
        }
      </span>
    );
  }
}