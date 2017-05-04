import { Component, OnInit } from '@angular/core';

interface IRepository{
	name : string,
	description : string
}

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})

export class RepositoriesComponent implements OnInit {

	repositories : any = [];
	repository : IRepository;

  constructor() { }

  ngOnInit() {
  	this.repository = { name: "Main repository", description: "Main repository" };

  	this.repositories = [
  		{ name: "Repository 1", description: "Repository 1" },
  		{ name: "Repository 2", description: "Repository 2" },
  		{ name: "Repository 3", description: "Repository 3" },
  		{ name: "Repository 4", description: "Repository 4" },
  	];
  }

}
