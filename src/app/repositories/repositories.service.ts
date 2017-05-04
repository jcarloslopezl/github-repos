import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

@Injectable()
export class RepositoriesService {
	
	baseUrl: string = "https://api.github.com";
	username: string = "jcarloslopezl";

  constructor(private http: Http) { }
  
	getRepos(){
		return this.http.get(this.baseUrl + "/users/" + this.username + '/repos');
	}

}
