import { TestBed } from '@angular/core/testing';

import { DataTvmovieService } from './data-tvmovie.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('DataTvmovieService', () => {
  let service: DataTvmovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataTvmovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
