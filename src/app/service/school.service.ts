import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {School} from '../model/School';
import {Constants} from '../shared/constants';
import {AppHttp} from '../shared/http.service';
import {map} from 'rxjs/operators';

@Injectable()
export class SchoolService {

  constructor(private http: AppHttp) { }

  getDistrictSchools(districtId: number): Observable<School[]> {
    return this.http.get(Constants.DISTRICTS_ENDPOINT + '/' + districtId +
      Constants.SCHOOLS_ENDPOINT, null).pipe(map(event => {
      if (event instanceof HttpResponse) {
        return event.body;
      }
    }));
  }

  addSchool(school: School, districtId: number): Observable<number> {
    return this.http.post(Constants.DISTRICTS_ENDPOINT + '/' + districtId +
      Constants.SCHOOLS_ENDPOINT, school, null).pipe(map(event => {
      if (event instanceof HttpResponse) {
        return event.status;
      }
    }));
  }

}
