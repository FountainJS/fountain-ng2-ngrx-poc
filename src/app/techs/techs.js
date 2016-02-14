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
        <span [textContent]="techs | json"></span>
        <div *ngFor="#tech of techs">
          tech!
          <tech-component [tech]="tech"></tech-component>
        </div>
      </div>
    </div>
  `,
  directives: [Tech]
})
export class Techs {
  constructor(store: Store) {
    this.techs = [];
    // console.log('Techs', store);
    // this.techs = store.select('techs');
    // console.log('Techs', this.techs);
    // this.techs.subscribe(techs => console.log('sub', techs));
    store
      .select('techs')
      .subscribe(techs => {
        this.techs = techs
        console.log('this.techs', this.techs);
      });
  }
}
