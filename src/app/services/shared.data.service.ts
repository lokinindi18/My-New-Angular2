import { AppError } from './../common/errors/app.error';
import { BadInputAppError } from './../common/errors/bad.input.error';
import { NotFoundAppError } from './../common/errors/not.found.error';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

export class SharedDataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
      .map(response => response.json());
  }

  create(data: any) {
    return this.http.post(this.url, JSON.stringify(data))
      .map(response => response.json())
      .catch(this.handleError);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json().id)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      console.log('----> Throwing NotFoundAppError.')
      return Observable.throw(new NotFoundAppError(error.json()));
    }
    // tslint:disable-next-line:one-line
    else if (error.status === 400) {
      return Observable.throw(new BadInputAppError(error.json()));
    }
    // tslint:disable-next-line:one-line
    else {
      console.log('----> Throwing AppError.')
      return Observable.throw(new AppError(error.json()));
    }
  }
}
