import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {HttpModule} from '@angular/http';
import {APP_ROUTING} from './app.routes';

//services
import {SpotifyService} from './services/spotify.service';
import { NophotoPipe } from './pipes/nophoto.pipe';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    NophotoPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    SpotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
