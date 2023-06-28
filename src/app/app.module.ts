import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MapComponent } from './components/map/map.component';
import { LocationDetailsBoxComponent } from './components/location-details-box/location-details-box.component';
import { HttpClientModule } from '@angular/common/http';
import { IpAddressService } from './services/ip-address.service';
import { LocationService } from './services/location.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFieldComponent,
    MapComponent,
    LocationDetailsBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [IpAddressService,LocationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
