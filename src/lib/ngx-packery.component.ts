import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import Packery from 'packery';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgxPackeryOptions } from './ngx-packery-options';
import { NgxPackeryService } from './ngx-packery.service';

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
    private elementRef: ElementRef,
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
    this.pckry = new Packery(this.elementRef.nativeElement, {
      ...this.options,
      itemSelector: 'ngx-packery-item'
    });

    this.pckry.on('layoutComplete', items => this.layoutComplete.emit(items));
    this.pckry.on('dragItemPositioned', item =>
      this.dragItemPositioned.emit(item)
    );
    this.pckry.on('fitComplete', item => this.fitComplete.emit(item));
    this.pckry.on('removeComplete', items => this.removeComplete.emit(items));
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
