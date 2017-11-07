
import { AppError } from './../../common/errors/app.error';
import { BadInputAppError } from './../../common/errors/bad.input.error';
import { Observable } from 'rxjs/Observable';
import { Listing } from '../../common/model/listing';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ListingService {
  private jsonUrl = 'data/listingsample.json';
  constructor(private http: Http) { }

  getAllListing() {
    return this.http.get(this.jsonUrl).
      map(response => response.json() as Listing[]).
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
