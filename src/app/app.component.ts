import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-app';
  showMovieList = false;

  onMoviesShown(event: boolean) {
    if (event === true) {
      this.showMovieList = true
    }
    else {
      this.showMovieList = false
    }
  }
}
