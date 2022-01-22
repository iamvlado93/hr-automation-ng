import { Component, OnInit } from '@angular/core';
import { GithubUsers } from './github-users';
import { GithubUsersService } from './github-users.service';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.scss']
})
export class GithubUsersComponent implements OnInit {
  users: GithubUsers[] = [];
  login: any;
  p: number = 1;
  constructor(public githubUsers: GithubUsersService) { }

  ngOnInit(): void {
    this.githubUsers.getUsers().subscribe(response => {
      this.users = response;
    })
  }
 Search() {
   if(this.login === '') {
     this.ngOnInit();
     } else {
       this.users = this.users.filter(res => {
         return res.login.toLocaleLowerCase().match(this.login.toLocaleLowerCase());
       })
   }
 }
}
