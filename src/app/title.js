import {Component} from 'angular2/core';

@Component({
  selector: 'title-component',
  template: `
    <div class="title">
      <h1 class="title-h1">'Allo, 'Allo!</h1>
      <div>
        <img class="title-logo" src="https://raw.githubusercontent.com/FountainJS/generator-fountain-webapp/master/docs/assets/yeoman.png"/>
        <img class="title-logo" src="https://raw.githubusercontent.com/FountainJS/generator-fountain-webapp/master/docs/assets/fountain.png"/>
      </div>
      <h2 class="title-h2">Always a pleasure scaffolding your apps.</h2>
    </div>
  `
})
export class Title {}
