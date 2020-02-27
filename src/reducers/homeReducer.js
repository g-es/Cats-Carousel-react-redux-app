/**
 * ************************************
 *
 * @module  homeReducer
 * @author
 * @date
 * @description reducer for gifs data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  gifs: [],
  counter: 0,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_GIFS:
      return {
        ...state, 
        loading: false,
        gifs: action.payload
      }

    case types.NEXT_FUNC: 
      let counter = state.counter;
      if (counter < state.gifs.length - 1) {
        counter++;
      } else {
        counter = 0;
      }
      return {
        ...state,
        counter,
      }

    case types.PREV_FUNC: 
    counter = state.counter;
      if (counter === 0) {
        counter = state.gifs.length - 1;
      } else {
        counter--;
      }
      return {
        ...state,
        counter,
      }
    default:
      return state
  }
}
