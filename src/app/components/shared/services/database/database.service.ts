import {HttpClient} from '@angular/common/http';
import {ResultsForDatabase} from '../../model/results/results.for.database';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class DatabaseService {

  public url = 'https://medutoolsbe.herokuapp.com/api/v1/opioids-calculator';
  // public url = 'http://localhost:8080/api/v1/opioids-calculator';

  constructor(private http: HttpClient) {}

  public saveDataToDatabase(resultsForDatabase: ResultsForDatabase): Observable<any> {
    return this.http.post(this.url, resultsForDatabase, {responseType: 'text'}) as Observable<any>;
  }
}
