import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../../shared/model/movies'
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = MOVIES
  constructor() { }

  ngOnInit(): void {
  }

}
