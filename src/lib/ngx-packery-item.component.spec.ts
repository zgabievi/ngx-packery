import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPackeryItemComponent } from './ngx-packery-item.component';

describe('NgxPackeryItemComponent', () => {
  let component: NgxPackeryItemComponent;
  let fixture: ComponentFixture<NgxPackeryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPackeryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPackeryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
