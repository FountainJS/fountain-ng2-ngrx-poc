import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {Store} from '@ngrx/store';
import {Tech} from './tech';

@Component({
  selector: 'techs-component',
  template: `
    <div class="techs-container">
      <h2 class="techs-h2">
        Cooked with all these awesome technologies:
      </h2>
      <div class="techs">
        <tech-component *ngFor="#tech of techs | async" [tech]="tech"></tech-component>
      </div>
    </div>
  `,
  directives: [Tech]
})
export class Techs {
  constructor(store: Store) {
    this.techs = store.select('techs');
  }
}
