// import { Component } from '@angular/core';
// import { LocationDetails } from './models/location-details.model';
// import { IpAddressService } from './services/ip-address.service';

// @Component({
//   selector: 'app-root',
//   template: `
//     <div class="app-wrapper">
//       <app-header
//         [defaultLocationDetails]="defaultLocationDetails"
//       ></app-header>
//       <app-map [locationDetails]="defaultLocationDetails" ></app-map>
//     </div>
//   `,
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   defaultLocationDetails: LocationDetails = new LocationDetails(
//     '',
//     {
//       country: '',
//       city: '',
//       region: '',
//       latitude: 6.2442,
//       longitude: -75.5812,
//       timezone: '',
//     },
//     ''
//   );

//   constructor(private ipAddressService: IpAddressService) {}

//   ngOnInit(): void {
//     this.getDefaultLocationDetails();
//   }

//   getDefaultLocationDetails(): void {
//     this.ipAddressService.getLocationDetails('').subscribe(
//       (data) => {
//         const { ip, location, isp } = data;
//         const { country, city, region, latitude, longitude, timezone } =
//           location;
//         const locationDetails = new LocationDetails(
//           ip,
//           { country, city, region, latitude, longitude, timezone },
//           isp
//         );
//         this.defaultLocationDetails = locationDetails;
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }
// }

import { Component } from '@angular/core';
import { LocationDetails } from './models/location-details.model';
import { IpAddressService } from './services/ip-address.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-wrapper">
      <app-header
        [defaultLocationDetails]="defaultLocationDetails"
      ></app-header>
      <app-map [locationDetails]="defaultLocationDetails"></app-map>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  defaultLocationDetails: LocationDetails = new LocationDetails(
    '',
    {
      country: '',
      city: '',
      region: '',
      latitude: 6.2442,
      longitude: -75.5812,
      timezone: '',
    },
    ''
  );

  constructor(private ipAddressService: IpAddressService) {}

  ngOnInit(): void {
    this.getDefaultLocationDetails();
  }

  getDefaultLocationDetails(): void {
    this.ipAddressService.getIpAddress().subscribe(
      (data: any) => {
        const ipAddress = data.ip;
        this.getLocationDetails(ipAddress);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getLocationDetails(ipAddress: string): void {
    this.ipAddressService.getLocationDetails(ipAddress).subscribe(
      (data: any) => {
        console.log("Mi Data:"+data.location.lat);
        
        const { ip, location, isp } = data;
        const { country, city, region, lat, lng, timezone } = location;
        const locationDetails = new LocationDetails(
          ip,
          {
            country,
            city,
            region,
            latitude: lat,
            longitude: lng,
            timezone,
          },
          isp
        );
        this.defaultLocationDetails = locationDetails;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
