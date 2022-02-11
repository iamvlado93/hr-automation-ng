import { Component, OnInit } from '@angular/core';
import { GithubUser } from './github-user';
import { GithubUsersService } from './github-users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms'
import { map, Observable} from "rxjs";

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.scss']
})
export class GithubUsersComponent implements OnInit {
  filterForm = new FormGroup({
    login: new FormControl('', Validators.required),
    stack: new FormControl(''),
    location: new FormControl('')
  });

  users$: Observable<GithubUser[]>;
  searchString: string = '';
  pageNum: number = 1;
  pageSize: number = 10;

  constructor(public githubUsers: GithubUsersService) {
    this.users$ = githubUsers.getUsers();
  }

  ngOnInit() {
    this.githubUsers.load(this.pageNum, this.pageSize);
  }

  loadMore() {
    this.pageNum += 1;
    this.githubUsers.load(this.pageNum, this.pageSize);
  }

  searchByLogin() {
    if (this.searchString && this.searchString !== '') {
      this.users$ = this.users$.pipe(
        map((users: GithubUser[]) =>
          users.filter(u => u.login.toLocaleLowerCase().match(this.searchString.toLocaleLowerCase()))
        ));
    }
  }

  onSubmit() {
    console.log(this.filterForm.value)
    console.log(this.filterForm.controls['login'].value)
  }
}
