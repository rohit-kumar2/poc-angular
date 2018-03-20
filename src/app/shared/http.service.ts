import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpEvent, HttpRequest, HttpResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppHttp {

  constructor(private http: HttpClient) { }

  post(url: string, body: any, options?: {}) {
    return this.request('POST', url, body, options);
  }

  get(url: string, options: {}) {
    return this.request('GET', url, null, options);
  }

  put(url: string, body: any, options: {}) {
    return this.request('PUT', url, body, options);
  }

  Delete(url: string, body: any = {}, options: {}) {
    return this.request('DELETE', url, body, options);
  }

  private request(method: string,
                  url: string,
                  body?: any,
                  options?: {}): Observable<HttpEvent<any>> {

    const request = new HttpRequest(method, url, body, options);

    return this.http.request(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('HTTP Log : Status: ' + event.status + ' Response received for : ' +
            request.url + ' is : ' + event.body);
        } else {
          console.log(event);
        }
      }),
      catchError(this.handleError));
  }
  private handleError (error: Response | any) {
    if (error.message) {
      console.error(error.message);
      return Observable.throw('Message' + error.message);
    } else {
      console.error(error);
      return Observable.throw('W/O Message' + error);
    }
  }

}
