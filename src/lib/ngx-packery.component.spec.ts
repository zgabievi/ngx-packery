import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPackeryComponent } from './ngx-packery.component';

describe('NgxPackeryComponent', () => {
  let component: NgxPackeryComponent;
  let fixture: ComponentFixture<NgxPackeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPackeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPackeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
