import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResultsForDatabase} from '../../model/results/results.for.database';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class DatabaseService {

  public url = 'https://medutoolsbe.herokuapp.com/api/v1/opioids-calculator';

  private defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  private defaultOptions = {headers: this.defaultHeaders};

  constructor(private http: HttpClient) {}

  public saveDataToDatabase(resultsForDatabase: ResultsForDatabase): Observable<any> {
    return this.http.post(this.url, resultsForDatabase, {responseType: 'text'}) as Observable<any>;
  }
}
