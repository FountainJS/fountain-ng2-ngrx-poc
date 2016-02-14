import {Component} from 'angular2/core';
import {Header} from './header';
import {Title} from './title';
import {Techs} from './techs/techs';
import {Footer} from './footer';
import Actions from '../ngrx/actions';

@Component({
  selector: 'techs-app',
  template: `
    <div class="main-container">
      <header-component></header-component>
      <main class="main">
        <title-component></title-component>
        <techs-component></techs-component>
      </main>
      <footer-component></footer-component>
    </div>
  `,
  directives: [Header, Title, Techs, Footer]
})
export class Main {
  constructor(actions: Actions) {
    actions.fetchTechs();
  }
}
