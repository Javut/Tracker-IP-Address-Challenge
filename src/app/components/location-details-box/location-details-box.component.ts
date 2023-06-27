import { Component, Input } from '@angular/core';
import { LocationDetails } from 'src/app/models/location-details.model';

@Component({
  selector: 'app-location-details-box',
  template: `
    <div class="card">
      <div class="flex-container">
        <div class="details-container">
          <h4>IP Address</h4>
          <p>{{ locationDetails.ipAddress }}</p>
        </div>
        <div class="vertical-line"></div>
        <div class="details-container">
          <h4>Location</h4>
          <p>
            {{ locationDetails.location.country }},
            {{ locationDetails.location.city }},
            {{ locationDetails.location.region }}
          </p>
        </div>
        <div class="vertical-line"></div>
        <div class="details-container">
          <h4>Timezone</h4>
          <p>{{ locationDetails.location.timezone }}</p>
        </div>
        <div class="vertical-line"></div>
        <div class="details-container">
          <h4>ISP</h4>
          <p>{{ locationDetails.isp }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./location-details-box.component.scss'],
})
export class LocationDetailsBoxComponent {
  @Input() locationDetails: LocationDetails = new LocationDetails(
    '',
    { country: '', city: '', region: '', latitude: 0, longitude: 0, timezone: '' },
    '',
  );
}
