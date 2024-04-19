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
  constructor( private seriesService: SeriesService) { }

  getSeries(): void {
    this.seriesService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
