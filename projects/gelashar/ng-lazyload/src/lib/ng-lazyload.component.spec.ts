import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLazyloadComponent } from './ng-lazyload.component';

describe('NgLazyloadComponent', () => {
  let component: NgLazyloadComponent;
  let fixture: ComponentFixture<NgLazyloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLazyloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLazyloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
