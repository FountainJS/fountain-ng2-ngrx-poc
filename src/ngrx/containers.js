import {Component} from 'angular2/core';
import {Store} from '@ngrx/store';
import {Techs} from '../app/techs/techs';

@Component({
  selector: 'TechsContainer',
  template: '<Techs [techs]="techs | async"></Techs>',
  directives: [Techs]
})
export class TechsContainer {
  constructor(store: Store) {
    this.techs = store.select('techs');
  }
}
