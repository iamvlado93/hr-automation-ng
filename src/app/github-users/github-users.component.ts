import { Component, OnInit } from '@angular/core';
import { githubUsers } from './github-users';
import { GithubUsersService } from './github-users.service';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.scss']
})
export class GithubUsersComponent implements OnInit {
  users: githubUsers[] = [];
  login: any;
  constructor(public githubUsers: GithubUsersService) { }

  ngOnInit() {
    this.githubUsers.getUsers().subscribe(res => {
      this.users = res;
      console.log(res)
    })
  }

  loadMore() {
      this.githubUsers.getMoreUsers().subscribe(res => {
        this.users = res;
        console.log(res)
    })
  }

  loadEvenMore() {
    this.githubUsers.getEvenMoreUsers().subscribe(res => {
        this.users = res;
        console.log(res)
    })
  }

  search() {
    if (this.login === '') {
      this.ngOnInit();
      } else {
        this.users = this.users.filter(res => {
          return res.login.toLocaleLowerCase().match(this.login.toLocaleLowerCase());
      })
    }
  }

  
}
