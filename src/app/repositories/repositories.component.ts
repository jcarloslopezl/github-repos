import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from './repositories.service';

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
	repository : IRepository = { name: "", description: "" };

  constructor(private repoService : RepositoriesService) { }

  ngOnInit() {
  	this.repoService.getRepos().subscribe((data) => {
      this.repositories = data.json();
      this.repository = this.repositories[0];
    })
  }

  setMainRepository(repository){
  	this.repository = repository;
  }

}
