import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Nav extends Component {
  render() {
    return (
      <div className='navStyle'>
      <ul className='nav-link'>
      <li><Link to="/loginclass">Class Component</Link></li>
      <li><Link to="/loginfunction">Function Component</Link></li>
      
    </ul>

      </div>
    )
  }
}
