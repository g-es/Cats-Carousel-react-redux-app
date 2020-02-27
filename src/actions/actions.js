// prev and next func?? 
// api call func

import * as types from '../constants/actionTypes';
import axios from 'axios';

export const loadGifs = () => (dispatch) => {

  const catsUrl = 'http://api.giphy.com/v1/gifs/search?q=cats&api_key=5ITrfb1ZM4suXJOCJVV5qQYlOeCqGOcX&limit=10';
  $.get(catsUrl, (urls) => {
    const list = [];
    urls.data.forEach(e => list.push(e.images.original.url));
    // this.setState({ gifs: list, loading: false });
    dispatch({
      type: types.LOAD_GIFS,
      payload: list,
    })
  }) 
}


export const nextFunc = () => {
  return {
    type: types.NEXT_FUNC,
    payload: null,
  }
}

export const prevFunc = () => ({
  type: types.PREV_FUNC,
  payload: null,
})