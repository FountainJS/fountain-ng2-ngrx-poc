import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import {Header} from './header';
import {describe, it, expect, async, inject} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';

describe('header component', () => {
  it('should render \'Fountain Generator\'', async(inject([TestComponentBuilder], tcb => {
    tcb.createAsync(Header)
      .then(fixture => {
        fixture.detectChanges();
        const header = fixture.nativeElement;
        expect(header.querySelector('a').textContent.trim()).toBe('Fountain Generator');
      });
  })));
});
