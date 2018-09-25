import React from 'react';
import { Link } from 'react-router-dom';

export const Sidenav = (props) => (
  <div className="list-board list-group">
    <div className="logo"><h2>LOGO</h2></div>
    <ul>
      <li><Link to='/index'>Dashboard</Link></li>
      <li><Link to='/portfolio'>Portfolio</Link></li>
      <li><Link to='/contacts'>Contacts</Link></li>
      <li><Link to='/achievements'>Achievements</Link></li>
      <hr/>
      <li>Quick Links</li>
      <li><Link to='/help'>Help Center</Link></li>
      <li><Link to='/balance-sheet'>Balance Sheet</Link></li>
      <li><Link to='/transactions'>Tnx History</Link></li>
      <hr/>
      <li className="btn btn-success"><Link to='/buy'>Buy</Link></li>
      <br/>
      <li className="btn btn-info"><Link to='/sell'>Sell</Link></li>
      <br/>
      <li className="btn btn-default"><Link to='/transfer'>Transfer</Link></li>
    </ul>
  </div>
);