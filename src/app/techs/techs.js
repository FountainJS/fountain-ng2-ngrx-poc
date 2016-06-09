import {Component, Input} from '@angular/core';
import 'rxjs/Rx';
import {Tech} from './tech';

@Component({
  selector: 'Techs',
  template: `
    <div class="techs-container">
      <h2 class="techs-h2">
        Cooked with all these awesome technologies:
      </h2>
      <div class="techs">
        <Tech *ngFor="let tech of techs" [tech]="tech"></Tech>
      </div>
    </div>
  `,
  directives: [Tech]
})
export class Techs {
  @Input() techs;
}
