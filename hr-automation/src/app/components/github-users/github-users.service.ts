import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  constructor(private http:HttpClient) { }

  getUsers() {
    let url = 'https://api.github.com/search/users?q=language%3AJava+location%3ABelarus&type=Users';
    return this.http.get(url);
  }
}
