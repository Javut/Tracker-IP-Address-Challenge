export class LocationDetails {
  ipAddress: string;
  location: {
    country: string;
    city: string;
    region: string;
    timezone: string;
    latitude: number;  
    longitude: number; 
  };
  isp: string;

  constructor(
    ipAddress: string,
    location: {
      country: string;
      city: string;
      region: string;
      latitude: number;  
      longitude: number;  
      timezone: string;
    },
    isp: string
  ) {
    this.ipAddress = ipAddress;
    this.location = location;
    this.isp = isp;
  }
}
