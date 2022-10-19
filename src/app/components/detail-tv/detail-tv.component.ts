import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from 'src/app/models/item.models';
import { DetailTvMovieService } from 'src/app/service/detail-tv-movie.service';

@Component({
  selector: 'app-detail-tv',
  templateUrl: './detail-tv.component.html',
  styleUrls: ['./detail-tv.component.scss']
})
export class DetailTvComponent implements OnInit {

  name:string = ""
  poster_path:string = ""
  overview:string = ""
  tagline:string = ""
  idItem:number=0
  similarTV: ItemModel[] = [];

  constructor(private detailTvMovieService:DetailTvMovieService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idItem = this.route.snapshot.params['idItem'];
    this.getTvDetail(this.idItem);
    this.getSimilarTv(this.idItem);
  }

  getTvDetail(id:number){
    this.detailTvMovieService.getDataTv(id).subscribe(data =>{
      console.log(data)
      this.name=data.name
      this.poster_path=data.poster_path
      this.overview=data.overview
      this.tagline=data.tagline
    })
  }

  getSimilarTv(id:number){
    this.detailTvMovieService.getsimilarTv(id).subscribe(data =>{
      this.similarTV = data.results
      console.log(this.similarTV);

    })

  }

}
