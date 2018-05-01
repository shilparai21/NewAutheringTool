import { Component } from '@angular/core';
import {DataService} from './data.service';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Editor';
  public foods;
  public books;
  public movies;
  public foods_error: Boolean = false;
  coins = [];
  constructor(private dataService: DataService , private _demoService: DemoService) {
    this.coins = dataService.getMyItems();
  }

  getFoods() {
    this._demoService.getFoods().subscribe(
      data => { this.foods = data },
      err => { this.foods_error = true }
    );
  }

  getBooksAndMovies() {
    this._demoService.getBooksAndMovies().subscribe(
      data => {
        this.books = data[0],
        this.movies = data[1];
      }
    );
  }


}
