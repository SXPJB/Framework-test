import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any>{
    return  this.http.get<any>('http://localhost:3000/user/getAll');
  }

  insertUser(user: User): Observable<any>{
    return this.http.post<any>('http://localhost:3000/user/insert', user);
  }

  deleteUser(id: number): Observable<any>{
    const params = new HttpParams().set('id', id.toString());
    return this.http.get('http://localhost:3000/user/delete', {params});
  }
}
