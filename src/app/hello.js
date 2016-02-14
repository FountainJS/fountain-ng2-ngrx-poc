import {Component} from 'angular2/core';

@Component({
  selector: 'hello',
  template: '<h1>{{ hello }}</h1>'
})
export class HelloComponent {
  constructor() {
    this.hello = 'Hello World!';
  }
}
