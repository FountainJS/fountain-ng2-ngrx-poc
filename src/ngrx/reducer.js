import {REQUEST_TECHS, RECEIVE_TECHS} from './actions';

function techs(state = [], action) {
  switch (action.type) {
    case RECEIVE_TECHS:
      return action.techs;
    case REQUEST_TECHS:
    default:
      return state;
  }
}

export default {techs};
