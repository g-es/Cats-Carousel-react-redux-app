import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Carousel from '../src/components/Carousel.jsx';
import About from '../src/components/About.jsx';
import Image from '../src/components/Image.jsx';


configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('Image', () => {
    let wrapper;
    const props = {
      src: "https://drive.google.com/uc?id=0Bzgk4zncCwI7aDZCSHY4YU0zNUF&export=download",
    }
    beforeAll(() => {
      wrapper = shallow(<Image {...props} />);
    });

    it('renders a div with a img tag inside', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find('img').length).toBe(1);
      // console.log(wrapper.debug(), wrapper.find('img').length)
    })
  })

  describe('About', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<About />);
    });
    it('renders a div with a class of `about`', () => {
      // console.log(wrapper.debug(), 'this is about');
      expect(wrapper.hasClass('about')).toBeTruthy();
    });
    it('renders 2 p tag with title in bold', () => {
      expect(wrapper.find('p').length).toBe(2);
      expect(wrapper.find('strong').text()).toMatch('Airmap Front End App');
    });
  })

  describe('Carousel', () => {
    let wrapper;
    const props = {
      imgList: ['https://media0.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif', 'https://media1.giphy.com/media/ICOgUNjpvO0PC/giphy.gif', 'https://media0.giphy.com/media/mlvseq9yvZhba/giphy.gif', 'https://media0.giphy.com/media/Nm8ZPAGOwZUQM/giphy.gif'],
      counter: 3,
      prevFunc: jest.fn(),
      nextFunc: jest.fn(),
    };
    beforeAll(() => {
      wrapper = shallow(<Carousel {...props} />)
    });
    xit('contains a div with 2 buttons, the div has a class of xxx', () => {

    });
    it('the functions should be invoked on click', () => {
      wrapper.find('button').first().simulate('click');
      expect(props.prevFunc).toHaveBeenCalled();
      expect(props.prevFunc).toHaveBeenCalledTimes(1);
      wrapper.find('button').at(1).simulate('click');
      expect(props.nextFunc).toHaveBeenCalledTimes(1);
      // console.log(wrapper.debug(), 'this is carousel');
    });
    it('a single Image in the imgList is rendered', () => {
      //'a single Image is rendered for each img in the imgList prop'
      // expect(wrapper.find(Image).length).toEqual(props.imgList.length);
      expect(wrapper.find(Image).length).toEqual(1);
      expect(wrapper.find(Image).props().src).toBe(props.imgList[props.counter]);
      // console.log(wrapper.debug())
      // console.log(wrapper.find(Image).at(0));// dont need at(0) when only 1??
    })
    // it('should have an h4 element to display the title...')
  })

  // describe('Home', () => {

  // })
})