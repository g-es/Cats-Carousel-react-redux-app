

import React, { Component } from 'react';
import { connect } from 'react-redux';

// /**
//  * ************************************
//  *
//  * @module  About
//  * @author
//  * @date
//  * @description simple presentation component that show plain text
//  *
//  * ************************************
//  */


class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="about">
        <p><strong>Airmap Front End App</strong></p>
        <p>built by: <span>g-es</span></p>
      </div>
    )
  }
}


export default About;