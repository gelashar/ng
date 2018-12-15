import { TestBed } from '@angular/core/testing';

import { NgLazyloadService } from './ng-lazyload.service';

describe('NgLazyloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgLazyloadService = TestBed.get(NgLazyloadService);
    expect(service).toBeTruthy();
  });
});
