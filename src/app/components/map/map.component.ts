import {
  Component,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as L from 'leaflet';
import { LocationDetails } from 'src/app/models/location-details.model';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-map',
  template: `<div id="map" class="map"></div>`,
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnChanges {
  @Input() locationDetails: LocationDetails = new LocationDetails(
    '',
    {
      country: '',
      city: '',
      region: '',
      latitude:   0,
      longitude: 0,
      timezone: '',
    },
    '',
  );


  private map: any;

  constructor(private locationService: LocationService) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnChanges(): void {
    console.log("Aqui cambio");    
    this.updateMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([6.2442, -75.5812], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(this.map);

     this.updateMap();
  }

  private updateMap(): void {
    this.locationService.locationDetails$.subscribe(
      (locationDetails) => {
        if (locationDetails) {
          const { latitude, longitude } = locationDetails.location;
          console.log('Latitude:', latitude);
          console.log('Longitude:', longitude);

          if (
            typeof latitude === 'number' &&
            typeof longitude === 'number' &&
            !isNaN(latitude) &&
            !isNaN(longitude)
          ) {
            this.map.setView([latitude, longitude], 13);
            L.marker([latitude, longitude]).addTo(this.map);
            console.log('Hasta Aqui todo bien');
          } else {
            console.error('Datos de ubicación no válidos');
          }
        } else {
          console.error('Datos de ubicación no disponibles');
        }
      }
    );
  }
}
