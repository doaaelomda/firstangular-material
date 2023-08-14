import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServicesService {

  constructor(private http: HttpClient) { }

  getSources(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines/sources?apiKey=3789fe4b88b3482ca32890cdd06b1d86');
  }

  getArticles(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines/sources=bcc?apiKey=3789fe4b88b3482ca32890cdd06b1d86');
  }

  getArticleById(source: string): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines/sources=' + source + '?apiKey=3789fe4b88b3482ca32890cdd06b1d86');
  }
}