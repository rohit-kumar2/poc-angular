import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {State} from '../model/State';
import {Constants} from '../shared/constants';
import {AppHttp} from '../shared/http.service';
import { HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class StateService {

  constructor (private http: AppHttp) {}

  getStates(): Observable<State[]> {
    return this.http.get(Constants.STATES_ENDPOINT, null).pipe(map(event => {
      if (event instanceof HttpResponse) {
        return event.body;
      }
    }));
  }

  addState(state: State): Observable<number> {
    return this.http.post(Constants.STATES_ENDPOINT, state, null).pipe(map(event => {
      if (event instanceof HttpResponse) {
        return event.status;
      }
    }));
  }

}
