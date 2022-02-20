export class GithubUser {
    login: string;
    avatar_url: string;
    html_url: string;
    location: string;
    stack: string;

    constructor(login: string, avatar_url: string, html_url: string, stack: string, location: string) {
        this.login = login;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
        this.location = location;
        this.stack = stack;
    }
}

export class SubmitForm {
    login: string;
    stack: string;
    location: string;

    constructor(login: string, stack: string, location: string) {
        this.login = login;
        this.location = location;
        this.stack = stack;
    }
} 
