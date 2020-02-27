
import React, { Component } from 'react';
import { connect } from 'react-redux';


// /**
//  * ************************************
//  *
//  * @module  Image
//  * @author
//  * @date
//  * @description presentation component that displays image with src
//  *
//  * ************************************
//  */


const Image = (props) => {

  return (
    <div>
      <img src={props.src} />
    </div>
  )
}


export default Image;