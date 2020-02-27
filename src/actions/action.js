// prev and next func?? 
// api call func

import * as types from '../constants/actionTypes';

export const getGifs = url => ({
  type: types.GET_GIFS,
  payload: url,
})

export const nextFunc = (id) => ({
  type: types.NEXT_FUNC,
  payload: id,
})

export const prevFunc = (id) => ({
  type: types.PREV_FUNC,
  payload: id,
})