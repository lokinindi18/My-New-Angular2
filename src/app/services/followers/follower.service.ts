import { Followers } from './../../common/model/followers';
import { AppError } from './../../common/errors/app.error';
import { BadInputAppError } from './../../common/errors/bad.input.error';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class FollowerService {
  private gitUrl = 'https://api.github.com/users/mosh-hamedani/followers';
  constructor(private http: Http) { }

  getAllFollowers() {
    return this.http.get(this.gitUrl).
      map(response => response.json() as Followers[]).
      catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInputAppError(error.json()));
    }
    // tslint:disable-next-line:one-line
    else {
      console.log('----> Throwing AppError.')
      return Observable.throw(new AppError(error.json()));
    }
  }

}
