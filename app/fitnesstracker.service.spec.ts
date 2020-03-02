import { TestBed } from '@angular/core/testing';

import { FitnesstrackerService } from './fitnesstracker.service';

describe('FitnesstrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FitnesstrackerService = TestBed.get(FitnesstrackerService);
    expect(service).toBeTruthy();
  });
});
