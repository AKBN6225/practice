import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  public getUsers():Observable<User[]>{
    let url: string= "https://jsonplaceholder.typicode.com/users";
    return this.httpClient.get<User[]>(url);
  }
}
