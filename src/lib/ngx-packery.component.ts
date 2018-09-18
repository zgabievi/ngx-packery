import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
// import Draggabilly from 'draggabilly';
// import imagesLoaded from 'imagesloaded';
import Packery from 'packery';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgxPackeryOptions } from './ngx-packery-options';
import { NgxPackeryService } from './ngx-packery.service';

declare var require: any;
let Draggabilly: any;
let imagesLoaded: any;

@Component({
  selector: 'ngx-packery',
  template: `<ng-content></ng-content>`,
  styles: []
})
export class NgxPackeryComponent implements OnInit, OnDestroy {
  //
  @Output()
  layoutComplete: EventEmitter<any[]> = new EventEmitter();

  //
  @Output()
  dragItemPositioned: EventEmitter<any> = new EventEmitter();

  //
  @Output()
  fitComplete: EventEmitter<any> = new EventEmitter();

  //
  @Output()
  removeComplete: EventEmitter<any> = new EventEmitter();

  //
  @Input()
  options: NgxPackeryOptions;

  //
  private unsubscribe$: Subject<null> = new Subject();

  //
  private pckry: Packery;

  //
  constructor(
    private el: ElementRef,
    private pckryService: NgxPackeryService
  ) {
    this.pckryService.action$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
        if (this.pckry instanceof Packery && params) {
          if (params.args) {
            return this.pckry[params.name](...params.args);
          }

          this.pckry[params.name]();
        }
      });
  }

  //
  ngOnInit() {
    const options: NgxPackeryOptions = {
      ...this.options,
      itemSelector: 'ngx-packery-item'
    };

    this.pckry = new Packery(this.el.nativeElement, options);

    this.pckry.on('layoutComplete', items => this.layoutComplete.emit(items));
    this.pckry.on('dragItemPositioned', item =>
      this.dragItemPositioned.emit(item)
    );
    this.pckry.on('fitComplete', item => this.fitComplete.emit(item));
    this.pckry.on('removeComplete', items => this.removeComplete.emit(items));

    if (this.options.imagesLoaded) {
      imagesLoaded = require('imagesloaded');

      imagesLoaded(this.el.nativeElement).on('progress', () => {
        this.pckry.layout();
      });
    }

    if (this.options.draggabilly) {
      Draggabilly = require('draggabilly');

      const items = this.el.nativeElement.querySelectorAll(
        options.itemSelector
      );

      [].forEach.call(items, item => {
        const draggie = new Draggabilly(item);

        this.pckry.bindDraggabillyEvents(draggie);
      });
    }
  }

  //
  ngOnDestroy() {
    this.pckry.off('layoutComplete', items => this.layoutComplete.emit(items));
    this.pckry.off('dragItemPositioned', item =>
      this.dragItemPositioned.emit(item)
    );
    this.pckry.off('fitComplete', item => this.fitComplete.emit(item));
    this.pckry.off('removeComplete', items => this.removeComplete.emit(items));

    this.pckry.destroy();

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
