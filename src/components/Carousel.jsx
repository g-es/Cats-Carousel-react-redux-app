
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Img from './Image.jsx';
/**
 * ************************************
 *
 * @module  Carousel
 * @author
 * @date
 * @description presentation component that renders Image components
 *
 * ************************************
 */

const Carousel = (props) => {
  console.log(props, 'prp in carousel')
  const imageList = [];
  const { imgList, counter, prevFunc, nextFunc } = props;
  // for (let i = 0; i < props.imgList.length; i++) {
  //   imageList.push(<Img key={i.id} src={i.url} title={i.title} />)
  // }
    imgList.forEach((i) => {
      imageList.push(<Img src={i} />)}) 
  
  return (
    <div className="carousel">
      <button onClick={prevFunc}>prev</button>
      <button onClick={nextFunc}>next</button>
      {imageList[counter]}
    </div>
  )
}


export default Carousel;