import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movieInfo: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.movieService.getDetails(id).subscribe(
      data => this.movieInfo = data
    );
  }

  openWebsite() {
    window.open(this.movieInfo.Website, '_blank');
  }

}
