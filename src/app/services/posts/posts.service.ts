import { BadInputAppError } from './../../common/errors/bad.input.error';
import { AppError } from './../../common/errors/app.error';
import { NotFoundAppError } from './../../common/errors/not.found.error';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SharedDataService } from 'app/services/shared.data.service';

@Injectable()
export class PostsService extends SharedDataService {

  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
  }
}
