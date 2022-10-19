import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from 'src/app/models/item.models';
import { DetailTvMovieService } from 'src/app/service/detail-tv-movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailTVMovieComponent implements OnInit {

  title:string = ""
  poster_path:string = ""
  overview:string = ""
  tagline:string = ""
  idItem:number=0
  similarMovie: ItemModel[] = [];



  constructor(private detailTvMovieService:DetailTvMovieService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idItem = this.route.snapshot.params['idItem'];
    this.getMoviesDetail(this.idItem);
    this.getSimilarMovies(this.idItem);
  }

  getMoviesDetail(id:number){
    this.detailTvMovieService.getDataMovie(id).subscribe(data =>{
      console.log(data)
      this.title=data.title
      this.poster_path=data.poster_path
      this.overview=data.overview
      this.tagline=data.tagline
    })
  }

  getSimilarMovies(id:number){
    this.detailTvMovieService.getsimilarMovie(id).subscribe(data =>{
      this.similarMovie = data.results
      console.log(this.similarMovie);

    })

  }
}
