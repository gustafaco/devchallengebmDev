import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailTvMovieService {

  constructor(private http: HttpClient) {}

  /**
   * Urls de la Api themoviedb.org
   */
  private ulrDetailMovie: string = 'https://api.themoviedb.org/3/movie/'
  private ulrDetailTv: string = 'https://api.themoviedb.org/3/tv/'

  /**
   * Param y Header de la petición
   */

  private params = new HttpParams()
  .set('api_key','9a4e107ecbd0de1b3173a24cbe68b6b9')
  .set('language','en-US');
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'aplication/json'
    }),
    params: this.params
  }

  /**
   * Metodo para capturar los datos del detalle de la pelicula seleccionada
   * @param id
   * @returns
   */

  getDataMovie(id:number): Observable<any>{
    return this.http.get(this.ulrDetailMovie + id + "?" + this.params);
  }

  /**
   * Metodo para capturar peliculas similares a la pelicula seleccionada
   * @param id
   * @returns
   */

  getsimilarMovie(id:number): Observable<any>{
    return this.http.get(this.ulrDetailMovie + id + "/similar?" + this.params);
  }

  /**
   *  Metodo para capturar los datos del detalle de la tv show seleccionada
   * @param id
   * @returns
   */
  getDataTv(id:number): Observable<any>{
    return this.http.get(this.ulrDetailTv + id + "?" + this.params);
  }
  /**
   * Metodo para capturar peliculas similares a la tv show seleccionada
   * @param id
   * @returns
   */
  getsimilarTv(id:number): Observable<any>{
    return this.http.get(this.ulrDetailTv + id + "/similar?" + this.params);
  }

}
