import { BadInputAppError } from './../common/errors/bad.input.error';
import { Followers } from './../common/model/followers';
import { FollowerService } from '../services/followers/follower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  followers: Followers[];
  error: string;
  constructor(private followerService: FollowerService) { }

  ngOnInit() {
    this.followerService.getAllFollowers().
      subscribe(
      listOfFollowers => {
        this.followers = listOfFollowers;
      },
      error => {
        // tslint:disable-next-line:one-line
        if (error instanceof BadInputAppError) {
          console.log('-----> BadInputAppError exception occrred.');
          this.error = (error as BadInputAppError).myErrorMsg;
        }
        throw error;
      });
  }

}
