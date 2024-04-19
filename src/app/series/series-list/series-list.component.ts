import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Series> = [];
  averageSeasons: number = 0;
  constructor( private seriesService: SeriesService) { }

  getSeries(): void {
    this.seriesService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }
  private calculateAverageSeasons(): void {
    const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    this.averageSeasons = totalSeasons / this.series.length;
  }
}

