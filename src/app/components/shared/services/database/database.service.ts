import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResultsForDatabase} from '../../model/results/results.for.database';
import {Injectable} from '@angular/core';

@Injectable()
export class DatabaseService {

  public url = 'https://medutools-db-default-rtdb.firebaseio.com/opioids.json';

  defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  defaultOptions = {headers: this.defaultHeaders};

  constructor(private http: HttpClient) {}

  public saveDataToDatabase(resultsForDatabase: ResultsForDatabase): Promise<any> {
    return this.http.post(this.url, resultsForDatabase, this.defaultOptions).toPromise();
  }
}
