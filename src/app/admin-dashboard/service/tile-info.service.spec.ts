import { TestBed } from '@angular/core/testing';

import { TileInfoService } from './tile-info.service';

describe('TileInfoService', () => {
  let service: TileInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TileInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
