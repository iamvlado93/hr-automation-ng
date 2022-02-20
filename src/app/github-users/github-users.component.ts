import { Component, OnInit } from '@angular/core';
import { GithubUser, SubmitForm } from './github-user';
import { GithubUsersService } from './github-users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, map, Observable} from "rxjs";

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.scss']
})
export class GithubUsersComponent implements OnInit {
  filterForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    stack: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required])
  });
  
  users$: Observable<GithubUser[]>;
  form$: Observable<SubmitForm[]>;
  searchString: string = '';
  pageNum: number = 1;
  pageSize: number = 10;

  constructor(public githubUsers: GithubUsersService) {
    this.users$ = githubUsers.getUsers();
  }

  ngOnInit() {
    this.filterForm.valueChanges
      .pipe(
        debounceTime(500))
        .subscribe((value) => value);
  }

  // onSubmit() {
  //  console.log(this.filterForm.value)
  // }

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
}
