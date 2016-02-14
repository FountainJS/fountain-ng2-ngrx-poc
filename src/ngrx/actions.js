import {Injectable} from 'angular2/core';
import {Store} from '@ngrx/store';

export const REQUEST_TECHS = 'REQUEST_TECHS'
function requestTechs() {
  return {
    type: REQUEST_TECHS
  }
}

export const RECEIVE_TECHS = 'RECEIVE_TECHS'
function receiveTechs(json) {
  return {
    type: RECEIVE_TECHS,
    techs: json,
    receivedAt: Date.now()
  }
}

@Injectable()
export default class Actions {
  constructor(store: Store) {
    Object.assign(this, {store});
  }

  fetchTechs() {
    this.store.dispatch(requestTechs());
    return fetch('app/techs/techs.json')
      .then(response => response.json())
      .then(json => this.store.dispatch(receiveTechs(json)));
  }
}
