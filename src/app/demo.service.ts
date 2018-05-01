import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';  // replaces previous Http service

import {Observable} from 'rxjs/Rx';

@Injectable()
export class DemoService {

  constructor(private http: HttpClient) { }

  // Uses http.get() to load a single JSON file
  getFoods() {
    return this.http.get('/app/food.json').map((res: Response) => res.json());
  }

  // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
  // The entire operation will result in an error state if any single request fails.
  getBooksAndMovies() {
    return Observable.forkJoin(
      this.http.get('/app/books.json').map((res: Response) => res.json()),
      this.http.get('/app/movies.json').map((res: Response) => res.json())
    );
  }

}
