import { TestBed } from '@angular/core/testing';

import { LocalService2Service } from './local-service2.service';

describe('LocalService2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalService2Service = TestBed.get(LocalService2Service);
    expect(service).toBeTruthy();
  });
});
