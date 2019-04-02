import { TestBed } from '@angular/core/testing';

import { ListsServiceService } from './lists-service.service';

describe('ListsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListsServiceService = TestBed.get(ListsServiceService);
    expect(service).toBeTruthy();
  });
});
