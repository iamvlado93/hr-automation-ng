import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.stage'

import { HttpClient } from '@angular/common/http';
import { githubUsers } from './github-users';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  constructor(private http:HttpClient) { }

  url1 = environment.GITHUB_API_KEY;
  url2 = environment.GITHUB_API_KEY2;
  url3 = environment.GITHUB_API_KEY3;
  
  getUsers() {
    return this.http.get<githubUsers[]>(this.url1);
  }

  getMoreUsers() {
    return this.http.get<githubUsers[]>(this.url2);
  }

  getEvenMoreUsers() {
    return this.http.get<githubUsers[]>(this.url3);
  }
}
