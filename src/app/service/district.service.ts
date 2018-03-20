import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpResponse} from '@angular/common/http';
import {District} from '../model/District';
import {Constants} from '../shared/constants';
import {AppHttp} from '../shared/http.service';
import {map} from 'rxjs/operators';

@Injectable()
export class DistrictService {

  constructor(private http: AppHttp) { }

  getStateDistricts(stateId: number): Observable<District[]> {
    return this.http.get(Constants.STATES_ENDPOINT + '/' + stateId +
      Constants.DISTRICTS_ENDPOINT, null).pipe(map(event => {
      if (event instanceof HttpResponse) {
        return event.body;
      }
    }));
  }

  addDistrict(district: District, stateId: number): Observable<number> {
    return this.http.post(Constants.STATES_ENDPOINT + '/' + stateId +
      Constants.DISTRICTS_ENDPOINT, district, null).pipe(map(event => {
      if (event instanceof HttpResponse) {
        return event.status;
      }
    }));
  }

}
