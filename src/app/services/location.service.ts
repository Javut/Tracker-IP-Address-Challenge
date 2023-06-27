import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocationDetails } from 'src/app/models/location-details.model';

@Injectable()
export class LocationService {
  private locationDetailsSubject: Subject<LocationDetails> =
    new Subject<LocationDetails>();

  locationDetails$ = this.locationDetailsSubject.asObservable();

  setLocationDetails(locationDetails: LocationDetails): void {
    this.locationDetailsSubject.next(locationDetails);
  }
}
