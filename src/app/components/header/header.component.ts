import { Component, Input } from '@angular/core';
import { LocationDetails } from 'src/app/models/location-details.model';
import { IpAddressService } from 'src/app/services/ip-address.service';

@Component({
  selector: 'app-header',
  template: `
    <div class="header-wrapper">
      <h1>IP Address Tracker</h1>
      <app-search-field
        (locationDetails)="handleLocationDetails($event)"
      ></app-search-field>
      <app-location-details-box
        [locationDetails]="locationDetails"
      ></app-location-details-box>
    </div>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() defaultLocationDetails: LocationDetails = new LocationDetails(
    '',
    { country: '', city: '', region: '', latitude: 0, longitude: 0, timezone: '' },
    '',
  );
    locationDetails: LocationDetails = new LocationDetails(
    '',
    { country: '', city: '', region: '', timezone: '' , latitude: 0, longitude: 0 },
    '',
  );

  constructor(private ipAddressService: IpAddressService) {
    this.getDefaultLocationDetails();
  }

  getDefaultLocationDetails(): void {
    this.ipAddressService.getLocationDetails('').subscribe(
      (data) => {
        const { ip, location, isp } = data;
        const { country, city, region, latitude, longitude, timezone } = location;
        this.locationDetails = new LocationDetails(
          ip,
          { country, city, region, latitude, longitude,  timezone },
          isp,
        );
      },
      (error) => {
        console.log(error);
      },
    );
  }

  handleLocationDetails(details: LocationDetails): void {    
    this.locationDetails = details;
  }
}
