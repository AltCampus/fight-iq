import { combineReducers } from 'redux';

import user from './user';
import event from './event';
import fight from './fight';
import player from './player';
import prediction from './prediction';
import result from './result';
import style from './style';

export default combineReducers({
  user,
  event,
  fight,
  player,
  prediction,
  result,
  style
});