import { Injectable } from '@angular/core';
import ourMovies from '../../sample-movies';

@Injectable()
export class MoviesService {

  movies: any = ourMovies;

  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies.find((movie) => {
      return movie.id === id;
    });
  }
}
