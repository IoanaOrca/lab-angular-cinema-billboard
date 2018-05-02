import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [MoviesService]
})
export class MyMovieComponentComponent implements OnInit {

  movie: Object;
  movieId: number;

  constructor(private moviesServices:MoviesService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.movieId = Number(params.id);
      this.movie = this.moviesServices.getMovie(this.movieId);
    });
  }
}
