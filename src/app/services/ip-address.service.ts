import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpAddressService {
  private apiUrl = 'https://geo.ipify.org/api/v1';
  private apiKey = 'at_Vl4bDrmD56harvNDa8Scuu2JQA3gx';

  constructor(private http: HttpClient) { }

  getIpAddress(): Observable<any> {
    return this.http.get('https://api.ipify.org?format=json');
  }  

  getLocationDetails(ipAddress: string): Observable<any> {
    const url = `${this.apiUrl}?apiKey=${this.apiKey}&ipAddress=${ipAddress}`;
    return this.http.get(url);
  }
}


