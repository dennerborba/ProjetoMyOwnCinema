import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-card',
  standalone: true,
  imports: [],
  templateUrl: './movies-card.component.html',
  styleUrl: './movies-card.component.css'
})
export class MoviesCardComponent {
  @Input() movie_name: string = '';
  @Input() movie_length: number = 0;
  @Input() movie_summary: string = '';
  @Input() imageURL: string = '';
}
