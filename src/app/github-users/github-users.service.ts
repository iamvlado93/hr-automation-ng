import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.stage'

import { HttpClient } from '@angular/common/http';
import { GithubUser } from './github-user';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  private API_URL = environment.GITHUB_API_URL;

  private users: GithubUser[] = [];
  private users$ = new BehaviorSubject<GithubUser[]>([]);

  constructor(private http:HttpClient) { }

  getUsers(): Observable<GithubUser[]> {
    return this.users$;
  }

  load(pageNum: number = 0, pageSize: number = 10) {
    this.http.get<GithubUser[]>(this.API_URL, {
      params: {'_page': pageNum, '_limit': pageSize}
    }).subscribe(users => {
      this.users.push(...users);
      this.users$.next(this.users);
    });
  }
}
