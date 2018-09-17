import { Injectable } from '@angular/core';
import { Packery } from 'packery';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NgxPackeryService {
  //
  action$: BehaviorSubject<{ name: string; args?: any[] }> = new BehaviorSubject(
    null
  );

  //
  layout() {
    this.action$.next({ name: 'layout' });
  }

  //
  shiftLayout() {
    this.action$.next({ name: 'shiftLayout' });
  }

  //
  layoutItems(items: any[], isInstant?: boolean) {
    this.action$.next({ name: 'layoutItems', args: [ items, isInstant ] });
  }

  //
  fit(element: any, x?: number, y?: number) {
    this.action$.next({ name: 'fit', args: [ element, x, y ] });
  }

  //
  stamp(elements: Element) {
    this.action$.next({ name: 'stamp', args: [ elements ] });
  }

  //
  unstamp(elements: Element | Element[] | NodeList) {
    this.action$.next({ name: 'unstamp', args: [ elements ] });
  }

  //
  appended(elements: Element | Element[] | NodeList) {
    this.action$.next({ name: 'appended', args: [ elements ] });
  }

  //
  prepended(elements: Element | Element[] | NodeList) {
    this.action$.next({ name: 'prepended', args: [ elements ] });
  }

  //
  addItems(elements: Element | Element[] | NodeList) {
    this.action$.next({ name: 'addItems', args: [ elements ] });
  }

  //
  remove(elements: Element | Element[] | NodeList) {
    console.log(elements);

    this.action$.next({ name: 'remove', args: [ elements ] });
  }

  //
  reloadItems() {
    this.action$.next({ name: 'reloadItems' });
  }

  //
  destroy() {
    this.action$.next({ name: 'destroy' });
  }

  //
  data(): Packery {
    return Packery.data('ngx-packery');
  }

  //
  getItemElements(): any[] {
    return this.data().getItemElements();
  }
}
