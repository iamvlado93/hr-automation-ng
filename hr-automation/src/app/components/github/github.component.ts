import { Component, OnInit } from '@angular/core';
import githubUsers from './jsonFolder/users.json';

interface GithubUser {
  login: string;
  id: string;
  avatar_url: string;
  html_url: string;
}

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  constructor() { }

  users:GithubUser[]=githubUsers;

  ngOnInit(): void {
  }

}
