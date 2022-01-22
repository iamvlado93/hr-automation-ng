import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubUsers } from './github-users';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  constructor(private http:HttpClient) { }

  url:string = 'http://localhost:3000/github-users';
  getUsers() {
    return this.http.get<GithubUsers[]>(this.url);
  }
}
