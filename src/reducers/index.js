/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux'
import homeReducer from './homeReducer'

export default combineReducers({
  home: homeReducer
})
