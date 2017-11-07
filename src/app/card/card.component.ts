import { Listing } from '../common/model/listing';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('card') card: Listing;

  constructor() { }

  ngOnInit() {
  }

}
