import 'reflect-metadata';
import 'zone.js';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';

import './index.scss';

import {provideStore} from '@ngrx/store';

import {Main} from './app/main';
import reducer from './ngrx/reducer';
import Actions from './ngrx/actions';

import {enableProdMode} from '@angular/core';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(Main, [
  provide(Actions, {useClass: Actions}),
  provideStore(reducer, {techs: []})
]);
