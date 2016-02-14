import 'reflect-metadata';
import 'zone.js';

import {bootstrap} from 'angular2/bootstrap';
import {provide} from 'angular2/core';

import './index.scss';

import {provideStore} from '@ngrx/store';

import {Main} from './app/main';
import reducer from './ngrx/reducer';
import Actions from './ngrx/actions';

bootstrap(Main, [
  provide(Actions, {useClass: Actions}),
  provideStore(reducer, {techs: []})
]);
