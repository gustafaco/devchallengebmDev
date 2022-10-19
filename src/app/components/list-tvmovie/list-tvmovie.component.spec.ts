import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTVMovieComponent } from './list-tvmovie.component';

describe('ListTVMovieComponent', () => {
  let component: ListTVMovieComponent;
  let fixture: ComponentFixture<ListTVMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTVMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTVMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
