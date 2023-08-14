import { Iuser } from './users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url='https://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) { }
  public getuser():Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this.url)
  }
}
