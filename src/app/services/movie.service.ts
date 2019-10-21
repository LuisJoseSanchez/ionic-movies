import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://www.omdbapi.com/';
  apiKey = 'ef421f54';

  constructor(private http: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(
      `${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`
    );
  }

  getDetails(id: number) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
