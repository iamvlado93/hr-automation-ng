export class GithubUser {
    login: string;
    avatar_url: string;
    html_url: string;

    constructor(login: string, avatar_url: string, html_url: string) {
        this.login = login;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
    }
}
