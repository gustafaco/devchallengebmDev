import { TestBed } from '@angular/core/testing';

import { DetailTvMovieService } from './detail-tv-movie.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('DetailTvMovieService', () => {
  let service: DetailTvMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DetailTvMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
