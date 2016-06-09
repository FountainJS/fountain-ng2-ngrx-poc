import {Component} from '@angular/core';

@Component({
  selector: 'Header',
  template: `
    <header class="header">
      <p class="header-title">
        <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank">
          Fountain Generator
        </a>
      </p>
      <p class="header-date">
        Generated with FountainJS v0.5.3 on Thu Jun 09 2016 12:09:19 GMT+0200 (CEST)
      </p>
    </header>
  `
})
export class Header {}
