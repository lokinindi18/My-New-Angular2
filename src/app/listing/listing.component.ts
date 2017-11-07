import { BadInputAppError } from './../common/errors/bad.input.error';
import { Listing } from '../common/model/listing';
import { ListingService } from '../services/listing/listing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  listings: Listing[];
  error: string;
  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.listingService.getAllListing().
      subscribe(
        listFromService => {
          this.listings = listFromService;
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
