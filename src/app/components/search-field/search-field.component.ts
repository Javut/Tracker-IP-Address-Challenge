import { Component, Output, EventEmitter } from '@angular/core';
import { IpAddressService } from 'src/app/services/ip-address.service';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import { LocationDetails } from 'src/app/models/location-details.model';
import { LocationService } from 'src/app/services/location.service';



@Component({
  selector: 'app-search-field',
  template: `
    <form (ngSubmit)="search()">
      <input type="text" [formControl]="ipAddressInput" placeholder="Search for an IP address or domain" />
      <button type="submit">
      <fa-icon [icon]="faAngleRight"></fa-icon>
      </button>
    </form>
  `,
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent {
  public faAngleRight = faAngleRight;
  ipAddressInput: FormControl = new FormControl('');
  @Output() locationDetails: EventEmitter<LocationDetails> = new EventEmitter<LocationDetails>();

  constructor(private ipAddressService: IpAddressService, private locationService: LocationService) {}

  search(): void {
    const ipAddress = this.ipAddressInput.value;
    
    if (ipAddress) {
      this.ipAddressService.getLocationDetails(ipAddress).subscribe(
        (data) => {
          const { ip, location, isp } = data;
          const { country, region, city, lat, lng, timezone } = location;
          const locationDetails: LocationDetails = new LocationDetails(
            ip,
            { country, city, region, latitude: lat, longitude: lng, timezone },
            isp
          );          
          this.locationDetails.emit(locationDetails);
          this.locationService.setLocationDetails(locationDetails);
          this.ipAddressInput.reset('');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
