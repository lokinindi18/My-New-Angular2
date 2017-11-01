import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() isliked;
  @Input() likescount;

  constructor() { }

  onClick() {
    this.isliked = !this.isliked;
    this.likescount += this.likescount !== 0 ? -1 : 1;
    console.log('-----> isLikes: ' + this.isliked + ' , likesCount: ' + this.likescount);
  }

}
