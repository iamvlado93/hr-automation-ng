import { Component } from '@angular/core';
import { GithubUsersService } from './components/github-users/github-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private githubUser:GithubUsersService) {}
  data: any;
  ngOnInit() {
  this.githubUser.getUsers().subscribe(res => {
    console.log(res)
    })  
  }
}
