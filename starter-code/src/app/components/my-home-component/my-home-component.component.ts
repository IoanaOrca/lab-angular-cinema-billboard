import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [MoviesService]
})
export class MyHomeComponentComponent implements OnInit {

  moviesArray: Array<Object> = [];

  constructor(private movies:MoviesService) { }

  ngOnInit() {

    this.moviesArray = this.movies.getMovies();
  }

}
