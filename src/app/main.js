import {Component} from '@angular/core';
import {Header} from './header';
import {Title} from './title';
import {TechsContainer} from '../ngrx/containers';
import {Footer} from './footer';
import Actions from '../ngrx/actions';

@Component({
  selector: 'App',
  template: `
    <div class="main-container">
      <Header></Header>
      <main class="main">
        <TitleComponent></TitleComponent>
        <TechsContainer></TechsContainer>
      </main>
      <Footer></Footer>
    </div>
  `,
  directives: [Header, Title, TechsContainer, Footer]
})
export class Main {
  constructor(actions: Actions) {
    actions.fetchTechs();
  }
}
