import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTVMovieComponent } from './detail-movie.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

describe('DetailTVMovieComponent', () => {
  let component: DetailTVMovieComponent;
  let fixture: ComponentFixture<DetailTVMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      declarations: [ DetailTVMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTVMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
