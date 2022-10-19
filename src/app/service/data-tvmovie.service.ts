import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataTvmovieService {

  constructor(private http: HttpClient) {}

  /**
     * Urls de la Api themoviedb.org
     */
  private rutaMovie = 'https://api.themoviedb.org/3/movie/popular?'
  private rutaTv = 'https://api.themoviedb.org/3/tv/popular?'

 /**
   * Param y Header de la petición
   */
  private params = new HttpParams()
  .set('api_key','9a4e107ecbd0de1b3173a24cbe68b6b9')
  .set('language','en-US')
  .set('page','1');
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'aplication/json'
    }),
    params: this.params
  }

  /**
   * Metodo para capturar los datos del listado de las peliculas más populares
   * @returns
   */
  getDataMovie(): Observable<any>{
    return this.http.get(this.rutaMovie,this.httpOptions);
  }

  /**
   * Metodo para capturar los datos del listado de los tv shows más populares
   * @returns
   */
  getDataTv(): Observable<any>{
    return this.http.get(this.rutaTv,this.httpOptions);
  }
}
