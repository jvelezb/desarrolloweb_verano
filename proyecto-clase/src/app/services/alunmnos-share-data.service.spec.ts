import { TestBed } from '@angular/core/testing';

import { AlunmnosShareDataService } from './alunmnos-share-data.service';

describe('AlunmnosShareDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlunmnosShareDataService = TestBed.get(AlunmnosShareDataService);
    expect(service).toBeTruthy();
  });
});
