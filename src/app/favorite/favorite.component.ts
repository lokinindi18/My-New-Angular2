import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input()isfavorite: boolean;
  @Output() change = new EventEmitter();
  // tslint:disable-next-line:no-inferrable-types
  isExpanded: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isfavorite = !this.isfavorite;
  }

}
