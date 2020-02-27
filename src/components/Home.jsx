
 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import Carousel from './Carousel.jsx';
 import About from './About.jsx';
 
 /**
  * ************************************
  *
  * @module  Home
  * @author
  * @date
  * @description stateful component that renders About and Carousel
  *
  * ************************************
  */

// const mapStateToProps = (state) => {
//   // const props = {
//   //   totalCards: state.markets.totalCards,
//   //   totalMarkets: state.markets.totalMarkets,
//   // };
//   // // console.log(state, props);
//   // return props;
// };

// const mapDispatchToProps = dispatch => ({
//   // addCard: () => dispatch({ type: types.ADD_CARD }),
// });

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      counter: 0,
      loading: true,
    };
    this.prevFunc = this.prevFunc.bind(this);
    this.nextFunc = this.nextFunc.bind(this);
  }
  componentDidMount() {
    const catsUrl = 'http://api.giphy.com/v1/gifs/search?q=cats&api_key=5ITrfb1ZM4suXJOCJVV5qQYlOeCqGOcX&limit=10';
    const testUrl = 'https://image-server-codesmith.firebaseapp.com/images';

    // fetch("http://api.giphy.com/v1/gifs/search?q=cats&api_key=5ITrfb1ZM4suXJOCJVV5qQYlOeCqGOcX&limit=5")
    //   .then((response)  =>  {
    //     //handle 404?
    //     if(!response.ok) {
    //       throw Error(response.statusText);
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data, 'show me cats')
    //     console.log('Success:', data.data);
    //     this.setState({
    //       gifs: data.data,
    //     })
    //   })
    //   .catch(error => console.log('Error:', error));
    $.get(catsUrl, (urls) => {
      const list = [];
      urls.data.forEach(e => list.push(e.images.original.url));
      this.setState({ gifs: list, loading: false });
    }) 
  }
  prevFunc() {
    let newCounter = this.state.counter;
    if (newCounter > 1) newCounter--;
    else newCounter = this.state.gifs.length - 1;
    this.setState({
      counter: newCounter
    })
  }
  nextFunc() {
    let newCounter = this.state.counter;
    if (newCounter < this.state.gifs.length - 1) newCounter++;
    else newCounter = 0;
    this.setState({
      counter: newCounter
    })
  }
  render() {

    const { gifs, counter, loading } = this.state;
    if (loading) {
      return <p>wait!</p>;
    }
    return (
      <div className="home">
        <About />
        <Carousel imgList={gifs} counter={counter} prevFunc={this.prevFunc} nextFunc={this.nextFunc} />
      </div>
    )
  }
}


export default /*connect(mapStateToProps, mapDispatchToProps)*/(Home);